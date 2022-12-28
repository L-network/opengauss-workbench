/**
 Copyright  (c) 2020 Huawei Technologies Co.,Ltd.
 Copyright  (c) 2021 openGauss Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
package org.opengauss.admin.plugin.domain.model.modeling.echart;
import org.opengauss.admin.plugin.vo.modeling.component.Legend;
import org.opengauss.admin.plugin.vo.modeling.component.PieSeries;
import org.opengauss.admin.plugin.vo.modeling.component.Title;
import org.opengauss.admin.plugin.vo.modeling.component.Tooltip;

import java.util.List;
/**
 *
 * @author LZW
 */
public class PieChartBody {

    private Title title;
    private Tooltip tooltip;
    private Legend legend;
    private List<PieSeries> series;

    public void setTooltip(Tooltip tooltip) {
         this.tooltip = tooltip;
     }
     public Tooltip getTooltip() {
         return tooltip;
     }

    public void setLegend(Legend legend) {
         this.legend = legend;
     }
     public Legend getLegend() {
         return legend;
     }

    public void setSeries(List<PieSeries> series) {
         this.series = series;
     }
     public List<PieSeries> getSeries() {
         return series;
     }

    public void setTitle(Title title) {
        this.title = title;
    }
    public Title getTitle() {
        return title;
    }
}
