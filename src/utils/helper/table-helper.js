export const doOnFilter = (value, secondValue) => {
    return secondValue.includes(value)
}

export const doSort = (a, b) => {
    return (a > b) - (a < b);
}

export const doSearch = (query, record, columns = []) => {
    for (const column of columns) {
        if (column.searchable) {
            const split = column.dataIndex.split('.').reverse();

            let retVal = record;

            while (split.length > 0) {
                const prop = split.pop();
                retVal = retVal[prop];
            }

            if (retVal.toString().toLowerCase().includes(query)) {
                return true;
            } else {
                continue;
            }
        }
    }

    return false;
}