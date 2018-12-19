

function slowFib(n) {
  if (n < 2){
      return n
  }
  return fib(n - 1) + fib(n - 2)
}
  // 2^n
  // exponention for every increase in N we are goingt o get a dramatic increase in calls
  // is there any way we could improve this runtime?
  // They're looking for
  // MEMOIZATION
  // Store the arguement of each function call along with the result
  // If the function is called again with the same arguments, return
  // precomupted result, rather than running the function again.

  // function fib(n) {
  //   const result = [0, 1]
  //
  //   for (let i = 2; i <= n; i++) {
  //     const a = result[i-1]
  //     const b = result[i-2]
  //
  //     result push(a + b)
  //   }
  //
  //   return result[n]
  // }
  // Linear O(n)

function momoize(fn) {
    const cache = {}
    return function(...args) {
      if (chache[args]) {
        return cache[args]
      }

      const result = fn.apply(this, args)
      cache[args] = result

      return result
    }
}

const fib = momoize(slowFib)

let arr = [1, 2, 10, 25]
function getSum(array){
  total = 0
  for(let num of arr){
    total += num
  }
  return total
}
getSum(arr)


module.exports = fib;
