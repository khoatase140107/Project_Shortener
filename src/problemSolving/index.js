export function adjacentElementsProduct(inputArray) {
    let maxNumber = 0;
    let stringNumber = "";
    let index = 0;
    while(index < (inputArray.length - 1)){
        const calcNumber = inputArray[index] * inputArray[index+1]
        
        if(calcNumber > maxNumber){
            stringNumber = `${inputArray[index]} * ${inputArray[index + 1]}`
            maxNumber = calcNumber;
        }
        index++;
    }
    console.log(stringNumber + " = " + maxNumber)
}


export function alternatingSums(a) {
    let columnOne = null;
    let columnTwo = null;
    let arrraySumWeight = []
    a.map((item,index) =>{
        if(index % 2 === 0){
            columnOne += item;
        }else{
            columnTwo += item;
        }
    })
    arrraySumWeight.push({"teamA": columnOne,"teamB": columnTwo})
    console.log(arrraySumWeight);
}
