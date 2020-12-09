# vue 
* 自下而上增量开发的渐进式框架: 只关注视图层;
* 渐进式框架: 声明式渲染 => 组件系统 => 客户端路由 => 大规模状态管理 => 构建工具;
* 声明式渲染 + 响应式数据绑定(view - viewModel(dom listenders + data binding) - Model); + 组件化开发 + Virtual DOM
* 配套辅助开发调试工具: Vue-Devtools

# vue-cli的项目创建
* components小组件, router路由管理, store状态管理, view主页面结构, App.vue根页面;
* vue.config.js进行自定义配置;
* 可以通过npx vue-cli-service inspect --mode development/production生成最终的配置文件进行查看; 增加 >> webpack.config.production.js生成文件;

# vue3.0
* 虚拟dom重写
* 优化插槽;
* 静态树提升
* 静态属性提升
* 基于Proxy观察者机制
* flow转向type; 解耦内容更加模块化; 编译器重写;
* 面向原生: 运行时与平台无关;

# VueRouter
* 路由: 设定访问路径, 将路径和组件形成映射(本质就是基于url进行组件的切换);
* route-某个路由; routes-多个路由集合(数组); router-路由器(管理路由-找对应的路由);
* spa(single page application)单页应用; mpa(multiple page application)多页应用;
* hash模式(onhashChange的运用)-默认, history模式-(利用h5的pushState, placeState用于改变url地址);history的back, foward go具有对历史记录的修改功能且不刷新页面;
* 使用:
*********
npm i vue-router --save => import VueRouter from 'vue-router'; => Vue.use(VueRouter)注册完毕;
const routes = [{path, name, component}]; 路由集合path代表url, name为路由名, component为对应url的组件;
const router = new VueRouter({ routes }); 创建路由实例 并导出 export default router;
new Vue({ router, store, render}).$mount('#app'); 根实例中完成路由的注册;
<router-view />为路由展示区, 对应的路由组件渲染至指定位置;
*********
* 动态路由; 嵌套路由; 命名路由; 编程式导航; 路由传参; 路由守卫
* 












