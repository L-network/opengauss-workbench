package com.nctigba.datastudio.util;

import com.nctigba.datastudio.base.WebSocketServer;
import com.nctigba.datastudio.enums.ParamTypeEnum;
import com.nctigba.datastudio.model.PublicParamReq;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static com.nctigba.datastudio.constants.CommonConstants.COLUMN;
import static com.nctigba.datastudio.constants.CommonConstants.OID;
import static com.nctigba.datastudio.constants.CommonConstants.RESULT;
import static com.nctigba.datastudio.constants.CommonConstants.SPACE;
import static com.nctigba.datastudio.constants.SqlConstants.COMMA;
import static com.nctigba.datastudio.constants.SqlConstants.COMMA_SPACE;
import static com.nctigba.datastudio.constants.SqlConstants.GET_PROC_PARAM_SQL;
import static com.nctigba.datastudio.constants.SqlConstants.GET_PROC_SQL;
import static com.nctigba.datastudio.constants.SqlConstants.GET_TYPE_OID_SQL;
import static com.nctigba.datastudio.constants.SqlConstants.PARENTHESES_LEFT;
import static com.nctigba.datastudio.constants.SqlConstants.PARENTHESES_RIGHT;
import static com.nctigba.datastudio.constants.SqlConstants.PARENTHESES_SEMICOLON;
import static com.nctigba.datastudio.constants.SqlConstants.POINT;
import static com.nctigba.datastudio.constants.SqlConstants.QUOTES_SEMICOLON;
@Slf4j
public class DebugUtils {
    /**
     * get function/procedure name(include param)
     *
     * @param sql
     * @return
     */
    public static String prepareName(String sql) {
        List<Integer> leftList = getIndexList(sql, PARENTHESES_LEFT);
        List<Integer> rightList = getIndexList(sql, PARENTHESES_RIGHT);
        sql = sql.replace("\n", " ");
        int first = sql.indexOf(POINT);
        int start = leftList.get(0);
        int end = rightList.get(rightList.size() - 1);

        StringBuilder sb = new StringBuilder();
        if (first == -1) {
            String str = "";
            int functionIndex = sql.toLowerCase().indexOf("function");
            int procedureIndex = sql.toLowerCase().indexOf("procedure");
            if (functionIndex != -1) {
                str = sql.substring(functionIndex, start);
            }
            if (procedureIndex != -1) {
                str = sql.substring(procedureIndex, start);
            }
            sb.append(str.trim().split(SPACE)[1] + PARENTHESES_LEFT);
        } else {
            sb.append(sql, first + 1, start + 1);
        }
        String[] splits = sql.substring(start + 1, end).split(COMMA);

        boolean isParam = false;
        for (int i = 0; i < splits.length; i++) {
            if (!splits[i].trim().toLowerCase().startsWith("out")) {
                String[] params = splits[i].trim().split(SPACE);
                if (params.length == 1) {
                    sb.append(params[0] + COMMA);
                } else if (params.length == 3) {
                    sb.append(params[2] + COMMA);
                } else {
                    sb.append(params[1] + COMMA);
                }
                isParam = true;
            }
        }
        if (isParam) {
            sb.deleteCharAt(sb.length()-1);
        }
        sb.append(PARENTHESES_RIGHT);
        log.info("DebugUtils prepareName name is: " + sb);
        return sb.toString();
    }

    public static List<Integer> getIndexList(String sql, String str) {
        List<Integer> list = new ArrayList<>();
        int index = 0;
        sql = sql.toLowerCase();
        if (sql.contains("as\n")) {
            index = sql.indexOf("as\n");
        } else if (sql.contains("as $$")) {
            index = sql.indexOf("as $$");
        } else if (sql.contains("as ")) {
            index = sql.indexOf("as ");
        } else {
            index = sql.length();
        }

        String subSql = sql.substring(0, index);
        log.info("DebugUtils getIndexList subSql is: " + subSql);
        for (int i = 0; i < subSql.length(); i++) {
            if (str.equals(String.valueOf(subSql.charAt(i)))) {
                list.add(i);
            }
        }
        log.info("DebugUtils getIndexList list is: " + list);
        return list;
    }

    /**
     * get function/procedure name
     *
     * @param sql
     * @return
     */
    public static String prepareFuncName(String sql) {
        String[] split = sql.split("\\(");
        String[] s = split[0].split(SPACE);
        log.info("DebugUtils prepareFuncName s is: " + s);
        return s[s.length - 1];
    }

    /**
     * prepare function/procedure sql
     *
     * @param paramReq
     * @return
     */
    public static String prepareSql(PublicParamReq paramReq) {
        String sql = paramReq.getSql();
        StringBuffer sb = new StringBuffer();
        sb.append("select * from " + prepareFuncName(sql) + PARENTHESES_LEFT);
        List<Map<String, Object>> inputParams = paramReq.getInputParams();
        if (!CollectionUtils.isEmpty(inputParams)) {
            for (int i = 0; i < inputParams.size(); i++) {
                Map<String, Object> paramMap = inputParams.get(i);
                Set<String> keySet = paramMap.keySet();
                for (String key : keySet) {
                    if (key.contains("int") || key.contains("number")
                            || key.contains("float") || key.contains("double")) {
                        sb.append(paramMap.get(key));
                    } else {
                        sb.append("'" + paramMap.get(key) + "'");
                    }
                }

                if (i != inputParams.size() - 1) {
                    sb.append(COMMA_SPACE);
                }
            }
        }

        sb.append(PARENTHESES_SEMICOLON);
        log.info("DebugUtils prepareSql sql is: " + sb);
        return sb.toString();
    }

    /**
     * parse resultSet
     *
     * @param resultSet
     * @return
     * @throws SQLException
     */
    public static Map<String, Object> parseResultSet(ResultSet resultSet) throws SQLException {
        ResultSetMetaData metaData = resultSet.getMetaData();

        Map<String, Object> map = new HashMap<>();
        List<String> columnList = new ArrayList<>();
        for (int i = 0; i < metaData.getColumnCount(); i++) {
            columnList.add(metaData.getColumnName(i + 1));
        }
        map.put(COLUMN, columnList);

        List<List<Object>> dataList = new ArrayList<>();
        while (resultSet.next()) {
            List<Object> list = new ArrayList<>();
            for (String column : columnList) {
                String str = resultSet.getString(column);

                if (StringUtils.isEmpty(str)) {
                    list.add("");
                    continue;
                }
                if (str.equals("t")) {
                    list.add(true);
                } else if (str.equals("f")) {
                    list.add(false);
                } else {
                    if ("vartype".equals(column) || "typname".equals(column)) {
                        list.add(ParamTypeEnum.parseType(str));
                    } else {
                        list.add(str);
                    }
                }
            }
            dataList.add(list);
        }
        map.put(RESULT, dataList);
        log.info("DebugUtils parseResultSet map is: " + map);
        return map;
    }

    /**
     * function/procedure sql
     *
     * @return
     */
    public static String getFuncSql(String windowName, String name, WebSocketServer webSocketServer) throws SQLException {
        List<String> oidList = new ArrayList<>();
        List<String> paramTypeList = getParamTypeList(name);
        for (int i = 0; i < paramTypeList.size(); i++) {
            ResultSet typeNameResult = webSocketServer.getStatement(windowName).executeQuery(GET_TYPE_OID_SQL
                    + paramTypeList.get(i) + QUOTES_SEMICOLON);
            while (typeNameResult.next()) {
                oidList.add(typeNameResult.getString(OID));
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.append(GET_PROC_SQL + getFuncName(name).trim() + GET_PROC_PARAM_SQL);

        if (oidList.size() == 0) {
            sb.append(SPACE);
        } else {
            for (int i = 0; i < oidList.size(); i++) {
                sb.append(oidList.get(i));
                if (i != oidList.size() - 1) {
                    sb.append(SPACE);
                }
            }
        }

        sb.append(QUOTES_SEMICOLON);
        log.info("DebugUtils getFuncSql sql is: " + sb);
        return sb.toString();
    }

    /**
     * get function/procedure name
     *
     * @param name
     */
    public static String getFuncName(String name) {
        int start = name.indexOf(PARENTHESES_LEFT);
        log.info("DebugUtils getFuncName name is: " + name);
        return name.substring(0, start);
    }

    /**
     * get param type list
     *
     * @param str
     */
    public static List<String> getParamTypeList(String str) {
        List<String> list = new ArrayList<>();

        List<Integer> leftList = getIndexList(str, PARENTHESES_LEFT);
        List<Integer> rightList = getIndexList(str, PARENTHESES_RIGHT);
        int start = leftList.get(0);
        int end = rightList.get(rightList.size() - 1);

        String substring = str.substring(start + 1, end);
        String[] splits = substring.split(COMMA);
        for (String s : splits) {
            if (s.contains(PARENTHESES_LEFT)) {
                int index = s.indexOf(PARENTHESES_LEFT);
                s = s.substring(0, index);
            }
            list.add(ParamTypeEnum.getName(s.trim()));
        }

        log.info("DebugUtils getParamTypeList paramType is: " + list);
        return list;
    }
}