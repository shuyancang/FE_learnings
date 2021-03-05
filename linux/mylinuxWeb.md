
# 如何搭建linux服务器

*********
1. aliyun 购买linux服务器 (CentOS 8.1 64位)
2. 控制台 => 安全组 => 配置规则 => 手动添加(端口范围选择8000/8900)
3. 查看yum : yum --version; 可利用yum进行软件安装
4. yum直接安装nodejs: yum install nodejs => y => node --version 成功
5. npm i http-server -g 直接全局安装;
6. /home/user/index.html开启http-server即可;
7. 安装配套软件 yum install git; 等
*********