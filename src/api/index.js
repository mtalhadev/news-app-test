const key = "de10f7f2a5374339a2a33c8e2de144b1"
const BASE_URL = "https://newsapi.org/v2"




export const getNews = async({q="",language = "en",signal})=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    if(signal){
        requestOptions.signal = signal
    }

    const response = await fetch(`${BASE_URL}/everything?language=${language}&q=${q?q:"a"}&apiKey=${key}`, requestOptions)
    return response.text()
}




export const getBrekingNews = async({language="ar",category = ""})=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    const response = await fetch(`${BASE_URL}/top-headlines?language=${language}&category=${category.toLowerCase()}&apiKey=${key}`, requestOptions)
    return response.text()
}