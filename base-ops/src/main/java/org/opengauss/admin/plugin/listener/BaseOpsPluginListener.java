package org.opengauss.admin.plugin.listener;

import com.gitee.starblues.spring.MainApplicationContext;
import com.gitee.starblues.spring.SpringBeanFactory;
import org.opengauss.admin.common.core.vo.MenuVo;
import org.opengauss.admin.system.plugin.facade.MenuFacade;
import org.springframework.boot.context.event.ApplicationEnvironmentPreparedEvent;
import org.springframework.boot.context.event.ApplicationPreparedEvent;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * @className: ImplListener
 * @author: xielibo
 * @date: 2022/08/16 3:48 PM
 **/
public class BaseOpsPluginListener implements ApplicationListener<ApplicationEvent> {

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof ApplicationEnvironmentPreparedEvent) {
            System.out.println("base ops init env");
        } else if (event instanceof ApplicationPreparedEvent) {
            System.out.println("base ops init complete");
        } else if (event instanceof ContextRefreshedEvent) {
            System.out.println("base ops was refreshed");
        } else if (event instanceof ApplicationReadyEvent) {
            MainApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            MenuFacade menuFacade = factory.getBean(MenuFacade.class);
            if (menuFacade != null) {
                String pluginId = "base-ops";
                MenuVo monitorParent = menuFacade.savePluginMenu(pluginId, "可观测运维", "monitor", 3,"monitor");
                menuFacade.savePluginMenu(pluginId, "集群运维", "cluster ops", 1,"monitor/dailyOps", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "集群监控", "cluster moniter",2, "monitor/basic", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "日志分析", "log analysis",3, "monitor/logCenter", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "WDR报告", "WDR report",4, "monitor/wdr", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "SQL诊断", "sql analysis",5, "monitor/slowSql", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "自定义控制台", "custom control",6, "monitor/customControl", monitorParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "安装包管理", "package manage",7, "monitor/packageManage", monitorParent.getMenuId());

                MenuVo modelingParent = menuFacade.savePluginMenu(pluginId, "业务设计", "business design",2, "modeling");
                menuFacade.savePluginMenu(pluginId, "数据流设计", "data flow design", 1,"modeling/dataflow", modelingParent.getMenuId());
                menuFacade.savePluginRoute(pluginId, "数据流详情", "modeling/dataflow/detail", modelingParent.getMenuId());

                MenuVo opsInstallParent = menuFacade.savePluginMenu(pluginId, "安装部署", "install", 1,"ops");
                menuFacade.savePluginMenu(pluginId, "一键安装", "quick install", 1,"ops/simpleInstall", opsInstallParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "集群安装", "cluster install",2, "ops/install", opsInstallParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "集群升级", "cluster upgrade",3, "ops/upgrade", opsInstallParent.getMenuId());
                menuFacade.savePluginMenu(pluginId, "备份恢复", "backup recovery",4, "ops/backup", opsInstallParent.getMenuId());
            }
            System.out.println("base ops start complete");
        } else if (event instanceof ContextClosedEvent) {
            MainApplicationContext context = ((ContextClosedEvent) event).getApplicationContext().getBean(MainApplicationContext.class);
            SpringBeanFactory factory = context.getSpringBeanFactory();
            MenuFacade menuFacade = factory.getBean(MenuFacade.class);
            if (menuFacade != null) {
                menuFacade.deletePluginMenu("base-ops");
            }
            System.out.println("base ops is stopped");
        }
    }
}