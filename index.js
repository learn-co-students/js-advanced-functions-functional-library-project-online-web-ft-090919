const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, fn) {
      const newColl = Array.isArray(coll) ? coll : Object.values(coll)
      for (let i = 0; i < newColl.length; i++) {
        fn(newColl[i])
      }
      return coll
    },

    map: function(coll, fn) {
      const newColl = Array.isArray(coll) ? coll : Object.values(coll)
      const mappedColl = []
      for (let i = 0; i < newColl.length; i++) {
        mappedColl.push(fn(newColl[i], newColl.indexOf(newColl[i]), newColl))
      }
      return mappedColl
    },

    reduce: function(coll, fn, acc) {
			if (!acc) {
				acc = coll[0]
				coll = coll.slice(1)
			}
      for (let i = 0; i < coll.length; i++) {
        acc = fn(acc, coll[i], coll)
      }
      return acc
    },

    find: function(coll, pre) {
      const newColl = Array.isArray(coll) ? coll : Object.values(coll)
      for (let i = 0; i < newColl.length; i++) {
        if (pre(newColl[i])) return newColl[i]
      }
      return undefined
    },

    filter: function(coll, pre) {
      const newColl = Array.isArray(coll) ? coll : Object.values(coll)
      const filtered = []
      for (let i = 0; i < newColl.length; i++) {
        if (pre(newColl[i])) filtered.push(newColl[i])
      }
      return filtered
    },

    size: function(coll) {
      return Array.isArray(coll) ? coll.length : Object.values(coll).length
    },

    first: function(arr, n) {
      return !n ? arr[0] : arr.slice(0, n)
    },

    last: function(arr, n) {
      return !!n ? arr.slice(arr.length-n, arr.length) : arr[arr.length-1]
    },

    compact: function(arr) {
      const compacted = []
      for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) compacted.push(arr[i])
      }
      return compacted
    },

    sortBy: function(arr, fn) {
      const newArr = [...arr]
      return newArr.sort((a, b) => fn(a) - fn(b))
    },

    uniq: function(coll, sorted=false, fn=false) {
      if (!!sorted) {
        return fi.uniqSorted(coll, fn)
      } else if (!fn) {
        return Array.from(new Set(coll))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of coll) {
          const moddedVal = fn(val)
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
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const vals = []
      for (let key in obj) {
        vals.push(obj[key])
      }
      return vals
    },

    functions: function(obj) {
      const fns = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          fns.push(key)
        }
      }
      return fns
    },

  }
})()

fi.libraryMethod()
