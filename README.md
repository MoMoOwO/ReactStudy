# React 学习记录

1. [视频链接](https://www.bilibili.com/video/av50680998)

2. 笔记为个人纪录，章节号与文件夹序号对应。

## Vue 基础

1. 学习目标：

    (1) 能够说出 Vue 的基本用法

    (2) 能够说出 Vue 的模板语法

    (3) 能够说出 Vue 的常用特性

    (4)能够基于 Vue 实现案例效果。

2. 学习内容：

    (1) Vue 概述

    (2) Vue 基本使用

    (3) Vue 模板语法

    (4) 基础案例

    (5) Vue 常用特性

    (6) 综合案例等内容。

### Vue 概述

1. Vue：渐进式 JavaScript 框架，声明式渲染 -> 组件系统 -> 客户端路由 -> 集中式状态管理 -> 项目构建。

2. 优点：

   (1) 易用：熟悉 HTML、CSS、JavaScript 知识后可快速上手 Vue；

   (2) 灵活：在一个库和一套完整框架之间自如伸缩；

   (3) 高效：20KB 运行大小，超快虚拟 DOM。

### Vue 基本使用

1. 在 DOM 中渲染 Hello World 的三种实现方式对比。

   ```HTML
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- 引入 jQuery 依赖 -->
         <script src="./js/jquery-3.4.1.js"></script>
         <!-- 引入 Vue 依赖 -->            <script src="./js/vue.js"></script>
         <title>Document</title>
     </head>
     <body>

         <div id="msgdiv1"></div>
         <div id="msgdiv2"></div>
         <div id="msgdiv3">{{ msg }}</div>

         <script>
             // 使用原生 js 在 div 中输出 Hello World
             let msg = 'Hello World! --- JS';
             let div = document.querySelector("#msgdiv1"); // 获取 DOM 元素
             div.innerHTML = msg;

             // 使用 jQuery 在 div 中输出 Hello World
             msg = 'Hello World! --- jQuery';
             $('#msgdiv2').html(msg);

             // 使用 Vue 在 div 中输出 Hello World
             let vm = new Vue({
                 el: '#msgdiv3',
                 data: {
                     msg: 'Hello World! --- Vue'
                 }
             })
         </script>
     </body>
     </html>
   ```
