#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=https://github.com/hanhanbuku/my_blog_vuepress.git
commit_info=`git describe --all --always --long`
dist_path=dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

user_name=`git log -1 --pretty=format:'%an'` # 获取用户名
user_email=`git log -1 --pretty=format:'%ae'` # 获取邮箱
echo $user_name
echo $user_email
echo $push_addr
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd $dist_path

git init

git config --global user.name $user_name
git config --global user.email $user_email
git add -A
git commit -m "deploy, $commit_info"
git push -f  $user_name:'wangyuhan0329.'@https://github.com/hanhanbuku/my_blog_vuepress.git HEAD:$push_branch  # HEAD 当前工作的分支

cd -
rm -rf $dist_path  # 删除构建产物
