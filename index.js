const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, func) {
      for (const i in arr){
        func(arr[i])
      }
      return arr
    },

    map: function(arr, callback) {
      let newArr = []
      for (const i in arr){
        newArr.push(callback(arr[i]))
      }
      return newArr
    },

    reduce: function(arr, func, accum = 0) {
      let total = accum
      for (const i in arr){
        total = func(total, arr[i], arr)
      }
      return total
    },

    find: function(col, callback){
      for (const i in col){
        if (i )
        if (callback(col[i])){ return col[i]}
      }
      return undefined
    },

    filter: function(col, callback){
      let newCol = []
      for (const i in col){
        if (callback(col[i])){
          newCol.push(col[i])
        }
      }
      return newCol
    },

    size: function(col, callback){
      return Array.isArray(col) ? col.length : Object.keys(col).length
    },

    first: function(col, n){
      if (!!n){
        return Array.isArray(col) ? col.slice(0,n) : Object.values(col).splice(0,n)
      }else{
        return Array.isArray(col) ? col[0] : Object.values(col)[0]
      }
    },

    last: function(col, n){
      if (!!n){
        return Array.isArray(col) ? col.slice(-n) : Object.values(col).slice(-n)
      }else {
        return Array.isArray(col) ? col.slice(-1)[0] : Object.values(col).slice(-1)
      }
    },

    compact: function(col){
      let newCol = []
      for (const i in col){
        if (!!col[i])
          newCol.push(col[i])
      }
      return newCol
    },

    sortBy: function(col, callback){
      let newCol = [...col]
      return newCol.sort( (a,b) => callback(a) - callback(b))
    },

    unNest: function(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.unNest(val, d - 1) : val), [])
                : arr.slice();},

    flatten: function(col, firstLevelOnly, newArr = []){
      if (firstLevelOnly){
        newArr = fi.unNest(col, 1)
      }else {
        newArr = fi.unNest(col, Infinity)
      }
      return newArr
    },

    uniq: function(col, isSorted = false, callback){
      if (isSorted) {
        return Array.from(new Set(col)).sort()
      } else if (!callback) {
        return Array.from(new Set(col))
      } else {
        const newVals = new Set()
        const uniqVals = new Set()
        for (let val of col) {
          const moddedVal = callback(val)
          if (!newVals.has(moddedVal)) {
            newVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys:function(obj){
      return Object.keys(obj)
    },

    values:function(obj){
      return Object.values(obj)
    },

    functions: function(obj) {
      let funcArr = []
      for (const i in obj){
        if (typeof obj[i] === 'function'){
          funcArr.push(obj[i])
        }
      }
      return funcArr.sort()
    },


  }
})()

fi.libraryMethod()
