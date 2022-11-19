# React 学习记录

1. [视频链接](https://www.bilibili.com/video/av50680998)

2. 笔记为个人纪录，章节号与文件夹序号对应。

## React 简介

1. 是什么？

    (1) React 用于构建用户界面的 JavaScript 库。
    (2) React 是一个将数据渲染为 HTML 视图的开源 JavaScript 库。

2. 开发者？

    (1) 由 Facebook 开发，且开源。
    (2) 起初由 Facebook 的软件工程师 Jordan Walke 创建，于 2011 年部署于 Facebook 的 newsfeed，随后在 2012 年部署于 Instagram，2013 年 5 月宣布开源。

3. 为什么要学习 React？

    (1) 原生 JavaScript 操作 DOM 繁琐、效率低（DOM-API 操作 UI）。
    (2) 使用 JavaScript 直接操作 DOM， 浏览器会进行大量的重绘重排。
    (3) 原生 JavaScript 没有组件化编码方案，代码复用率低。

4. React 的特点

    (4) 采用组件化模式、声明式编码，提高开发效率及组件复用率。
    (5) 在 React Native 中可以使用 React 语法进行移动端开发。
    (6) 使用虚拟 DOM + 优秀的 Diffing 算法，尽量减少与真实 DOM 的交互。

5. 学习 React 之前你要掌握的 JavaScript 基础知识

    (1) 判断 this 的指向。
    (2) class
    (3) ES6 语法规范
    (4) npm 包管理工具
    (5) 原型、原型链
    (6) 数组常用方法
    (7) 模块化

## React 入门

1. 官网

    (1) [英文官网](https://reactjs.org)
    (2) [中文官网](https://react.docschina.org)

2. React 的基本使用

    (1) 相关 js 库
      + react.js：React 核心库
      + react-dom.js：提供操作 DOM 的 React 扩展库
      + babel.min.js：解析 JSX 语法代码转为 JS 代码的库。

    (2) 案例

      ``` HTML
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>虚拟DOM与真实DOM</title>
            <!-- 引入react 核心库 -->
            <script type="text/javascript" src="../js/react.development.js"></script>
            <!-- 引入 react-dom 用于支持 react 操作 DOM -->
            <script
              type="text/javascript"
              src="../js/react-dom.development.js"
            ></script>
            <!-- 引入 babel 用于将 jsx 转为 js -->
            <script type="text/javascript" src="../js/babel.min.js"></script>
          </head>

          <body>
            <!-- 准备好一个“容器” -->
            <div id="test"></div>
            <div id="demo"></div>

            <script type="text/babel">
              /* 此处一定要写 babel 标识需要 babel 对此处进行编译 */
              // 1. 创建虚拟 DOM
              const VDOM = (
                <h1 id="title">
                  <span>hello, React!</span>
                </h1>
              )
              /* 此处一定不要加引号，因为不是字符串 */
              // 2. 渲染虚拟 DOM 到页面
              ReactDOM.render(VDOM, document.getElementById('test'))
              const TDOM = document.getElementById('demo')
              console.log('虚拟DOM', VDOM)
              console.log('真实DOM', TDOM)
              debugger
              console.log(typeof VDOM)
              console.log(VDOM instanceof Object)
              /*
                关于虚拟 DOM
                1、本质是 Object 类型对象（一般对象）
                2、虚拟 DOM 比较“轻”，真实DOM比较“重”，因为虚拟 DOM 是 React 内部再用，无需真实 DOM上那么多属性
                3、虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。
              */
            </script>
          </body>
        </html>
      ```

    (3) 虚拟 DOM
      + React 提供了一些 API 来创建一种“特别”的一般 JS 对象，如 `var element = React.createElement('h1', {id:'myTitle'},'hello')` 就创建了一个简单的虚拟 DOM 对象。
      + 虚拟 DOM 对象最终都会被 React 转换为真实的 DOM。
      + 我们编码时基本只需要操作 React 的虚拟 DOM 相关数据，React 会转换为真实的 DOM 变化而更新界面。

    (4) 渲染虚拟 DOM
      + 语法：`ReactDOM.render(virtualDOM, containerDOM)`。
      + 作用：将虚拟 DOM 元素渲染到页面中的真实容器 DOM 中显示。
      + 参数说明：参数一为纯 js 或 jsx 创建的虚拟 DOM 对象，参数二位用来包含虚拟 DOM 元素的真实 DOM 元素对象（一般是一个 div）。

    (5) 创建虚拟 DOM 的两种方式
      + 纯 JS(一般不用)：`const VDOM = React.createElement('h1', {id: 'myTitle'}, 'title')`。
      + JSX：`const VDOM = <h1 id="myTitle">title</h1>`

3. JSX

    (1) JSX 简介
      + 全程 JavaScript XML。
      + React 定义的一种类似于 XML 的 JS 扩展语法：JS + XML。
      + 本质是 `React.createElement(component, props, ...children)` 犯法的语法糖。
      + 作用：用来简化创建虚拟 DOM；写法：`var ele = <h1>Hello JSX!</h1>`；注意：它不是字符串，也不是 HTML/XML 标签 ，它最终产生的就是一个 JS 对象。
      + 标签名可以是任意 HTML 标签或其他标签。
      + 基础语法规则：遇到 `<` 开头的代码，以标签的语法解析 HTML 同名标签转换为 HTML 同名元素，其他标签需要特别解析；遇到以 `{` 开头的代码，以 JS 语法解析，标签中的 js 表达式必须用 `{}` 包含。
      + babel.js 的作用：浏览器不能直接解析 JSX 代码，需要 babel 转译为纯 JS 的代码才能运行；只要用了 JSX，都要加上 `type="text/babel"`，声明需要 babel 来处理。

    (2) JSX 基本语法规则
      + 定义虚拟 DOM 时，不要写引号。
      + 标签中混入 JS 表达式时要用 `{}`。
      + 样式的类名指定不要用 `class`，要用 `className`。
      + 内联样式要用 `style = {{key: value}}` 的形式写。
      + 虚拟 DOM 必须只有一个根标签。
      + 标签必须闭合。
      + 标签首字母：若小写字母开头，则将该标签转为 HTML 同名元素，如果 HTML 中没有该标签对应同名元素则报错；若大写字母开头，React 就去渲染对应的组件，如果组件没有定义则报错。

4. 模块与组件、模块化与组件化的理解

    (1) 模块
      + 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件。
      + 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
      + 作用：复用 js，简化 js 的编写，提高 js 运行效率。

    (2) 组件
      + 理解：用来实现局部哦那个能效果的代码和资源的集合（html/css/js/image等）。
      + 为什么：一个界面的功能更复杂。
      + 作用：复用编码，简化项目编码，提高运行效率。

    (3) 模块化
      + 当应用的 js 都以模块来编写的，这个应用就是要给模块化的应用。

    (4) 组件化
      + 当应用是以多组建的方式实现的，这个应用就是一个组件化的应用。

### React 面向组件编程

1. 基本理解和使用

    (1) 自定义组件
      + 定义组件（两种方式）

        ``` JavaScript
        // 方法1：工厂函数组件（无 state，简单组件）
        function MyComponent() {
          return <h1>工厂函数组件（简单组件）</h1>
        }
        // 方法2：ES6 类式组件（有 state，复杂组件）
        class MyComponent {
          render() {
            return <h1>ES6 类式组件（复杂组件）</h1>
          }
        }
        ```

      + 渲染组件 `ReactDOM.render(<MyComponent />, document.getElementById('test'))`
      + 注意：组件名必须首字母大写，虚拟 DOM 元素只能有一个根元素，虚拟 DOM 元素必须有结束标签。
      + `render()` 方法渲染类组件标签的基本流程：React 内部会创建一个组建的实例对象，然后调用 `render()` 方法得到虚拟 DOM，并解析为真实 DOM，然后将其插入到指定的页面元素内部。

2. 组件实例的三大属性一 `state`

    (1) 理解
      + `state` 是组件对象最重要的属性，值是对象（可以包含多个 key-value 组合）
      + 组件被称为“状态机”，通过更新组建的 `state` 来更新对应的页面显示（重新渲染组件）

    (2) 编码操作
      + 初始化状态

        ``` JavaScript
        constructor(props) {
          super(props)
          this.state = {
            stateProp1: value1,
            stateProp2: value2,
          }
        }
        ```

      + 读取某个个状态值 `this.state.stateProp1`
      + 更新状态->组件界面更新

        ``` JavaScript
        this.setState({
          stateProp1: value1,
          stateProp2: value2
        })
        ```

    (3) 注意点：
      + 组件内置的方法中 `this` 为组件对象。
      + 在组件类中自定义的方法中 `this` 为 `undefined`：可以通过函数对象的 `bind()` 接口实现强制绑定 `this`，或者建通函数（ES6 模块化编码时才能使用）。
      + 状态数据，不可以直接修改或更新。

### React 应用（基于 react 脚手架）

### React ajax

### react-router

### react UI 组件库

### redux
