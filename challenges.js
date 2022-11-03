const encondString = (input) =>  {
    let result = '';
    let count = 1;
    for(let i = 0; i < input.length; i++){    
        let nextIndex = i + 1;
        while(input[i] === input[nextIndex]){
            count++;
            
            if(count === 9){
                nextIndex++;
                break;
            } else{
                nextIndex++;
            }
        }

        result = result.concat(`${count}${input[i]}`)
        count = 1
        i = nextIndex - 1
    }

    return result;
}

console.log(encondString("AAAAAAAAAAAAABBCCCCDD"))
console.log(encondString("aA"))
console.log(encondString("122333"))


const sortedSquaredArray = (input) => {

    let result = [];
    for(let i = 0; i < input.length; i++){
        result.push(input[i] * input[i])
    }

    return result.sort(function(a, b){return a-b});
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([-2, -1]))
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))