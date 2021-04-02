# react-reconciler


## API

```js
var Reconciler = require('react-reconciler');

var ReconcilerConfig = { // 自己配置调度器接口方案以实现自己的render
};

var MyRenderer = Reconciler(ReconcilerConfig);

var RendererPublicAPI = {
  render(element, container, callback) {
    // 调用MyRenderer.updateContainer()来调度改变; 可参考ReactDOM, React Native React ART
  }
};

module.exports = RendererPublicAPI;
```

* [React ART](https://github.com/facebook/react/blob/master/packages/react-art/src/ReactART.js)
* [React DOM](https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOM.js)
* [React Native](https://github.com/facebook/react/blob/master/packages/react-native-renderer/src/ReactNativeFiberRenderer.js)


This [third-party tutorial](https://github.com/nitin42/Making-a-custom-React-renderer) is relatively up-to-date and may be helpful.
