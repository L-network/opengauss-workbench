package org.opengauss.admin.plugin.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import org.opengauss.admin.common.annotation.Log;
import org.opengauss.admin.common.core.domain.AjaxResult;
import org.opengauss.admin.common.core.page.TableDataInfo;
import org.opengauss.admin.common.enums.BusinessType;
import org.opengauss.admin.plugin.base.BaseController;
import org.opengauss.admin.plugin.domain.MigrationMainTask;
import org.opengauss.admin.plugin.domain.MigrationTask;
import org.opengauss.admin.plugin.dto.MigrationMainTaskDto;
import org.opengauss.admin.plugin.dto.MigrationTaskDto;
import org.opengauss.admin.plugin.service.MigrationMainTaskService;
import org.opengauss.admin.plugin.service.MigrationTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author xielibo
 * @date 2023/01/14 09:01
 **/
@RestController
@RequestMapping("/migration")
public class MigrationTaskController extends BaseController {

    @Autowired
    private MigrationTaskService migrationTaskService;

    @Autowired
    private MigrationMainTaskService migrationMainTaskService;


    /**
     * page list
     */
    @GetMapping("/list")
    public TableDataInfo list(MigrationMainTaskDto task) {
        IPage<MigrationMainTask> list = migrationMainTaskService.selectList(startPage(), task);
        return getDataTable(list);
    }



    /**
     * page subtask list
     */
    @GetMapping("/subTasks/{id}")
    public TableDataInfo listSubTask(@PathVariable("id") Integer id) {
        IPage<MigrationTask> list = migrationTaskService.selectList(startPage(), id);
        return getDataTable(list);
    }

    /**
     * list all create user
     */
    @GetMapping("/list/createUsers")
    public AjaxResult listCreateUsers() {
        return AjaxResult.success(migrationMainTaskService.selectCreateUsers());
    }

    /**
     * getById
     */
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Integer id) {
        return AjaxResult.success(migrationMainTaskService.getDetailById(id));
    }

    /**
     * refreshStatus
     */
    @GetMapping(value = "/refreshStatus/{id}")
    public AjaxResult refreshStatus(@PathVariable("id") Integer id) {
        migrationMainTaskService.refreshTaskStatusByPortal(id);
        return AjaxResult.success();
    }



    /**
     * delete task
     */
    @Log(title = "task", businessType = BusinessType.DELETE)
    @DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Integer[] ids) {
        migrationMainTaskService.deleteTask(ids);
        return AjaxResult.success();
    }

    /**
     * start task
     */
    @Log(title = "task", businessType = BusinessType.START)
    @PostMapping("/start/{id}")
    public AjaxResult start(@PathVariable Integer id ) {
        return migrationMainTaskService.startTask(id);
    }

    /**
     * finish task
     */
    @Log(title = "task", businessType = BusinessType.STOP)
    @PostMapping("/finish/{id}")
    public AjaxResult finish(@PathVariable Integer id ) {
        migrationMainTaskService.finishTask(id);
        return AjaxResult.success();
    }

    /**
     * save task
     * @param taskDto
     * @return
     */
    @PostMapping("/save")
    public AjaxResult save(@RequestBody MigrationTaskDto taskDto) {
        migrationMainTaskService.saveTask(taskDto);
        return AjaxResult.success();
    }

    /**
     * update task
     * @param taskDto
     * @return
     */
    @PostMapping("/update")
    public AjaxResult update(@RequestBody MigrationTaskDto taskDto) {
        return migrationMainTaskService.updateTask(taskDto);
    }

    /**
     * finish subtask
     */
    @Log(title = "task", businessType = BusinessType.STOP)
    @PostMapping("/subTask/finish/{id}")
    public AjaxResult finishSubTask(@PathVariable Integer id ) {
        return migrationMainTaskService.finishSubTask(id);
    }

    /**
     * stop subtask incremental
     */
    @Log(title = "task", businessType = BusinessType.STOP)
    @PostMapping("/subTask/stop/incremental/{id}")
    public AjaxResult stopSubTaskIncremental(@PathVariable Integer id ) {
        return migrationMainTaskService.stopSubTaskIncremental(id);
    }

    /**
     * start subtask reverse
     */
    @Log(title = "task", businessType = BusinessType.STOP)
    @PostMapping("/subTask/start/reverse/{id}")
    public AjaxResult startSubTaskReverse(@PathVariable Integer id ) {
        return migrationMainTaskService.startSubTaskReverse(id);
    }

    /**
     * get subtask detail
     */
    @GetMapping(value = "/subTaskInfo/{id}")
    public AjaxResult getSubTaskInfo(@PathVariable("id") Integer id) {
        return AjaxResult.success(migrationTaskService.getTaskDetailById(id));
    }

}