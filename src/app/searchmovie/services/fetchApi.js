const apiKey = process.env.NEXT_PUBLIC_APIKEY

export const fetchApi = async (inputMovie) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${apiKey}`, {
      cache: 'no-store'})
      const res = await response.json()
      console.log('res Api', res)
      return res
    } catch (err){ 
      throw new Error('movie not found')
  }
}

export const fetchApiDetail = async (id) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`, {
      cache: 'no-store'})
      const res = await response.json()
      console.log('res Api detail', res)
      return res
    } catch (err){ 
      throw new Error('movie not found')
  }
}








