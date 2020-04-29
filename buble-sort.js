// на каждоий итерации внешнего цикла, во внутреннем цикле проходимся по массиву и сравниваем
// Знаяения внутренней итерации и +1 к анутренней итерации и переставляем их местами

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}


bubbleSort([2,6,1,7,4,9]);
