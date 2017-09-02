array = [2, 5, 6, 9]
let arraycomplete = []
let arrayofmissing = []
for(let i = Math.min.apply(null,array);i<=Math.max.apply(null,array);i++){
arraycomplete.push(i)
if(array.filter(event=>event==i).length==0){
arrayofmissing.push(i)

}

}
console.log(arraycomplete)
console.log(arrayofmissing.length)

