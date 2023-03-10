package com.nctigba.observability.log.model.dto;

import java.util.List;

import lombok.Data;


/**
 * <p>
 * Log-Search response dto
 * </p>
 *
 * @author luomeng@ncti-gba.cn
 * @since 2022/11/17 09:05
 */
@Data
public class LogInfoDTO {
    private String scrollId;
    private List<LogDetailInfoDTO> logs;
    private List<String> sorts;
}
