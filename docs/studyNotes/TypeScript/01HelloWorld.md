---
title: Hello World
author: 李巳
date: '2022-08-4'
categories:
  - frontEnd
tags:
  - TypeScript
---
## 类型

### ES6 的数据类型

- Boolean
- Number
- String
- Symbol
- undefined
- null
- Object
- Array
- Function

### TypeScript 的数据类型

除以上几种外

- void
- any
- never
- 元组
- 枚举
- 高级类型

### 在 TypeScript 中定义类型

- 原始类型直接定义
- 数组：
  ```ts
  let arr1: number[] = [1, 2, 3]
  let arr2: Array<number | string> = [1, 2, 3, '4']
  ```
- 元组(特殊的数组)：
  ```ts
  let tuple: [number, string] = [1, '2']
  tuple.push(3) // 不会报错
  console.log(tuple) // [1, '2', 3]
  tuple[2] // Tuple type [number, string] of length '2' has no element at index '2' 即 无法越界访问, 所以开发中不能这样操作
  ```
- 函数

  ```ts
  let add = (x, y) => x + y // 参数x, y 隐式具有any类型, 不能直接声明, 需要给参数加上类型注解
  let add = (x: number, y: number) => x + y // 这样在typescript中才合法

  let compute = (x: number, y: number) => number // 注意: 这是一种函数类型声明, 尚未书写函数体, 要注意其和箭头函数非常相似, 但不是箭头函数
  compute = (a, b) => a + b // 声明了函数类型之后, 就可以直接实现该函数,而不用再对其做类型注解
  ```

- 对象
  ```ts
  let obj: object = { x: 1, y: 2 }
  obj.x = 3 // 类型object上不存在属性 x;
  /**
   *由于未对 object 类型定义它具体有哪些属性, 所以直接修改 obj.x = 3 会报错
   */
  // 正确的定义方式如下
  let obj: { x: number; y: number } = { x: 1, y: 2 }
  obj.x = 3
  ```
- symbol

  ```ts
  let s1: symbol = Symbol()
  let s2 = Symbol()
  // 上述操作都合法
  s1 === s2 // false symbol生成的值都是唯一的
  ```

- undefined、null

  ```ts
  let un: undefined = undefined
  let nu: null = null
  // 当一个变量被声明为 undefined 或null 类型时, 他就不能再被赋值为其他值
  // 在没有设置 strictNullCheck 为false 时,其他类型的变量也不能被赋值为undefined 和 null
  ```

- void

  ```ts
  let noReturn = () => {}
  // void 是一个操作符, 可以让任何表达式返回undefined, 在js中, undefined 不是一个保留字, 它可以覆盖, 所以需要这样一个操作符, 来确保我们返回了undefined
  void 0 // undefined
  ```

- any 不建议使用, 否则就跟 JavaScript 没有任何区别了

- never
  ```ts
  // never表示永远不会有返回值的类型, 比如抛出错误的函数和死循环函数
  let error = () => {
    throw new Error('error')
  }
  let endless = () => {
    while (true) {}
  }
  ```

下节课: 枚举类型
