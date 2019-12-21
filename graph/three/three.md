

# three js

# 添加材质和灯光
* new THERE.SpotLight()创建光源, 
* spotLight.position.set()设置光源位置
* scene.add(spotlight) 场景中加入光源
* 添加阴影 - 阴影效果会浪费较多资源, 一般默认不添加阴影: renderer.shadowMap.enabled = true; // 默认为false不渲染阴影;
* 对平面添加阴影: plane.receiveShadow = true
* 对立方体添加阴影: cube.castShadow = true;
* 打开球体阴影： sphere.castShadow = true;
* 指定阴影可以生成光源spotLight.castShadow = true;

# threejs的动画效果
* requestAnimationFrame进行动画实现
* 方块的转动
* 弹跳球























