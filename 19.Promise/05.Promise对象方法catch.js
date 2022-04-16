

const promise = new Promise((resolve, reject) => {
  // resolve('success');
  // reject('failure');
  throw new Error('failure');
}).catch(err => {
  console.log(err);
  return 'catch return';
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
