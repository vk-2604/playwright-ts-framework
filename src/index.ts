function getEvenNumbers(arr:number[]):number[]{
    return arr.filter(num=>num%2==0)
}

const result=getEvenNumbers([1,2,3,4,5,6]);
console.log(result)