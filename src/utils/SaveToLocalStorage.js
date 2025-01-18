





function saveToLocalStorage(key, value) {
    let previousItems = getFromLocalStorage(key) || [];
    let toRead = getFromLocalStorage('toRead') || [];
    let wishList = getFromLocalStorage('wishList') || [];
    let savedList = toRead.concat(wishList)

    if (savedList.includes(value)) {
        return true
    } else {
        previousItems.push(value)
        localStorage.setItem(key, JSON.stringify(previousItems))
    }
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
function removeAllSelected(key){
    localStorage.removeItem(key)
}
function createCustomArray(array){
        let list = []
        for (let i of array) {
            let data = {}
            data.name = i.book_name
            data.page = i.number_of_pages
            list.push(data)
        }
        return list
}
export { saveToLocalStorage , getFromLocalStorage , removeAllSelected , createCustomArray , }; 