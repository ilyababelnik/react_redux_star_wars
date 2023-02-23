export let getApiResource = async (url) => {
    try {
        let res = await fetch(url);

        if (!res.ok) {
            console.error(`Cound't fetch: ${res.status}`);
            return false;
        }

        return await res.json();
       
    }
    catch(e) {
        console.error(`Cound't fetch: ${e.message}`);
        return false;
    };
};

export let makeConcurrentRequest = async (url) => {
    let res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));
    return res;
};