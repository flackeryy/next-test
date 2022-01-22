export function areasToObj(areas: any[]) {
  return areas.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.id]: cur.name
    }),
    {}
  )
}
