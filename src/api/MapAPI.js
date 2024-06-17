import axios from "axios";

export const MapApi = axios.create({
    baseURL: "http://127.0.0.1:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});


export const addressInfomation = async (jsondata) => {
    const data = jsondata;
    console.log(data)
    const response = await MapApi.post(`/api/map/findcenter`, data);
    console.log(response.data);
    return response.data;
}