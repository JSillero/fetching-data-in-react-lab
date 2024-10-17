const INDEX_URL = `https://swapi.dev/api/starships/`
export const show = async () => {
    try {
        const res = await fetch(INDEX_URL);
        const data = await res.json();
        console.log(data);

        return data;
    } catch (err) {
        console.log(err);
    }
};

export const search = async (searchString) => {
    try {
        const res = await fetch(INDEX_URL + `?search=${searchString}`);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};