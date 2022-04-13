/**
 * WeakSet和Set的区别
 *  1.WeakSet中只能存放对象类型
 *  2.WeakSet对元素的引用是弱引用 如果没有其他引用 那么GC可以对该对象进行回收
 *  3.WeakSet不能遍历
 */  
const weakset = new WeakSet();
weakset.add({ name:'zhangsan' });

console.log(weakset);