// program to split array into smaller chunks


var array=[]

let a=prompt('enter the array size')

for(i=0;i<a;i++){
    array[i]=prompt(`Enter the ${i+1}`)

}

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const chunk = prompt('enter the needed chunks');
splitIntoChunk(array, chunk);