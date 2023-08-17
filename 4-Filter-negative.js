function negatives(n1, n2, n3, n4, n5) {
    let numbers = [n1,n2,n3,n4,n5]
    return numbers.filter(number => number <0)
    
}
console.log(negatives(-10, -5, -7, 7, -8, -125))