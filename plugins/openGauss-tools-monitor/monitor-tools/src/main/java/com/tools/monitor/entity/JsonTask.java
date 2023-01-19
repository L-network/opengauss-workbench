package com.tools.monitor.entity;

import com.tools.monitor.quartz.domain.SysJob;
import lombok.Data;

import java.util.List;

/**
 * JsonTask
 *
 * @author liu
 * @since 2022-10-01
 */
@Data
public class JsonTask {
    private List<SysJob> sysJobs;
}
