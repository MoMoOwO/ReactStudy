# React 脚手架

## todoList 案例相关知识点

  1. 拆分组件、实现静态组件，注意 className、style 的写法
  2. 动态初始化列表，如何确定将数据放在哪个组件的 state 中？
    + 某个组件使用：放在其自身的 state 中
    + 某些组件使用：放在他们共同的父组件 state 中（官方称此操作为：状态提升）
  3. 关于父子之间的通信
    + 父组件给子组件传递数据：通过 props 传递
    + 子组件给父组件传递数据：父组件通过 props 给子组件传递一个方法
  4. 注意 defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 value
  5. 状态在哪里，操作状态的方法就在哪里

## 配置代理

1. 方法一

    (1) 配置：在 package.json 中追加如下配置

      ``` json
      "proxy": "http:localhost:5000"
      ```

    (2) 说明
      + 优点：配置简单，前端请求资源时可以不加任何前缀。
      + 缺点：不能配置多个代理。
      + 工作方式：上述方式配置代理，当请求了 3000 端口不存在的资源时，那么该请求会转发给 5000（优先匹配前端资源）。

2. 方法二

    (1) 配置：在 src 文件夹下创建 setupProxy.js 文件，并在文件中进行配置

      ``` JavaScript
      const { createProxyMiddleware } = require("http-proxy-middleware")

      module.exports = function (app) {
        app.use(
          createProxyMiddleware('/api1', { // 遇见 /api1 前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000', // 请求转发给谁
            changeOrigin: true, // 控制服务器收到的响应头中 Host 字段的值
            /*
              changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
              changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
              changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: { '^/api1': '' } // 重写请求路径
          }),
          createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
          })
        )
      }
      ```

    (2) 说明
      + 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
      + 缺点：配置繁琐，前端请求资源时必须加前缀。

## GitHub 搜索案例相关知识点

1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2. ES6 小知识点：解构赋值+重命名

    ``` JavaScript
    let obj = {a: {b: {c: 1}}};
    const {a} = obj; // 传统解构赋值
    const {a: {b}} = obj; // 连续解构赋值
    const {a: {b: value}} = obj; // 连续结构赋值+重命名
    ```

3. 消息定于与发布机制
  (1) 先订阅，再发布（理解：有一种隔空对话的感觉）。
  (2) 适用于任意组件通讯。
  (3) 要在组件的 `componentWillUnmount` 中取消订阅。

4. fecth 发送请求（关注分离的设计思想）

  ``` JavaScript
  try {
    const response = await fetch(`api/search/user/?q=${keyWord}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('请求出错', error)
  }
  ```

## 路由的基本使用

1. 明确好界面中的导航区、展示区。
2. 导航区的 `a` 标签改为 `Link` 标签：`<Link to="/xxx">Demo</Link>`
3. 展示区写 `Route` 标签进行路径的匹配：`<Route path="/xxx" component={Demo} />`
4. `<App />` 的最外侧包裹一个 `<BrowserRouter>` 或 `<HashRouter>`

## 路由组件与一般组件

1. 写法不同：一般组件 `<Demo />`，路由组件 `<Route path="/demo" component={Demo} />`
2. 存放位置不同：一般组件 components 文件夹下，路由组件 pages 文件夹下。
3. 接收到的 `props` 不同：一般组件在写组件标签时传递了什么就接收到什么，路由组件接收到三个固定的属性。

    ``` JavaScript
    history:
      go: ƒ go(n)
      goBack: ƒ goBack()
      goForward:  ƒ goForward()
      push: ƒ push(path, state)
      replace: ƒ replace(path, state)
    location:
      pathname: "/about"
      search: ""
      state: undefined
    match:
      params: {}
      path: "/about"
      url: "/about"
    ```
