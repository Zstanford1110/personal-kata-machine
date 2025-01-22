export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;


  while(lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const currentValue = haystack[mid];

    if(currentValue === needle)
      return true;

    if(currentValue < needle)
      lo = mid + 1; // Inclusive of lo, don't check the mid value twice

    if(currentValue > needle)
      hi = mid; // Exclusive of hi
  }

  return false;
}