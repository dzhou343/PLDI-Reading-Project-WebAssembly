function hasDuplicate(arr){
    var map = new Map()
    arr.array.forEach(element => {
        if (map.has(element)){
            return true;
        } else {
            map.set(element, 1)
        }
    });
    return false;
}