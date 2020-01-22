numberArray = [0, 2, 20, 4, 13, -2, 9, 1];

insertionSort(numberArray);

function insertionSort(anArray) {;
    for (let i = 1; i <= anArray.length; i++) {
        let insertVal = anArray[i];
        let insertPos = i;
    
        while (insertPos != 0 && anArray[insertPos - 1] > insertVal) {
            anArray[insertPos] = anArray[insertPos - 1];
            anArray[insertPos - 1] = insertVal;
            insertPos -= 1;
        }
        console.log(anArray);
    }
}