const API_URL = process.env.REACT_APP_API_URL;

export const getAllData = (successCallback) => {
    fetch (`${API_URL}/all-data`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        successCallback(data);
    })
    .catch(err => console.log(err))
}