// Алгоритм похож на bubble sort но вместо того чтобы сначала плмещать большие значения
// в отсортированную позицию, он помещает маленькие значения в отсортированную позицию

// На каждой итерации ищем минимальный элемент и в конце итерации минимальный
// элемент поменяется в начало массива

const swap = (arr, idx1, idx2) => (arr[idx1], arr[idx2] = arr[idx2], arr[idx1]);
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j;
            }
        }
        if (i !== low) swap(arr, i, low);
    }

    return arr;
}
