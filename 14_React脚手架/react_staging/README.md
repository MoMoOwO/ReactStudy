# React 脚手架

## 一、todoList 案例相关知识点

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
