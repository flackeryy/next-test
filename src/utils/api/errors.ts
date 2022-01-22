export function getErrorMsg(error: any) {
  return error?.response?.data?.errors?.[0]
    ? error?.response?.data?.errors?.[0][
        Object.keys(error?.response?.data?.errors?.[0])[0]
      ]?.[0]
    : 'Oops error'
}
