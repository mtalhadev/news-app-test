const key = "c7e6f80a23444d8699b5ec440b6d0cfa"
const BASE_URL = "https://newsapi.org/v2"

export const getNews = async(q)=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    const response = await fetch(`${BASE_URL}/everything?q=${q}&apiKey=${key}`, requestOptions)
    return response.text()
}

export const getBrekingNews = async(q,language,category)=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    const response = await fetch(`${BASE_URL}/top-headlines?category=sports&country=us&apiKey=${key}`, requestOptions)
    return response.text()
}