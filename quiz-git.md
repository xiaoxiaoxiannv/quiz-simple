# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：
1. 从主分支创建新的开发分支
    切换到主分支
    1. git checkout master 
    获取主分支最新代码
    2. git pull 
    本地创建新的开发分支
    3. git checkout -b feature_v1.0.0 
    推送到remote 的feature_v1.0.0 
    4. git push origin feature_v1.0.0:feature_v1.0.0
2. 在本地开发分支进行开发之后,提交代码到远程仓库的开发分支 
     1. git add .
     2. git commit -m "commit message"
     3. git push --set-upstream origin feature_v1.0.0

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：
1. 仓库里面添加ssh公钥避免每次提交都需要输入用户名、密码
2. 每次开发尽量都从主分支创建开发分支，以免出现代码版本问题
3. 多次commit的时候，可用rebase来规整commit日志
