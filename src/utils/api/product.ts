export function formatProductValues(values: any) {
  const data: any = {}

  Object.keys(values).forEach((key) => {
    if (key === 'modifiers') {
      data[key] = values[key]?.map((mod: number, index: number) => ({
        modifiers_group: mod,
        sort_order: index
      }))
    } else {
      data[key] = values[key]
    }
  })

  return data
}
