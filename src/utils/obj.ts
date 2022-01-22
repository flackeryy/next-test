export function reorder(arr: any[], from: number, to: number) {
  const result = Array.from(arr)
  const [removed] = result.splice(from, 1)
  result.splice(to, 0, removed)

  return result
}

export function addOrder(arr: any[]) {
  return arr.map((item, index) => ({
    ...item,
    sort_order: index
  }))
}
