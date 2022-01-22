import deepCopy from '../deepCopy'

export function formatValues(values: any) {
  return {
    ...values
  }
}

export function formatOptions(groupId: number, options: any[]) {
  return options.map((option, index) => {
    const { apiId, ...copy } = option
    return {
      ...copy,
      ...(apiId && { id: apiId }),
      price: Number(copy.price),
      group: copy.group || groupId,
      sort_order: index
    }
  })
}

export function formatOptionsText(options: any[]) {
  try {
    return options.length
      ? options.map((option) => option.name).join(', ')
      : '-'
  } catch (e) {
    console.error(e)
    return '-'
  }
}

export function parseOptions(options: any[]) {
  const copy = deepCopy(options)
  return copy.map((row: any) => ({
    ...row,
    apiId: row.id
  }))
}
