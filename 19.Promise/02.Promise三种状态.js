// 状态一旦确定下来 就不可更改
new Promise((resolve, reject) => {
  // 此时处于pending状态（待定）
  console.log('--------');
  resolve();
  reject();
}).then(res => {
  // 此时处于fulfilled状态（已成功）
  console.log(res);
}).catch(err => {
  // 此时处于rejected状态（已失败）
  console.log(err);
})