# 一、todoList 案例相关知识点
    1.拆分组件、实现静态组件，注意 className、style 的写法
    2.动态初始化列表，如何确定将数据放在哪个组件的 state 中？
      + 某个组件使用：放在其自身的 state 中
      + 某些组件使用：放在他们共同的父组件 state 中（官方称此操作为：状态提升）
    3.关于父子之间的通信
      + 父组件给子组件传递数据：通过 props 传递
      + 子组件给父组件传递数据：父组件通过 props 给子组件传递一个方法
    4.注意 defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 value
    5. 状态在哪里，操作状态的方法就在哪里
