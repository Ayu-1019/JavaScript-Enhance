const PROMIESE_STATUS_PENDING = 'pending';
const PROMIESE_STATUS_FULFILLED = 'fulfilled';
const PROMIESE_STATUS_REJECTED = 'rejected';

class YuPromise{
  constructor(executor){
    this.status = PROMIESE_STATUS_PENDING;
    const resolve = () => {
      if(this.status === PROMIESE_STATUS_PENDING){
        this.status = PROMIESE_STATUS_FULFILLED
        console.log('resolve被调用');
      }
    }

    const reject = () => {
      if(this.status === PROMIESE_STATUS_PENDING){
        this.status = PROMIESE_STATUS_REJECTED
        console.log('reject被调用');
      }
    }
    executor(resolve, reject);
  } 
}

const promise = new YuPromise((resolve, reject) => {
  console.log('传入的函数被直接调用');
  // resolve();
  reject();
})