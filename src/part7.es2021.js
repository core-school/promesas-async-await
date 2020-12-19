// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// https://tc39.es/ecma262/#sec-promise.allsettled

Promise.allSettled([
    Promise.resolve(33),
    new Promise(resolve => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error('an error'))
  ])
  .then(values => console.log(values));