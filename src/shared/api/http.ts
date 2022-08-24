import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

http.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      api_key: 'a5cac86205012a316a1cf82ca3fab9e3',
      language: 'en-US'
    }
  }
})

// http.interceptors.response.use(response => response, (error) => {
//   const token: string | undefined | null = localStorage.getItem('tmdb-token')
//   if (error && error.response) {
//     const {response: {status}} = error
//     if (status === 401) {
//       axios.post('/authentication/session/new', {
//         request_token: token
//       })
//     }
//   }
// })