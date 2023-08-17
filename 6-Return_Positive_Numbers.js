function positive(num1,num2,num3){
    let positive = [num1, num2, num3].filter
(saldo=> saldo>0)
 console.log(positive)

if (num1 >0 && num2 >0 && num3 <0 || num2>0 && num3>0 && num1<0|| num1>0 && num3>0 && num2<0) {
    console.log("apenas dois numeros sao positivos")
}
else if (num1 <0 && num2 <0 && num3 >0 || num2<0 && 
    num3<0 && num1>0|| num1>0 && num3>0 &&num2>0) {
     console.log("apenas 1 numero e positivo")
    }
 else{
        console.log("todos os numeros sao positivos")
    }
}
positive(10, -15, 20)
