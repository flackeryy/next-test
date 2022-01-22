export function getError(errors: any, name: string) {
  return errors[name]?.message || ''
}
