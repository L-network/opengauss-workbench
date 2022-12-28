package org.opengauss.admin.plugin.service.modeling.operator.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.opengauss.admin.plugin.domain.model.modeling.ModelingDataFlowSqlObject;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @author songlei
 * @date 2022/8/23 10:06
 */
@Component("update")
public class OperatorUpdateBuilderServiceImpl extends BaseBuilderServiceImpl {

    @Override
    public ModelingDataFlowSqlObject getOperatorSql(JSONObject params , ModelingDataFlowSqlObject sqlObject) {
        // update region modify
        String oriSql = sqlObject.getUpdateRegion();
        String tableName = params.getString("table");
        oriSql += tableName+" ";
        sqlObject.setUpdateRegion(oriSql);
        // update region modify
        oriSql = sqlObject.getUpdateFieldsRegion();
        JSONArray fields = params.getJSONArray("list");
        List<String> sqlFields = new ArrayList<>();

        for (int i = 0; i < fields.size(); i++) {
            JSONObject fieldItem = fields.getJSONObject(i);
            String field = fieldItem.getString("field");
            String fieldType = fieldItem.getString("fieldType");
            String value = fieldItem.getString("value");
            String valueType = fieldItem.getString("valueType");
            String splitValue = fieldItem.getString("splitValue");
            if (field != null) {
                if ("customSql".equals(valueType)) {
                    value = "'"+value+"'";
                }
                if ("concat".equals(fieldType) && splitValue != null) {
                    value = "concat("+value+","+splitValue+")";
                }
                sqlFields.add(field + " = " + value);
            }
        }

        if (sqlFields.size()>0) {
            oriSql += String.join(",", sqlFields) + " ";
        }

        sqlObject.setUpdateFieldsRegion(oriSql);

        return sqlObject;
    }
}
