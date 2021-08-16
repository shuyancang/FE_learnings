


# 项目中如何应用数据结构

## 1: 栈, 队列, 链表, 集合, 字典, 哈希表, 树, 图;

## 2. 总体
*********
2.1 项目中直接新建, 使用数据结构时候，较少，在各个语言中对各种数据结构的使用，都有一定的模拟；
2.2 数据结构本身直接使用较少，并不意味数据结构无用，相反大量项目逻辑, 数据处理处处存在各种数据结构的使用思路；
*********

## 3. 项目中常见的各类数据结构的使用
********
3.1 大量数据展示时(列表, 线形图等), 若涉及到一个视图区域内可展示内容无限，而数据量较大时，可以通过队列(先入先出)的方式对数据处理, 保持视图区域展示固定长度的最新数据;
3.2 浏览器history的数据, 操作/交互的记忆, 可以使用栈的思路(先入先出), 保留最新的处理记忆, 随时进行取出调用;
3.3 项目中明确某个交互/请求后，一次次的下一步数据处理时, 可以将每个步骤有序的分解为每一个next(链表)进行执行, 既保留了交互的有序性，又能随时进行中间的流程复用;
3.4 在项目中, 每一个逻辑内或业务内的一一对应的关系，都可以理解成集合或字典的实际运用; 包括但不限于: DOM: Element => Event, object: key => value, localstorage: item => value, cooke: name => value
3.5 目录菜单的多层遍历, 同类型数据的多层级结构渲染, 同结构数据的递归查找, 同结构数据的子/父级动态生成, 都需要使用树形数据结构的处理思路, 常见的需要掌握的相关算法: 递归, 深度遍历, 广度遍历;
3.6 图: 使用地图路径计算, 空间位置计算, 数据离散程度比较时, 比较常用;
********