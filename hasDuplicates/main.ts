export function containsDuplicates(arr : Array<i64>) : bool {
  var map = new Map<i64,i64>()
  for (let y: i32 = 0; y < arr.length; y++){
    if(map.has(arr[y])){
      return true;
    } else {
      map.set(arr[y], 1)
    }
  }
  return false;
}


