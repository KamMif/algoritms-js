// Смысл в том чтобы разделить массив на 2 часть, поэтому массив должен быть отсортирован
// Нужно взять левую и правую точки, до тех под пока
// левая точна меньше правой создаем точку в середине
// Если это искомое значение возвращаем его
// Если значение меньше, передвигаем левую точку вверх до середины + 1
// Если значеним больше двигаем правую точку вниз до середины -1
// Если значение не найдено  возвращаем -1

// Olog(n) - сложность

function binarySort(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2 );

    while (arr[middle] !== num && start <= end) {

        if (num > arr[middle]) {
            start = middle + 1;
        }

        if (num < arr[middle]) {
            end = middle - 1;
        }

        middle = Math.floor((start + end) / 2 );
    }

    return arr[middle] === num ? middle : -1;
}

console.log(binarySort([11,22,33,44,55,66,77,88,99], 77));

