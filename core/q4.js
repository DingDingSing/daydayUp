// 页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。

// 请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。

// Promise.all 实现
class _Promise {
  all(jobs) {
    return new Promise((resolve, reject) => {
      const result = [];
      let counter = 0;
      for (let [index, item] of jobs.entries()) {
        Promise.resolve(item)
          .then((res) => {
            result[index] = res;
            counter++;
            if (counter === jobs.length) {
              resolve(result);
            }
          })
          .catch((error) => reject(error));
      }
    });
  }
}

const _promise = new _Promise();

class Scheduler {
  constructor() {
    this.cbs = [];
  }

  add(job) {
    this.cbs.push(job);
  }
  run() {
    return _promise.all(this.cbs).then((res) => console.log(res));
  }
}

function mockRequest(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000 * Math.random());
  });
}

const scheduler = new Scheduler();

for (let item of ["a", "b", "c", "d"]) {
  scheduler.add(mockRequest(item));
}

scheduler.run();
