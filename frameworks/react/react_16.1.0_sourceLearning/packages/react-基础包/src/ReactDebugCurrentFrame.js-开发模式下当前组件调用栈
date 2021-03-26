

const ReactDebugCurrentFrame = {};

if (__DEV__) { // 开发模式下-获取正常调用当前组件的调用栈
  ReactDebugCurrentFrame.getCurrentStack = (null: null | (() => string | null));

  ReactDebugCurrentFrame.getStackAddendum = function(): string | null {
    const impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

export default ReactDebugCurrentFrame;
