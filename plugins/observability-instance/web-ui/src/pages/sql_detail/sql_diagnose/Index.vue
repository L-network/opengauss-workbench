<template>
    <div class="search-form">
        <div class="filter">
            <el-button type="primary" @click="handleModal">{{ $t("sql.sqlDiagnoseCreateTask") }}</el-button>
        </div>
    </div>
    <div class="page-container">
        <div class="table-wrapper">
            <el-table :data="tableData" :header-cell-style="{ 'text-align': 'center' }" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
                <el-table-column :label="$t('datasource.trackTable[0]')" width="150" align="center">
                    <template #default="scope">
                        <a class="table-wrapper-table-id" @click="gotoTaskDetail(scope.row.id)">
                            {{ scope.row.name }}
                        </a>
                    </template>
                </el-table-column>
                <el-table-column prop="tasktype" :label="$t('datasource.trackTable[1]')" width="80" align="center" />
                <el-table-column label="SQL" width="300">
                    <template #default="scope">
                        <span v-if="scope.row.sql && scope.row.sql.length > 35">
                            <el-popover width="300" trigger="hover" :content="scope.row.sql" popper-class="sql-popover-tip">
                                <template #reference>
                                    <span>{{ scope.row.sql.substr(0, 35) + "..." }}</span>
                                </template>
                            </el-popover>
                        </span>
                        <span v-else>{{ scope.row.sql }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="state" :label="$t('datasource.trackTable[2]')" width="100" align="center" />
                <el-table-column :label="$t('datasource.trackTable[3]')" width="140" align="center">
                    <template #default="scope">
                        {{ scope.row.starttime ? dayjs.utc(scope.row.starttime).local().format("YYYY-MM-DD HH:mm:ss") : "" }}
                    </template>
                </el-table-column>
                <el-table-column :label="$t('datasource.trackTable[4]')" width="140" align="center">
                    <template #default="scope">
                        <div>{{ scope.row.endtime ? dayjs.utc(scope.row.endtime).local().format("YYYY-MM-DD HH:mm:ss") : "" }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="cost" :label="$t('datasource.trackTable[5]')" width="100" />
                <el-table-column :label="$t('datasource.trackTable[6]')" width="140" align="center">
                    <template #default="scope">
                        <div>{{ scope.row.createtime ? dayjs.utc(scope.row.createtime).local().format("YYYY-MM-DD HH:mm:ss") : "" }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="clusterId" :label="$t('datasource.trackTable[7]')" width="100" align="center" />
                <el-table-column prop="nodeId" :label="$t('datasource.trackTable[8]')" width="100" align="center" />
                <el-table-column :label="$t('datasource.trackTable[9]')" align="center" fixed="right" width="80">
                    <template #default="scope">
                        <el-link size="small" type="primary" @click="handleDelete(scope.row)">{{ $t("app.delete") }}</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :currentPage="page.currentPage" :pageSize="page.pageSize" :total="page.total" :page-sizes="[10, 20, 30, 40]" class="pagination" layout="total,sizes,prev,pager,next" background small @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
        <TrackAdd :type="2" :show="addModel" :dbName="props.dbName" :sqlId="props.sqlId" :clusterId="props.dbid" :sqlText="sqlText" @changeModal="changeModalCurrent" @conveyFlag="bandleCovey" />
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Delete } from "@element-plus/icons-vue";
import "element-plus/es/components/message-box/style/index";
import { useRequest } from "vue-request";
import diagnosisRequest from "../../../request/diagnosis";
import { i18n } from "../../../i18n";
import { ElMessageBox } from "element-plus";
import TrackAdd from "./trackAdd.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

dayjs.extend(utc);
dayjs.extend(timezone);

const props = withDefaults(
    defineProps<{
        dbid: any;
        sqlId: string | string[];
        sqlText: string;
        dbName: string;
    }>(),
    {
        dbid: "",
        sqlId: "",
        sqlText: "",
        dbName: "",
    }
);
type Res =
    | {
          tableData: string[];
          total: number;
          current: number;
          records: string[];
      }
    | undefined;

const addModel = ref(false);
const sqlText = ref("");
const tableData = ref<Array<any>>([]);
const page = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 10,
});

const queryData = computed(() => {
    const { pageSize: pagesize, currentPage: current } = page;
    const queryObj = {
        dbName: props.dbName,
        pageNum: current,
        pageSize: pagesize,
        sqlId: props.sqlId,
    };
    return queryObj;
});
onMounted(() => {
    requestData();
});
const gotoTaskDetail = (id: string) => {
    window.$wujie?.props.methods.jump({
        name: `Static-pluginObservability-sql-diagnosisVemTrack_detail`,
        query: {
            id,
        },
    });
};
const handleModal = () => {
    addModel.value = true;
};

const changeModalCurrent = (val: boolean) => {
    addModel.value = val;
};
const bandleCovey = (code: number) => {
    page.currentPage = 1;
    requestData();
};
const handleSizeChange = (val: number) => {
    page.currentPage = 1;
    page.pageSize = val;
    requestData();
};
const handleCurrentChange = (val: number) => {
    page.currentPage = val;
    requestData();
};
const handleDelete = (val: any) => {
    ElMessageBox.confirm(t("datasource.confirmToDeleteTask"))
        .then(() => {
            hanleDelete(val.id);
        })
        .catch(() => {
            console.log("cancel");
            // catch error
        });
};
watch(
    () => props.sqlText,
    (newValue) => {
        sqlText.value = newValue;
    },
    { immediate: true }
);

const { data: res, run: requestData } = useRequest(
    () => {
        return diagnosisRequest.get("/sqlDiagnosis/api/v1/diagnosisTasks", queryData.value);
    },
    { manual: true }
);

// Delete one task
const hanleDelete = (id: string) => {
    useRequest(
        () => {
            return diagnosisRequest.delete(`/sqlDiagnosis/api/v1/diagnosisTasks/${id}`);
        },
        {
            onSuccess: (data) => {
                if (JSON.stringify(data)) {
                    requestData();
                }
            },
        }
    );
};
watch(res, (res: Res) => {
    if (res && Object.keys(res).length) {
        const { total } = res;
        tableData.value = res.records;
        Object.assign(page, { pageSize: page.pageSize, total });
    } else {
        tableData.value = [];
        Object.assign(page, { pageSize: page.pageSize, total: 0, currentPage: 1 });
    }
});
</script>

<style scoped lang="scss">
.el-link.el-link--primary {
    color: var(--primary-6) !important;
}
.el-button {
    color: var(--color-text-2) !important;
    background-color: var(--color-secondary) !important;
    border: none !important;
}
.el-button.el-button--primary {
    color: var(--color-bg-2) !important;
    background-color: var(--primary-6) !important;
}
.el-button.el-button--primary.search-button {
    color: var(--primary-6) !important;
    background-color: rgb(255, 255, 255, 0) !important;
    border: 1px solid var(--primary-6) !important;
}
:deep(.el-pagination) {
    display: flex;
    justify-content: flex-end;
}
.deleteBtn {
    color: #d4d4d4;
}
.deleteBtn-icon {
    position: relative;
    top: 2px;
    right: 5px;
}
:deep(.el-range-editor--small.el-input__wrapper) {
    width: 240px;
}
</style>
