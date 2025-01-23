export const getData = (key)=>{
    return JSON.parse(localStorage.getItem(key) || "[]")

}

export const setData = (key,value) =>{
    localStorage.setItem(key , value || [])
    return value

}