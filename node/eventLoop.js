const fs = require("fs");
const path = require("path");
// setTimeout(() => {
//   // 新的事件循环的起点
//   console.log("1");
// }, 0);
// setImmediate(() => {
//   console.log("setImmediate 1");
// });
// /// 将会在 poll 阶段执行
// fs.readFile(
//   path.resolve(__dirname, "./test.conf"),
//   { encoding: "utf-8" },
//   (err, data) => {
//     if (err) throw err;
//     console.log("read file success");
//   }
// );
// /// 该部分将会在首次事件循环中执行
// Promise.resolve().then(() => {
//   console.log("poll callback");
// });
// // 首次事件循环执行
// console.log("2");

// const fs = require('fs');
// // 首次事件循环执行
// console.log("start");
// /// 将会在新的事件循环中的阶段执行
// fs.readFile(
//   path.resolve(__dirname, "./test.conf"),
//   { encoding: "utf-8" },
//   (err, data) => {
//     if (err) throw err;
//     console.log("read file success");
//   }
// );
// setTimeout(() => {
//   // 新的事件循环的起点
//   console.log("setTimeout");
// }, 0);
// /// 该部分将会在首次事件循环中执行
// Promise.resolve().then(() => {
//   console.log("Promise callback");
// });
// /// 执行 process.nextTick
// process.nextTick(() => {
//   console.log("nextTick callback");
// });
// // 首次事件循环执行
// console.log("end");

// start => end => nextTick callback => Promise callback => setTimeout => read file success'

// const fs = require('fs');
// setTimeout(() => { // 新的事件循环的起点
//     console.log('1');
//     fs.readFile('./config/test.conf', {encoding: 'utf-8'}, (err, data) => {
//         if (err) throw err;
//         console.log('read file sync success');
//     });
// }, 0);
// /// 回调将会在新的事件循环之前
// fs.readFile('./config/test.conf', {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err;
//     console.log('read file success');
// });
// /// 该部分将会在首次事件循环中执行
// Promise.resolve().then(()=>{
//     console.log('poll callback');
// });
// // 首次事件循环执行
// console.log('2');

// 2 => poll callback => 1 => read file success' => read file sync success

// const fs = require('fs');
// setTimeout(() => {
//   // 新的事件循环的起点
//   console.log("1");
//   sleep(10000);
//   console.log("sleep 10s");
// }, 0);
// /// 将会在 poll 阶段执行
// fs.readFile(
//   path.resolve(__dirname, "./test.conf"),
//   { encoding: "utf-8" },
//   (err, data) => {
//     if (err) throw err;
//     console.log("read file success");
//   }
// );
// console.log("2");
// /// 函数实现，参数 n 单位 毫秒 ；
// function sleep(n) {
//   var start = new Date().getTime();
//   while (true) {
//     if (new Date().getTime() - start > n) {
//       // 使用  break  实现；
//       break;
//     }
//   }
// }

// 2 => 1 => sleep 10s => read file success
