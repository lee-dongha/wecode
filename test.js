function selectNum(x) {
    let result = []
    for (let i in x) {
      if (x[i] / 2 === 0) {
        result.push(Number(i))
        return result;
      }
    }
}

console.log(selectNum(10))