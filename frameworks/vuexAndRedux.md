

# redux设计思想及作用(主要解决的问题):
**************
1. 设计思想: 纯函数-无任何副作用;
2. 解决问题: 组件间connect共享store实现通信, 通过统一的store进行数据在各个生命周期内的管理, 将数据从ui中进行抽离, 实现mvvm的数据核心, 更方便进行页面状态的管理和切片
*************

# redux工作流程:
***********
1. const store = createStore(fn)生成数据;
2. action: {type: Symble('action001'), payload: 'payload' }定义行为;
3. dispatch发起action: store.dispatch(doSomething('action001'));
4. reducer: 处理action, 返回新的state;
***********

## redux原理:
```javascript

const actionTypes = {
    ADD: 'ADD',
    CHANGEINFO: 'CHANGEINFO',
}

const initState = {
    info: '初始化',
}

export default function initReducer(state=initState, action) {
    switch(action.type) {
        case actionTypes.CHANGEINFO:
            return {
                ...state,
                info: action.preload.info || '',
            }
        default:
            return { ...state };
    }
}

export default function createStore(reducer, initialState, middleFunc) {

    if (initialState && typeof initialState === 'function') {
        middleFunc = initialState;
        initialState = undefined;
    }

    let currentState = initialState;

    const listeners = [];

    if (middleFunc && typeof middleFunc === 'function') {
        // 封装dispatch 
        return middleFunc(createStore)(reducer, initialState);
    }

    const getState = () => {
        return currentState;
    }

    const dispatch = (action) => {
        currentState = reducer(currentState, action);

        listeners.forEach(listener => {
            listener();
        })
    }

    const subscribe = (listener) => {
        listeners.push(listener);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}
```

# redux与vuex的共同思想与区别
* 本质上, redux与vuex都是对mvvm思想的服务, 将数据从视图中抽离的一种方案;
* 形式上, vuex借鉴了redux, 将store作为全局的数据中心, 进行mode管理;
* 区别01: vuex 弱化 dispatch, 通过commit进行store状态的一次更变;
* 区别02: 取消了action概念, 不必传入特定的action形式进行指定变更; 
* 区别03: 弱化reducer, 基于commit参数直接对数据进行转变, 使得框架更加简易;


