# vue-app

> vue test
## 单纯的VueJS
Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据
vue.js 下载过来直接在html中引入就好了并不一定要npm install vue

## nodejs 
（node是后端开发语言，同php、java、c#一样的）
# nodejs介绍
链接：https://www.jianshu.com/p/593002e2b1dc 来源：简书
相对于传统的JavaScript来说，Node.js 是一个运行在服务端的框架，它的底层就使用了 V8 引擎。我们知道 Apache + PHP 以及 Java 的 Servlet 都可以用来开发动态网页，Node.js 的作用与他们类似，只不过是使用 JavaScript 来开发，它大大提升了开发的性能以及便利。使用node开发还可以使用配套的npm包管理工具：
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
因为node本身就是一个服务端的框架，对于一些简单的项目，我们可以不需要后端配合，直接用node进行数据库的增删改查（但是我们一般不使用这个功能）
 
 ## vue 和 node 关系
如果你只是想单纯的使用vue做你的前端开发的辅助插件的话，那么你只需要直接<script>引用vue.js便也可以实现vue的双向绑定的功能
如果是做前后分离接口服务化之后，前台页面也得整合，node提供整合各个页面所需的驱动使用webpack进行模块化开发
  
## 下载安装nodejs
http://nodejs.cn/download/

安装完成node，node有自带的npm，可以直接在cmd中，找到nodeJs安装的路径下，进行命令行全局安装vue-cli 
- npm install --global vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目内容

- [Vue](https://cn.vuejs.org/v2/guide/)  
- [Vue-Router](https://router.vuejs.org/zh/) 路由
- [Vuex](https://vuex.vuejs.org/zh/) 状态管理
- [axios](https://github.com/axios/axios) 网络请求 <cmd 项目目录:> npm install axios --save
- [Vuetify@1.5.14](https://v15.vuetifyjs.com/zh-Hans/getting-started/quick-start) 组件库    <cmd 项目目录:>  npm install vuetify --save
- [js-cookie](https://github.com/js-cookie/js-cookie#readme) cookie操作
- [js-md5](https://github.com/emn178/js-md5) md5加密
- [Mock.js](http://mockjs.com/) 数据模拟
- [sass](http://sass.bootcss.com/) css拓展
- [eslint](https://cn.eslint.org/) 代码风格

 
