

# 如果给你一个深层次的树结构, 数据需要使用mysql存储, 你会如何设计存储结构, 需要考虑的点有哪些, 为什么这样设计

* 理想中树形结构应该具备如下特征：数据存储冗余度小、直观性强；检索遍历过程简单高效；节点增删改查CRUD操作高效
**************
1. 继承关系驱动：基本信息 + node_id + parent_id进行父子级关系; 优点设计简单直观方便, 缺点任何CRUD都需频繁递归很低效; 在tree规模较小情况下可以借助缓存机制优化降低性能开销;
2. 左右值编码设计: 基本信息, node_id, left_id, right_id; 基于树形结构设计的无递归查询无限分组的左右值编码方案; 每个左值大于该node左值右值小于node右值的节点都其后续节点; 左值为深度查询根节点遍历顺序id, 右值为回到父级顺序id;
        node_id  |  Name  |  Left  |  Right
        2           A         2         11
        3           B         3         6
        4           C         4         5
        5           D         7         10
        6           E         8         9
  优点: 在消除了递归操作的前提下实现了无限分组，而且查询条件是基于整形数字的比较，效率很高
  缺点: 节点的添加、删除及修改代价较大，将会涉及到表中多方面数据的改动。
3. 全路径存储设计: 基本信息 + 全路径存储; 优点: 对树结构中某个节点进行更改查询操作效率很高; 缺点整体的查询与处理低效;
**************






