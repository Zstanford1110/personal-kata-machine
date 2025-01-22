export default function bubble_sort(arr: number[]): void {
    // The i value represents full iterations of the unsorted portion of the array (the bubbling part)
    // The j portion is performing the swaps of the value we are trying to bubble up
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
