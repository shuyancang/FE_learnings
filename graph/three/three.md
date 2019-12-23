

# three js

# 1. 添加材质和灯光
* new THERE.SpotLight()创建光源, 
* spotLight.position.set()设置光源位置
* scene.add(spotlight) 场景中加入光源
* 添加阴影-阴影效果会浪费较多资源, 一般默认不添加阴影: renderer.shadowMap.enabled = true; 默认false;
* 对平面添加阴影: plane.receiveShadow = true
* 对立方体添加阴影: cube.castShadow = true;
* 打开球体阴影： sphere.castShadow = true;
* 指定阴影可以生成光源spotLight.castShadow = true;

# 2. threejs的动画效果
* requestAnimationFrame进行动画实现
* 可以引入threejs自带开发的辅助库stats.min.js, 进行动画的辅助开发;
* 方块的转动rotation的动画控制  弹跳球position控制Math.sin及Math.cos

# 2. 场景
* 创建场景: 相机 + 光源 + 物体;
* 相机: 决定哪些东西将被显示在屏幕上
* 光源: 生成阴影与改变物体表面显示效果
* 物体: 相机透视图里主要的渲染对象
* 场景的基本功能: scene.add()场景中添加物体; scene.remove()场景中移除物体; scene.children()获取场景中所有子对象的列表; scene.getChildByName()获得场景中所有对象的列表;
* fog通过该属性可以设置场景的雾化效果: scene.fog = new THREE.Fog(颜色, 近距离0.05, 雾化远距离1000);
* overrideMaterial 通过这个属性可以让场景中的所有物体都使用相同材质=> scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xff55dd}); 

# 2. 几何和网格对象
* THREE.Geometry是所有集合对象的基类(简称geom);
* geom.vertices表示几何体的顶点, 是一个数组; geom.faces表示几何体的侧面;
* 网格对象的属性position决定该对象相对于父对象的位置
* 网格对象属性rotation设置对象绕任何一个轴的旋转弧度
* 网格对象属性scale为沿x, y, z缩放对象
* 网格对象属性translateX: x轴平移; translateY: y轴平移; translateZ: z轴平移：

# 3. 相机
* 定义三维空间向二位显示器的投影方式: 透视投影(近大远小-实际场景较多)摄像机, 正交投影(数学理论投影-常用展示效果场景较多)摄像机
* THREE.OrghographicCamera(left, rigth, top, bottom, near, far);为了保持显示比例，常见用相机宽高比例与canvas宽高比例应该保持一致。
* 
* 
* 
* 



