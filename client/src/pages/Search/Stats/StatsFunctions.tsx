
export const convertData = (val: any) => {
  if (typeof val === 'string') {
    return val
  }
  else if (val % 1 === 0) {
    return val.toLocaleString()
  } else {
    return val.toFixed(2).toString()
  }
}