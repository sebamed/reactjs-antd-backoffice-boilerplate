export const doOnFilter = (value, secondValue) => {
    return secondValue.includes(value)
}

export const doSort = (a, b) => {
    return (a > b) - (a < b);
}