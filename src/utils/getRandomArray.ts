export const getRandomArray = (arr: string[]) => {
  if (arr.length <= 1) {
    return arr
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr.slice(0, 2)
}
