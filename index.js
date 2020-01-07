const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection.isArray) ? collection.slice() : Object.values(collection);

      for (const element of newCollection) {
        callback(element);
      }

      return collection;
    },

    map: function(collection, callback) {
      let newCollection = (collection.isArray) ? collection.slice() : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i]);
      }

      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let iterator = 0;

      if (!acc) {
        acc = collection[0];
        iterator = 1;
      }

      for (iterator; iterator < collection.length; iterator++) {
        acc = callback(acc, collection[iterator]);
      }

      return acc;
    },

    find: function(collection, predicate) {
      for (const el of collection) {
        if (predicate(el)) {
          return el;
        }
      }

      return undefined;
    },

    filter: function(collection, predicate) {
      const newArr = [];
      for (const el of collection) {
        if (predicate(el)) {
          newArr.push(el);
        }
      }

      return newArr;
    },

    size: function(collection) {
      const newCollection = (collection.isArray) ? collection.slice() : Object.values(collection);

      return newCollection.length;
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      const last = array[array.length - 1];
      if (!n) {
        return last;
      } else {
        return array.splice(-n);
      }
    },

    compact: function(array) {
      const newArr = [];

      for (const el of array) {
        if (!!el === true) {
          newArr.push(el);
        }
      }

      return newArr;
    },

    sortBy: function(array, callback) {
      const newArr = [...array];

      return newArr.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, flag) {
      const newArr = [];

      if (!flag) {
        array.forEach(el => {
          if (Array.isArray(el)) {
            newArr.push(...(this.flatten(el)));
          } else {
            newArr.push(el);
          }
        });
      } else {
        for (const el of array) {
          const index = array.indexOf(el);

          if (Array.isArray(el)) {
            const tempArr = array.slice(index, index + 1)[0];
            for (const el of tempArr) {
              newArr.push(el);
            }
          } else {
            newArr.push(array.slice(index, index + 1)[0]);
          }
        }
      }
      return newArr;
    },

    uniq: function(array, flag, callback) {
      let set1 = new Set();
      let set2 = new Set();

      if (callback) {
        for (const el of array) {
          const newEl = callback(el);
          if (!set2.has(newEl)) {
            set2.add(newEl)
            set1.add(el)
          }
        }
      } else {
        for (const el of array) {
          set1.add(el);
        }
      }

      return Array.from(set1);
    },

    keys: function(obj) {
      const result = [];

      for (const k in obj) {
        result.push(k);
      };

      return result;
    },

    values: function(obj) {
      const result = [];

      for (const k in obj) {
        result.push(obj[k]);
      };

      return result;
    },

    functions: function(obj) {
      const keys = this.keys(obj);
      const result = [];

      for (const k of keys) {
        if (typeof(obj[k]) == "function") {
          result.push(k);
        }
      }

      return result.sort();
    }
  };
})();

fi.libraryMethod()
