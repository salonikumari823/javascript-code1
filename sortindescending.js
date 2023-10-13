function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
             
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const numbers = [5, 2, 8, 1, 4];
const sortedDescending = bubbleSort(numbers);

console.log(sortedDescending);