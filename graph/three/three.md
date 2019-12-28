

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
* 正交投影照相机THREE.OrthographicCamera(left, rigth, top, bottom, near, far);为了保持显示比例，常见用相机宽高比例与canvas宽高比例应该保持一致。near经常设置很小，far设置很大，以保证图形不会被忽略
* left左边界, right右边界, top上边界, bottom下边界, near近裁面, far远裁面
* camera.lookAt 设置目标点
* 透视投影照相机THREE.PerspectiveCamera(fov张角-视野宽度推荐45°,aspect长宽比-推荐window/innerWidth/widow.innerHeight,near最近距离推荐0.1,far最远距离-应该远大于near推荐1000, 值太大影响性能, 值太小场景显示不全);
* 

# 4. 认识光源
* AmbientLight环境光-基础光源, 影响整个场景;
* PointLight点光源-空间中的一个点, 所有方向发射光源;
* SpotLight聚光灯-具有锥形效果的聚光光源;
* DirectionalLight平行光 - 无限光，模拟远处太阳的光源;
* 高级光照效果-半球光(模拟自然), 平面光(指定散发光源的平面), 镜头眩光(为光源添加眩光效果);
* AmbientLight没有明确的光源位置, 在各处形成的亮度一致, 且不会影响阴影的产生; 不能讲环境光作为场景中的唯一光源 => THREE.AmbientLight(hex); add(color); clone();
* PointLight点光源-单点发光照射所有方向, 不会产生阴影, 减少GPU负担, 亮度线性递减; THREEE.PointLight(hex, intensity-光照强度默认1, distance-光源的照射距离默认0); clone(), color光源颜色;  
* SpotLight聚光灯光源(锥形光)-是最常用的可以产生阴影的光源, 类似电筒光照效果; THREE.SpotLight(hex, intensity, distance, angle, exponent), castShadow属性设置为true则产生阴影; target决定光照方向, angle光照角度默认为Math.PI / 3;
* DirectionalLight 平行光(方向光~太阳光), 方向光光照强度不变; 常用属性castShadow, target, angle; 不常用属性shadowCameraVisible,shadowCameraFar-阴影近距点, shadowDarkness-阴影, shadowMapWidth-阴影宽高, shadowMapHeight等;
* 高级光照效果-半球光光源: THREE.HemisphereLight(hex, intensity); groundColor从地面发出的光线的颜色, Color从天空中发出的光线的颜色, intensity光线照射的强度;
* 高级光照效果-平面光光源THREE.AreaLight-扩展库提供的效果-效果比较复杂, 性能要求较高: 不能使用THREE.WebGLRenderer()需要使用THREE.WebGLDeferedRenderer() (引入);
* 镜头眩光 THREE.LensFlare(texture, size像素, distance距离, blending融合模式, color)进行添加即可; 在threejs官方demo中, texture文件可以查看部分的眩光位图。


# 5. 认识材质
* 
* 
* 
* 
* 
* 



