function calcAverage (array){
    const length = array.length;

    const totalSum = array.reduce((accumulator, item)=> accumulator + item,0);
    
    const average = totalSum / length;

    return average;

}

calcAverage([1,2,3,4,5,6]);