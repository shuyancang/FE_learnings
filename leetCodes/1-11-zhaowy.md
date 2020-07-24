

# 1 页面埋点如何实现

# 1.1 现有的埋点类型：
**********
1. 手动代码埋点：在需要采集数据的地方调用埋点的方法。在任意地点任意场景进行数据采集，
2. 可是化埋点：元素都带有唯一标识。通过埋点配置后台，将元素与要采集事件关联起来，可以自动生成埋点代码嵌入到页面中。
3. 无埋点：前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据，
*************

# 1.2 基本实现方案：
*************
1. 约定通用的埋点采集接口规范: 如header(标识X-Device-Id, X-Source-Url, X-Current-Url, X-User-Id等信息), body(标识PageSessionID, Event, PageTitle, CurrentTime, ExtraInfo);
2. 指定调用采集脚本的方式: 单页面应用 => 对history路径的变化保持监听, 路径变化时触发埋点收集; 页面加载/离开绑定对应的onload, unload事件, 页面元素上绑定相关的交互事件(click, event等)
**********

# 1.3 示意伪代码： 
```javascript
    var collect = {
        deviceUrl:'',
        eventUrl:'',
        isuploadUrl:'',
        parmas:{},
        device:{}
    };

    //获取埋点配置
    collect.setParames = function(){}

    //更新访问路径及页面信息
    collect.updatePageInfo = function(){}

    //获取事件参数
    collect.getParames = function(){}

    //获取设备信息
    collect.getDevice = function(){}

    //事件采集
    collect.send = function(){}

    //设备采集
    collect.sendDevice = function(){}

    //判断才否采集，埋点采集的开关
    collect.isupload = function(){

        1. 判断是否采集，不采集就注销事件监听（项目中区分游客身份和用户身份的采集情况，这个方法会被判断两次）
        2. 采集则判断是否已经采集过
            a.已经采集过不做任何操作
            b.没有采集过添加事件监听
        3. 判断是 混合应用还是纯 web 应用
            a.如果是web 应用，调用 collect.setIframe 设置 iframe
            b.如果是混合应用 将开始加载和加载完成事件传输给 app
    }

    //点击事件处理函数
    collect.clickHandler = function(){}

    //离开页面的事件处理函数
    collect.beforeUnloadHandler = function(){}

    //页面回退事件处理函数
    collect.onPopStateHandler = function(){}

    //系统事件初始化，注册离开事件，浏览器后退事件
    collect.event = function(){}

    //获取记录开始加载数据信息
    collect.getBeforeload = function(){}

    //存储加载完成，获取设备类型，记录加载完成信息
    collect.onload = function(){

        1. 判断cookie是否有存设备类型信息，有表示混合应用
        2. 采集加载完成时间等信息
        3. 调用 collect.isupload 判断是否进行采集
    }

    //web 应用，通过嵌入 iframe 进行跨域 cookie 通讯，设置设备id
    collect.setIframe = function(){}

    //app 与 h5 混合应用，直接将数信息发给 app,判断设备类型做原生方法适配器
    collect.saveEvent = function(){}

    //采集自定义事件类型
    collect.dispatch = function(){}

    //将参数 userId 存入sessionStorage
    collect.storeUserId = function(){}

    //采集H5信息,如果是混合应用，将采集到的信息发送给 app 端
    collect.saveEventInfo = function(){}

    //页面初始化调用方法
    collect.init = function(){

        1. 获取开始加载的采集信息
        2. 获取 SDK 配置信息，设备信息
        3. 改写 history 两个方法，单页面应用页面跳转前调用我们自己的方法
        4. 页面加载完成，调用 collect.onload 方法

    }


    collect.init(); // 初始化

    //暴露给业务方调用的方法
    return {
        dispatch:collect.dispatch,
        storeUserId:collect.storeUserId,
    }


```



