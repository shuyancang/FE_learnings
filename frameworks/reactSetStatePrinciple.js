

/**
 * setState使用展现形式: 
 * 1. 异步更新state，将短时间内的多个setState合并成一个, 一同执行render
 * 2. 接受一个函数作为setState()参数，在函数中可以得到前一个状态并返回下一个状态
 * 
 *  要实现形式1, 需一个合并队列queue, 将每次setState的操作进行保留, 将一段时间内的操作一起合并执行, 再统一render(渲染队列)
 *  要实现形式2, 需允许setState传入一个函数, 在setState执行时, 能获取到当前状态 
 *               ||
 *               ||   
 *              \  /   
 *               \/ 
 * 相关流程术语:
 * enqueueSetState - 更新队列: 每一次setState参数存入的队列
 * enqueueUpdate - 组件队列更新操作, 会查验当前是否处于更新(基于状态参数isBatchingUpdates)中, 是-放入dirtyComponent, 否-更新;
 * isBatchingUpdates - 状态bool: 更新组件标识, 每一次更新完成重置为false,
 * batchedUpdates - 批量更新: 每次执行isBatchingUpdates设置为true,
 * dirtyComponent - 批量更新时, 将收集的dirtyComponent进行统一更新

伪代码如下: 

const setState = (newState) => { // 将要执行替换的参数传入队列, newState一般是{}, 但可以是function
  queueListener(newState, this);
  render(); // render渲染
}

const queue = [], renderQueue = []; // queue为setState的合并队列, renderQueue为渲染队列

function defer(fn) { // 利用事件队列机制周期性处理render任务;
  return Promise.resolve().then(fn);
}

function queueListener(newState, component){
  if (queue.length === 0) { // 队列内上次任务清空任务后, 进入下一批等待执行
    defer(flush);
  }
  queue.push({ // 每个新的state存入队列
    newState,
    component
  });
  if (!renderQueue.some(e => e === component)) { // 组件渲染操作放入渲染队列
    renderQueue.push( component );
  }
}

function flush() { // 执行合并渲染, 清空queue
  let item;
  while(item = queue.shift()){
    const { newState, component } = item;
    if (!component.prevState) {
      component.prevState = { ...component.state };
    }
    if (typeof newState === 'function') { // 传入的是函数时, 将之前的state作为参数进行传递
      Object.assign(component.state, newState(component.prevState, component.props));
    } else {
      Object.assign(component.state, newState);
    }
    component.prevState = component.state; // 当前state替换prev
  }
  while(component = renderQueue.shift()) {// 渲染每一个组件
    renderComponent(component);
  }
}
 * **/



