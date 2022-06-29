function setLocalStorage(key, item) {
    return localStorage.setItem(key, JSON.stringify(item));
}

function getLocalStorage(key) {
    if (localStorage.getItem('user') === null) return null;

    return JSON.parse(localStorage.getItem(key));

}




function removeLocalStorage(key) {
    return localStorage.removeItem(key);
}

export {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
}