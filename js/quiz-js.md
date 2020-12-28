# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：
1. 学会用console.log调试大法
2. 先构思再编码
3. 遇到不会的，学会运用CRM，先copy，再run，再modify

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：返回localStorage的loglevel属性，如果该属性不存在则返回INFO
