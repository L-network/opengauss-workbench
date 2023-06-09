package org.opengauss.admin.plugin.service.modeling.visualization;

import com.baomidou.mybatisplus.extension.service.IService;
import org.opengauss.admin.plugin.domain.entity.modeling.ModelingVisualizationReportsEntity;

import java.util.List;

/**
* @author LZW
* @description modeling_visualization_reports
* @createDate 2022-09-29 13:12:50
*/
public interface IModelingVisualizationReportsService extends IService<ModelingVisualizationReportsEntity> {

    public List<ModelingVisualizationReportsEntity> getByDataFlowIdAndName(Long dataFlowId,String name);
    public int add(ModelingVisualizationReportsEntity modelingVisualizationParams);
    public int deleteByIds(String[] reportIds);
    public ModelingVisualizationReportsEntity selectById(Integer reportId);
    public int update(ModelingVisualizationReportsEntity modelingVisualizationParams);

}
