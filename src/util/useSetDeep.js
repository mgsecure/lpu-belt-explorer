export function setDeep(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = value
        return
    }
    const key = path[0]
    if (!obj[key]) {
        obj[key] = {}
    }
    setDeep(obj[key], path.slice(1), value)
}

export function setDeepAdd(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = obj[path[0]] ? obj[path[0]] + value : value
        return
    }
    const key = path[0]
    if (!obj[key]) {
        obj[key] = {}
    }
    setDeepAdd(obj[key], path.slice(1), value)
}

export function setDeepMax(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = obj[path[0]] > value ? obj[path[0]] : value
        return
    }
    const key = path[0]
    if (!obj[key]) {
        obj[key] = {}
    }
    setDeepMax(obj[key], path.slice(1), value)
}

export function setDeepPush(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = obj[path[0]] ? [...obj[path[0]], value] : [value]
        return
    }
    const key = path[0]
    if (!obj[key]) {
        obj[key] = {}
    }
    setDeepAdd(obj[key], path.slice(1), value)
}

export function setDeepUnique(obj, path, value) {
    if (path.length === 1) {
        obj[path[0]] = obj[path[0]]
            ? [...new Set([...obj[path[0]], value])]
            : [value]
        return
    }
    const key = path[0]
    if (!obj[key]) {
        obj[key] = {}
    }
    setDeepUnique(obj[key], path.slice(1), value)
}
