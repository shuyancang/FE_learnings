

# three js

# 添加材质和灯光
* new THERE.SpotLight()创建光源, 
* spotLight.position.set()设置光源位置
* scene.add(spotlight) 场景中加入光源
* 添加阴影-阴影效果会浪费较多资源, 一般默认不添加阴影: renderer.shadowMap.enabled = true; 默认false;
* 对平面添加阴影: plane.receiveShadow = true
* 对立方体添加阴影: cube.castShadow = true;
* 打开球体阴影： sphere.castShadow = true;
* 指定阴影可以生成光源spotLight.castShadow = true;

# threejs的动画效果
* requestAnimationFrame进行动画实现
* 可以引入threejs自带开发的辅助库stats.min.js, 进行动画的辅助开发;
* 方块的转动rotation的动画控制  弹跳球position控制Math.sin及Math.cos

# 场景
* 创建场景: 相机 + 光源 + 物体;
* 相机: 决定哪些东西将被显示在屏幕上
* 光源: 生成阴影与改变物体表面显示效果
* 物体: 相机透视图里主要的渲染对象
* 场景的基本功能: scene.add()场景中添加物体; scene.remove()场景中移除物体; scene.children()获取场景中所有子对象的列表; scene.getChildByName()获得场景中所有对象的列表;
* fog通过该属性可以设置场景的雾化效果: scene.fog = new THREE.Fog(颜色, 近距离0.05, 雾化远距离1000);
* overrideMaterial 通过这个属性可以让场景中的所有物体都使用相同材质=> scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xff55dd}); 

# 几何和网格对象
* THREE.Geometry是所有集合对象的基类(简称geom);
* geom.vertices表示几何体的顶点, 是一个数组; geom.faces表示几何体的侧面;
* 
* 























