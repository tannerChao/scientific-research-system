# 项目名称 
科学研究系统
 
# 项目简介


# 1.0版本主要功能
```
|-我的研究
  |-项目申报
  |-我的成果
  |-财务审核
  |-专家审核
  |-科研管理
  |-论文论著
```

# 运营团队

> - 负责部门：Ainboys
> - 负责人员：Ainboys
> - 联系方式：2818603339(QQ)

# 开发团队

> - 负责部门：Ainboys
> - 负责部门：Ainboys
> - 联系方式：

# 技术栈：React + Mobx + React-router-dom(4.0)

> - UI框架：Ant(https://ant.design/components/layout-cn/)
> - 


# 命令行
安装
1 npm(cnpm) install 

调试
2 npm start

测试
3 npm test

发布
4 npm build


# 项目结构
```
|-config
  |-webpack-config.dev.js
  |-webpack-config.prod.js
|-public
  |-index.html
  |-webpack-config.prod.js
|-scripts
  |-build.js
  |-start.js
  |-test.js
|-src
  |-assets                  静态资源
  |-components              组件
  |-http                    请求(axios)
    |-index.js              
    |-interceptors.js       拦截器（请求/响应）
  |-router                  react-router-dom
    |-index.js              
    |-router.js             
    |-routes.js             路由结构
  |-store                   状态管理(mobx)
    |-index.js                 
  |-views                   视图
    |-home                  主页
    |-login                 登录
    |-my                    
      |-my-scientific.js                          我的研究
      |-add-project.js                            项目申报
      |-achievements.js                           我的成果
      |-financial-audit.js                        财务审核  
      |-experts-audits.js                         专家审核
      |-scientific-management.js                  科研管理
      |-paper-works.js                            论文论著
    |-setting               
  |-utils                   工具类
|-.babelrc                  babel转码配置
|-.gitignore           
|-.jsconfig.json            装饰器模式配置(mobx)
|-.package.json     
```

# 路由结构
```
```

# 路径别名
> - @        src
> - view     @/views
> - comp     @/components
> - http     @/http
> - store    @/store
> - router   @/router
