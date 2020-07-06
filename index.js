const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newColl = (collection.isArray) ? collection.slice() : Object.values(collection)
    
      for (let el of newColl) {
        callback(el)
      }
        return collection
    },

    map: function(collection, callback) {
      let newColl = (collection.isArray) ? collection.slice() : Object.values(collection)
      let updatedColl = [] 

      for (let el of newColl) {
        updatedColl.push(callback(el))
      }
      return updatedColl 
    },

    reduce: function(collection, callback, acc) {
      let i = 0

      if (!acc) {
        acc = collection[0]
        i = 1 
      }

      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i])
      }

      return acc 
    },

    find: function(collection, predicate) {
      for (let el of collection) {
        if (predicate(el))
        return el 
      }
    },

    filter: function(collection, predicate) {
      let newColl = []

      for (let el of collection) {
        if (predicate(el))
         newColl.push(el)
      }
      return newColl 
    },

    size: function(collection) {
      let newColl = (collection.isArray) ? collection.slice() : Object.keys(collection)
    
      return newColl.length
    },

    first: function(array, n) {
      if (!n) {
       return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (!n) {
        return array[(array.length - 1)]
       } else {
         return array.slice(-n)
       }
    },

    compact: function(array) {
      let newArr = []

      for (let el of array) {
        if (el)
        newArr.push(el)
      }

      return newArr 
    },

    sortBy: function(array, callback) {
      let newArr = [...array] 

        newArr.sort(function(a, b) {return callback(a) - callback(b)})

        return newArr 
    },


    flatten: function(array, shallow) {
      let newArray = [];
  
      if (!shallow) {
        array.forEach(el => {
          if (Array.isArray(el)) {
            newArray.push(...(this.flatten(el)));
          } else {
            newArray.push(el);
          }
        });
      } else {
        for (let el of array) {
          let index = array.indexOf(el);
  
          if (Array.isArray(el)) {
            let temp = array.slice(index, index + 1)[0];
            for (let el of temp) {
              newArray.push(el);
            }
          } else {
            newArray.push(el)
          }
        }
      }
      return newArray;
    },
   
 
    uniq: function(array, isSorted, callback) {
      let set = new Set()
      let newSet = new Set()

      if (callback) {
        for (let el of array) {
          let newEl = callback(el)
          if (!newSet.has(newEl)) {
            newSet.add(newEl)
            set.add(el)
          }
        }
      } else {
        for (let el of array) {
          set.add(el)
        }
      }
      return Array.from(set)
    },

    keys: function(object) {
      let array = Object.keys(object)
      return array
    },

    values: function(object) {
      let array = Object.values(object)
      return array
    },


    functions: function(object) {
      let keys = Object.keys(object)
      let keysArr = []

      for (let el of keys) {
        if (typeof(object[el]) === "function" )
        keysArr.push(el)
      }
      return keysArr.sort()
    },


  }
})()

fi.libraryMethod()





