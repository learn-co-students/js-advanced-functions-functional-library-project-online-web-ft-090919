const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(dataSet, item) {
        const newDataSet = (dataSet instanceof Array) ? dataSet.slice(): Object.values(dataSet)
          for (let i = 0; i < newDataSet.length; i++)
          item(newDataSet[i])
          return dataSet
    },

    map: function(dataSet, item) {
          if(!(dataSet instanceof Array))
          dataSet = Object.values(dataSet)
          const newArray = []
          for (let i = 0; i < dataSet.length; i++)
            newArray.push(item(dataSet[i]))

            return newArray
    },

    reduce: function(d = [], cb =()=>{}, tot) {
            let dataSet = d.slice(0)
            if (!tot){
              tot = dataSet[0]
              dataSet = dataSet.slice(1)
            }
        let length = dataSet.length

        for (let i = 0; i < length; i++) {
          tot = cb(tot, dataSet[i], dataSet)
        }
              return tot
    },

    find: function(collection, predicate) {
        if (!(collection instanceof Array))
        collection = Object.values(collection)

        for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]

        return undefined
    },


    filter: function(collection, predicate){
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      const newArray =[]

      for (let i = 0; i < collection.length; i++)
      if (predicate(collection[i])) newArray.push(collection[i])

      return newArray
    },

    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },


    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },


    last: function(collection, stop=false) {
      return (stop) ? collection.slice(collection.length-stop, collection.length) : collection[collection.length-1]

    },
    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {

      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {

      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values


    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
