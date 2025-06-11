// export const url = 'http://localhost:5000/api'
export const url = 'https://growthfunnelx.onrender.com/api'

export const start = async() => await fetch(`${url}/start`,{
       method:'get'
})