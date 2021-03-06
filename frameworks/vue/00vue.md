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
* mode: hash模式(onhashChange的运用)-默认, history模式-(利用h5的pushState, placeState用于改变url地址);history的back, foward go具有对历史记录的修改功能且不刷新页面;
* 使用步骤:
*********
npm i vue-router --save => import VueRouter from 'vue-router'; => Vue.use(VueRouter)注册完毕;
const routes = [{path, name, component}]; 路由集合path代表url, name为路由名, component为对应url的组件;
const router = new VueRouter({ routes }); 创建路由实例 并导出 export default router;
new Vue({ router, store, render}).$mount('#app'); 根实例中完成路由的注册;
<router-view />为路由展示区, 对应的路由组件渲染至指定位置;
*********
* 错误路由匹配: 放在routes最下方: {path: '**', name: '404', component: ErrorComponent, redirect: Home}; 约定错误的路由, 或进行重定向(redirect);
* <router-link to="/page1" >pageOne</router-link> 路由跳转的一种方式; 标签router-link利用to进行展示;
* 动态路由: routes中利用path: "/page1/:id", 在页面中可以通过$route.params.id获得; 可以在watch: {$route(to,from){}}进行组件内的路由跳转监听;
* 嵌套路由; 通过routes中的children设置子路由与子组件(路径+router-view标签+组件, 达到嵌套效果);
* 命名路由: routes中的name属性进行指定;
* 编程式导航: (标签导航-router-link, :to="{name: 'page1'}" 通过:to也可以传递动态参数)通过this.$router.push('/page1')跳转进入下一个路由; $router.push可接受字符串, 对象或命名路由; $router.replace()也可以实现路径跳转，但并不会产生history记录; 
* 路由传参: 
  query模式-相当于get(?aa=aa&bb=bb): 刷新页面传值依然存在; 只能通过name来指定目标页, 不能通过path传参;
    <router-link :to="{name: 'page1', query: {id: 1}}">
    this.$router.push({ name: 'page1', query: {id: 1}})同上
    在目标页面中通过this.$route.query.id获得传递的参数;
  params模式(相当于post模式地址栏中无): 刷新页面传值消失, 需要通过动态路由方式进行接收(不算灵活-"page1/:id"); 
    <router-link :to="{name: 'page1', params: {id: 1}}">
      this.$router.push({ name: 'page1', params: {id: 1}})同上
      在目标页面中通过this.$route.params.id获得传递的参数;
* 路由守卫: 
  全局路由守卫: 适合做权限控制;router.beforeEach((to, from, next) => {})
    beforeEach钩子: (to, from, next-是否放行),
      next()进入下一个路由,
      next(false)取消路由导航,
      next('/home')去指定页,
      next(error)与router.onError配套;
    afterEach钩子: (to, next) 页面跳转完成后初始化/滚动适配等;
  路由独享: routes里面每个单独的route内: beforeEnter, 参数同上
  组件内路由守卫:
    beforeRouteEnter: 组件内进入调用前(实例此时未被创建, this会报错)执行的钩子; 参数同上; 常结合next + loading做一些必须在导航完成前获取后台数据的所需, 一般后台数据获取在created和mounted中执行;
    beforeRouteUpdate: 路由更新执行的钩子;
    beforeRouteLeave: 离开前执行的钩子;

# Vuex
* 集中进行装填管理, 可追踪可预测的数据仓库;
* 基础安装+配置:
  **********
    npm i --save vuex;
    一般在/src/store创建文件夹下创建index.js: import Vuex from 'vuex'; Vue.use(Vuex); 
    导出export default new Vuex.Store({ state, mutations, actions, modules });
    在根实例中进行注册: new Vue({ router, store, render: h=>h(App)}).mounted('#app');
  **********
* Vuex相关核心概念(state, mutations, actions, modules, getters):
  *****
    state: 状态数据 - 唯一数据源;
    mutations: 对数据进行更改的方法: 唯一改变state的方法; 配合commit使用
    actions: 异步处理操作;
    modules: 数据模块化;
    getters: 计算属性;
  *****
* 在子组件中通过this.$store.state获取数据管理的状态; 经常在组件的computed中进行获取
* import {mapState} from 'vuex';后可以使用辅助函数: ...mapState(['a', 'b', 'c'])可以直接获取多个属性, 简化操作;
* getters对状态进行操作后再返回(类似于组件中的computed): this.$store.getters获取即可, 对应mapGetters辅助函数同mapState使用;
* mapState, mapGetters使用数组获取state的数据, 也可以使用对象为获取的state的数据取别名;...mapState({ oa: 'a' }); 值也可以通过函数的方式进行调用返回;
* mutations: 类似于组件中的methods, 注册不同方法对state进行改变; 组件内this.$store.commit('add')使用, 对应mapMutations辅助使用;
* Vue.set(state, 'newState', '新值'); 或 this.replaceState({...state, newState: '新值'})两种方式添加state中未预设的值;
* mutations必须是同步函数, 异步必须放在actions中: 对应mapActions辅助使用; 异步后提交到matations改变状态
* actions中函数的第一个参数context(用于获得state, 使用mutations方法改变状态), 第二个参数为可接受的外部的第二个参数; context.commit('fn1', asyncData); 同样可以配合mapActions辅助函数简介使用;
* 组建中，通过this.$store.dispatch('actionName')触发store中的action方法调用异步函数;
* module模块: 更小粒度的状态管理模块, 每个模块内都含有以上关键方法; 声明模块 => 引用模块; this.$store.state.moduleName.attr使用;
* module中获取全局状态: rootState(不带命名空间: 全局模块状态信息集合); state(为当前模块状态集合);
* 默认mutations, actions, getters是注册在全局上的; 为了保证每个模块的独立性, 可以利用namespaced: true将模块内的mutations, actions,getters方法局部化(this.$store.dispatch('moduleName/actionFunc')调用携带模块名/方法名即可);
* 带命名空间的module中, 方法使用第三个参数{root: true}获取全局方法, 状态使用rootGetters, rootState获取; 不带命名空间的module中使用rootState获取全局状态;
* 模块中的辅助函数: 使用规则同;额外增加一个空间名称参数即可。也可以使用createNamespacedHelpers创建基于某个命名空间辅助函数(推荐)


