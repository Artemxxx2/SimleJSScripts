
let arr = ['a', 1, 2, false, 'b']
function objproperies(arr) {
    obj = {
        number: [],
        string: [],
        boolean: []
     }
     for (let i = 0; i < arr.length; i++) {
        type = typeof(arr[i]);
          switch (type) {
              case 'string':
              obj.string.push(arr[i])
              break;
              case 'number':
                  obj.number.push(arr[i])
              break;
              case 'boolean':
                  obj.boolean.push(arr[i])
              break;
          }
      }
      return obj;
}
let c = objproperies(arr);
console.log(c);