export let getLocalStorage = key => {
    let data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    };
    return {};
};

export let setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}