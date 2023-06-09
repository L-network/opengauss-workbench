<template>
    <div class="s-i-base">
        <!-- Suggestions -->
        <div class="suggsiton-wrap" v-if="requestType === 'Suggestion' || (taskData.taskInfo && taskData.taskInfo.top.type === 'Suggestion') || (taskData.taskInfo && taskData.taskInfo.center.type === 'Suggestion')">
            <div class="report-header">{{ taskData.dataSuggestion.title }}</div>
            <div class="report-main-header">
                <div class="report-main-suggestion">
                    <el-icon color="#0093FF" size="18px">
                        <WarningFilled />
                    </el-icon>
                    <div class="suggsiton-info">
                        <template v-for="item in taskData.dataSuggestion.suggestions" :key="item">
                            <span class="report-main-suggestion-text">{{ item }}</span>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <!-- Essential information for Root-->
        <template v-if="taskData.baseInfoData.length > 0 && requestType === 'UL'">
            <div class="report-header">{{ $t('datasource.taskInfo') }}</div>
            <p class="s-i-base-item" v-for="item in taskData.baseInfoData" :key="item.value">{{ item.label }}：<span v-html="item.value || '-'"></span></p>
        </template>

        <!-- Parameter Diagnosis -->
        <template v-if="requestType === 'Param'">
            <div class="report-header">{{ taskData.dataParameterConfig.title }}</div>
            <p class="s-i-base-item title">{{ $t('datasource.paramName') }}</p>
            <p class="s-i-base-item content">{{ taskData.dataParameterConfig.paramName }}</p>
            <p class="s-i-base-item title">{{ $t('datasource.currentValue') }}</p>
            <p class="s-i-base-item content">{{ taskData.dataParameterConfig.currentValue }}{{ taskData.dataParameterConfig.unit === null ? '' : '(' + taskData.dataParameterConfig.unit + ')' }}</p>
            <p class="s-i-base-item title">{{ $t('datasource.paramDescription') }}</p>
            <p class="s-i-base-item content">{{ taskData.dataParameterConfig.paramDescription }}</p>
            <p class="s-i-base-item title">{{ $t('datasource.suggestValue') }}</p>
            <p class="s-i-base-item content">{{ taskData.dataParameterConfig.suggestValue }}</p>
            <p class="s-i-base-item title">{{ $t('datasource.suggestReason') }}</p>
            <p class="s-i-base-item content">{{ taskData.dataParameterConfig.suggestReason }}</p>
        </template>

        <!-- Flame diagram -->
        <div class="s-l-base" v-if="requestType === 'Frame'">
            <div class="svg-top" v-if="taskData.taskInfo.top.type === 'Flamefigure'" @click="gotoLarge">
                <div class="svg-img-wrap" v-html="svgFile"></div>
                <p class="svg-title">{{ taskData.taskInfo.top.data.title }}</p>
            </div>
            <div class="svg-center" v-if="taskData.taskInfo.center.type === 'Paragraph'">
                <div class="info-item" v-for="item in taskData.taskInfo.center.data" :key="item.title">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-content">{{ item.paragraph }}</p>
                </div>
            </div>
        </div>
        <!-- Tree Table -->
        <div class="table-wrap" v-if="requestType === 'Table' || (taskData.taskInfo && taskData.taskInfo.top.type === 'Table') || (taskData.taskInfo && taskData.taskInfo.center.type === 'Table')">
            <el-table ref="singleTableRef" :data="taskData.dataTableInfo.data" :style="{ width: '100%', marginBottom: '20px' }" border max-height="500">
                <el-table-column type="index" />
                <template v-for="item in taskData.dataTableInfo.columns" :key="item.id">
                    <el-table-column :prop="item.key" :label="item.title" />
                </template>
            </el-table>
        </div>
        <!-- Thermodynamic diagram -->
        <div class="chart-wrap" v-if="requestType === 'HeatMap' || (taskData.taskInfo && taskData.taskInfo.top.type === 'HeatMap') || (taskData.taskInfo && taskData.taskInfo.center.type === 'HeatMap')">
            <template v-for="(item, index) in chartData" :key="index + '-'">
                <heat-map :data="item.data" :xData="item.x" :yData="item.y" :title="item.name" :maxData="heatMapMax" :showNum="false" :unit="item.unit" v-bind="$attrs"> </heat-map>
            </template>
        </div>
        <!-- No result -->
        <div class="noresult-wrap" v-if="requestType === 'NONE'">
            <img src="@/assets/img/noresult.png" class="noresult-img" />
            <p class="noresult-text">{{ $t('datasource.noResult') }}</p>
        </div>
        <!-- Thermodynamic diagram -->
        <div class="chart-wrap" v-if="requestType === 'LineChart' || (taskData.taskInfo && taskData.taskInfo.top.type === 'LineChart') || (taskData.taskInfo && taskData.taskInfo.center.type === 'LineChart')">
            <template v-for="(item, index) in chartData" :key="index + '-'">
                <line-chart :data="item.data" :xData="item.xAxis.data" :series="item.series" :title="item.title"> </line-chart>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { optionType, pieColorAll } from '../common'
import ogRequest from '../../../request'
import ogRequestSvg from '../../../request/axios'
import { useRequest } from 'vue-request'
import { WarningFilled } from '@element-plus/icons-vue'

interface Res {
    type: string
    data: any
    child: {
        top: {
            type: string
            data: {
                title: string
                data: string[]
                columns: [{ type: string; title: string; key: string }]
            }
        }
        center: {
            type: string
            data: any
        }
    }
}

const router = useRouter()
const props = withDefaults(
    defineProps<{
        nodesType: string
    }>(),
    {
        nodesType: 'OffCpu',
    }
)

const svgFile = ref('')
const requestType = ref('')
const chartData = ref<any>([])
const heatMapMax = ref(10)
const dbId = ref((window.$wujie?.props.data.id as string) ? (window.$wujie?.props.data.id as string) : router.currentRoute.value.params.id)
const typeId = ref('TaskInfo')
const taskData = reactive<{
    baseInfoData: Array<optionType>
    dataTreeInfo: any
    dataTableInfo: any
    dataPieInfo: any
    dataPieColor: Array<string>
    dataSuggestion: any
    dataParameterConfig: any
    taskInfo: {
        top: {
            type: string
            data: {
                title: string
                data: string[]
                columns: [{ type: string; title: string; key: string }]
            }
        }
        center: {
            type: string
            data: [
                {
                    title: string
                    paragraph: string
                    data?: string[]
                    columns?: [{ type: string; title: string; key: string }]
                }
            ]
        }
    }
}>({
    baseInfoData: [],
    dataTreeInfo: [],
    dataTableInfo: {},
    dataPieInfo: [],
    dataPieColor: [],
    dataSuggestion: [],
    dataParameterConfig: {},
    taskInfo: {
        top: {
            type: '',
            data: {
                title: '',
                data: [],
                columns: [{ type: '', title: '', key: '' }],
            },
        },
        center: {
            type: '',
            data: [
                {
                    title: '',
                    paragraph: '',
                    data: [],
                    columns: [{ type: '', title: '', key: '' }],
                },
            ],
        },
    },
})

const queryData = computed(() => {
    const queryObj = {
        id: dbId.value,
        type: typeId.value,
    }
    return queryObj
})

watch(
    () => props.nodesType,
    (val: string) => {
        typeId.value = val
        requestData()
    }
)

onMounted(() => {
    typeId.value = props.nodesType
    requestData()
    const wujie = window.$wujie;
    if (wujie) {
        wujie?.bus.$on('opengauss-locale-change', (val: string) => {
            nextTick(() => {
                requestData()
            });
        });
    }
})

const emit = defineEmits(['gotoLarge'])
const gotoLarge = () => {
    emit('gotoLarge')
}

const { data: res, run: requestData } = useRequest(
    () => {
        return ogRequest.get('/sqlDiagnosis/api/v1/diagnosisTasks/' + queryData.value.id + '/suggestions/' + queryData.value.type)
    },
    { manual: true }
)

const { data: ret, run: requestSvg } = useRequest(
    (id: number) => {
        return ogRequestSvg.get(`/sqlDiagnosis/api/v1/diagnosisTasks/res/${id}.svg`)
    },
    { manual: true }
)

const handleRequestData = (val: Res, type: string, cases: number) => {
    let dataType: any
    switch (cases) {
        case 1:
            if (val.type === type) {
                dataType = val.child
            } else if (val.child && val.child.top.type === type) {
                dataType = val.child.top.data.data
            } else if (val.child && val.child.center.type === type) {
                dataType = val.child.center.data.data
            } else {
                dataType = []
            }
            break
        case 2:
            if (val.type === type) {
                dataType = val.data.data
            } else if (val.child && val.child.top.type === type) {
                dataType = val.child.top.data
            } else if (val.child && val.child.center.type === type) {
                dataType = val.child.center.data
            } else {
                dataType = []
            }
            break
        case 3:
            if (val.type === type) {
                dataType = val.data
            } else if (val.child && val.child.top.type === type) {
                dataType = val.child.top.data
            } else if (val.child && val.child.center.type === type) {
                dataType = val.child.center.data
            } else {
                dataType = []
            }
            break
    }

    return dataType
}

watch(res, (res: Res) => {
    chartData.value = [] //clear data
    if (res && Object.keys(res).length) {
        requestType.value = res.type
        taskData.taskInfo = res.child
        if (res.type === 'UL') {
            taskData.baseInfoData = []
            for (let item of res.data) {
                taskData.baseInfoData.push({
                    label: Object.keys(item)[0],
                    value: String(Object.values(item)[0]),
                })
            }
        } else if (res.type === 'Param') {
            taskData.dataParameterConfig = res.data
        } else {
            let resultData: any
            let svgInfo: any
            svgInfo = handleRequestData(res, 'Flamefigure', 2)
            if (svgInfo && Object.keys(svgInfo).length > 0) {
                requestSvg(svgInfo.id)
            }
            taskData.dataTreeInfo = handleRequestData(res, 'DataTree', 1)
            taskData.dataPieInfo = handleRequestData(res, 'Pie', 1)

            let arraymax: any = []
            if (res.child.center.type === 'LineChart') {
                resultData = res.child.center.data
            } else {
                resultData = handleRequestData(res, 'HeatMap', 2)
                resultData.forEach((item: any) => {
                    item.data.forEach((k: any) => {
                        arraymax.push(k[2])
                    })
                })
            }

            taskData.dataTableInfo = handleRequestData(res, 'Table', 3)
            taskData.dataSuggestion = handleRequestData(res, 'Suggestion', 3)
            nextTick(() => {
                if (res.child.center.type === 'LineChart') {
                    chartData.value = [resultData]
                } else {
                    heatMapMax.value = Math.max(...arraymax)
                    chartData.value = resultData
                }
            })
            if (taskData.dataPieInfo.length > 0) {
                taskData.dataPieColor = pieColorAll.slice(0, taskData.dataPieInfo.length)
                taskData.dataPieInfo.forEach((item: any, index: number) => {
                    item.color = taskData.dataPieColor[index]
                })
            }
        }
    }
})
// 获取svg图片
watch(ret, (res: any) => {
    if (res && Object.keys(res).length) {
        svgFile.value = res.replace('opacity:0.1;', 'opacity:0.7;').replace('>Search<', '><').replace('>ic<', '><')
    }
})
</script>

<style lang="scss" scoped>
text {
    fill: blue;
}
.s-i-base {
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    &-item {
        margin: 3px 0;
    }

    &:deep(.el-row) {
        line-height: 39px;
        border: 1px solid $og-border-color;
        border-top: none;
        border-right: none;
    }
    &:deep(.el-col) {
        padding-left: 5px;
        border-right: 1px solid $og-border-color;
    }
    .s-i-base-item {
        padding: 0 15px;
        margin-top: 12px;
        &.title {
            font-weight: bold;
        }
        &.content {
            margin-top: 3px;
        }
    }
}
.s-l-base {
    box-sizing: border-box;
    // height: 240px;
    color: #fff;
    font-size: 14px;
    .svg-img-wrap {
        width: 100%;
        height: 100%;
        padding: 10px 0;
        &:deep(svg) {
            width: 100%;
            height: 400px;
        }
    }
    .svg-title {
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
    }
    .svg-center {
        margin-top: 20px;
        padding: 0 10px;
        .info-item {
            margin-bottom: 10px;
            .item-title {
                font-size: 16px;
            }
            .item-content {
                text-indent: 2em;
            }
        }
    }
}
.s-i-consuming {
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 0;
    overflow-y: auto;

    &-pie {
        height: 180px;
        width: 180px;
    }

    &-legend {
        width: calc(100% - 180px);
        height: 220px;
        display: flex;
        flex-wrap: wrap;
        padding-left: 10px;
    }

    &-item {
        font-size: 12px;
        display: flex;
        align-items: center;

        &:nth-child(1n) {
            width: 43%;
        }
        &:nth-child(2n) {
            width: 57%;
        }
        &-block {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-right: 3px;
        }
    }
}
.chart-wrap {
    width: 100%;
    height: 400px;
}
.table-wrap {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.noresult-wrap {
    width: 100%;
    height: 500px;
    .noresult-img {
        width: 200px;
        display: block;
        margin: 100px auto 20px;
    }
    .noresult-text {
        text-align: center;
        color: #707070;
    }
}
.report-header {
    font-size: 20px;
    color: var(--color-text-1);
    font-weight: 700;
    padding: 8px 0 8px 28px;
    border-bottom: 1px solid $og-border-color;
}
.suggsiton-wrap {
    padding: 8px 16px;

    .report-main {
        padding: 8px 16px;
        font-size: 14px;
        color: $og-text-color;
    }
    .report-main-header {
        font-weight: 700;
        margin-bottom: 8px;
    }
    .report-main-suggestion {
        display: flex;
        align-items: center;
        margin: 16px 0 20px 0;
    }
    .report-main-suggestion-text {
        margin-left: 10px;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-text-1);
        display: inline-block;
        padding: 5px 0;
    }
    .report-main-title {
        margin: 8px 0;
    }
}
</style>
