export function useHook() {
    console.log("it's hook")
}
export function processHighlightText(src = '', hl = '') {
    var pos = src.indexOf(hl)
    var first = src.substr(0, pos)
    var last = src.substr(pos + hl.length)

    return {
        first,
        middle: hl,
        last
    }
}