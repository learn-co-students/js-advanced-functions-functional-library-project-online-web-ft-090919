const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.values(collection)
      for (let i = 0; i < array.length; i++ ){
        fn(array[i])
      }
      return collection
    },

    map: function(collection, fn) {
      let array
      const array2 = []
      Array.isArray(collection) ? array = collection : array = Object.values(collection)
      for (let i=0; i< array.length; i++){
        array2.push(fn(array[i]))
      }
      return array2
    },
    // [1, 2, 3, 4]; (acc, val, collection) => (acc + (val * 3)); 10   /13/19/28/40   /3/9/18/30
    reduce: function(collection, fn, acc=0) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.values(collection)
      !!acc ? acc = acc : acc = 0
      for (let i =0; i < array.length; i++){
        acc = fn(acc, array[i], array)
      }
      return acc
    },

    find: function(collection, fn) {
      for (let i = 0; i < collection.length; i++){
        if (fn(collection[i])){
          return collection[i]
          break
        }
      }
    },

    filter: function(collection, fn) {
      const passed = []
      for (let i = 0; i < collection.length; i++){
        if (fn(collection[i])){
          passed.push(collection[i])
        }
      }
      return passed
    },

    size: function(collection) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.keys(collection)
      return array.length

    },

    first: function(array, n=0) {
      return !!n ? array.slice(0, n) : array[n]
    },

    last: function(array, n=0) {
      return !!n ? array.slice(-n) : array.slice(-1)[0]
    },

    compact: function(array) {
      const array2 = []
      for(let i=0; i < array.length; i++){
        !!array[i] ? array2.push(array[i]) : null
      }
      return array2
    },

    sortBy: function(array, fn) {
      let array2 = [...array]
      return array2.sort( (a, b) => fn(a) - fn(b))
    },


    flatten: function(array, shallow) {
      const newArray = []

      function denester(element){
        if(!!shallow === false){
          for (let i = 0; i < element.length; i++){
            Array.isArray(element[i]) ? denester(element[i]) : newArray.push(element[i])
          }
        } else {
          for (const i in element){
            if (Array.isArray(element[i])){
              for(const a in element[i]){
                newArray.push(element[i][a])
              }
            } else {
              newArray.push(element[i])
            }
          }
        }
        return newArray
      }
      return denester(array)
    },

    uniq: function(array, isSorted = false, fn = false) {
      const newArray = []
      // remove all duplicate from the array
      // if isSorted === true run a faster algorythm
      // if fn is applied the end values must be uniq
      if (!!fn){
        for (let i = 0; i < array.length; i++){
          newArray.some((ai)=> fn(ai) === fn(array[i])) ? null : newArray.push(array[i])
        }
      } else {
        for (let i = 0; i < array.length; i++){
          newArray.some((ai)=> ai === array[i]) ? null : newArray.push(array[i])
        }
      }
      console.log(newArray)
      return newArray
    },

    keys: function(object) {
      const array = []
      for (const k in object){
        array.push(k)
      }
      return array
    },

    values: function(object) {
      const array = []
      for (const k in object){
        array.push(object[k])
      }
      return array

    },

    functions: function(object) {
      const array = []
      for (const i in object){
        if (typeof object[i] === 'function'){
          array.push(object[i])
        }
      }
      return array.sort()
    },
  }
})()

fi.libraryMethod()
