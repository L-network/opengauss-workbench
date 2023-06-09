package org.opengauss.admin.framework.web.service;

import org.opengauss.admin.common.core.domain.entity.SysUser;
import org.opengauss.admin.common.core.domain.model.LoginUser;
import org.opengauss.admin.common.enums.UserStatus;
import org.opengauss.admin.common.exception.base.BaseException;
import org.opengauss.admin.common.utils.StringUtils;
import org.opengauss.admin.system.service.ISysUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * User Valid Handler
 *
 * @author xielibo
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private static final Logger log = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Autowired
    private ISysUserService userService;

    @Autowired
    private SysPermissionService permissionService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUser user = userService.selectUserByUserName(username);
        if (StringUtils.isNull(user)) {
            log.info("User: {} Not Exists.", username);
            throw new UsernameNotFoundException("User：" + username + " Not Exists.");
        } else if (UserStatus.DELETED.getCode().equals(user.getDelFlag())) {
            log.info("User：{} Deleted.", username);
            throw new BaseException("Sorry, your account: " + username + " has been deleted.");
        } else if (UserStatus.DISABLE.getCode().equals(user.getStatus())) {
            log.info("User：{} has been deactivated.", username);
            throw new BaseException("Sorry, your account: " + username + " has been deactivated.");
        }

        return createLoginUser(user);
    }

    public UserDetails createLoginUser(SysUser user) {
        return new LoginUser(user, permissionService.getMenuPermission(user));
    }
}
