const apiKey = process.env.NEXT_PUBLIC_APIKEY
// import { useDispatch } from "react-redux";
// import { getMovie } from "@/app/store/sliceMovies";

// const fetchApi = async (inputMovie, setMovieArray) => {
  const fetchApi = async (inputMovie) => {
  try {
    // const dispatch = useDispatch();

    const response = await fetch(`http://www.omdbapi.com/?t=${inputMovie}&apikey=${apiKey}`, {
      cache: 'no-store'})
      const res = await response.json()
      console.log('res Api', res)
      // return setMovieArray(res.Year) 
      // dispatch(getMovie(res.Title)) 
      return res
    } catch (err){   
      // throw new Error('movie not found')
     console.log('I am in error', err)
  }
}

export default fetchApi




// const apiKey = process.env.APIKEY

// const fetchApi = async (inputMovie, setMovieArray) => {
//     const response = await fetch(`http://www.omdbapi.com/?t=${inputMovie}&apikey=${apiKey}`, {
//       cache: 'no-store'})
//       if (!response.ok) {        
//         throw new Error('movie not found')
//       }
//       const res = await response.json()
//     setMovieArray(res.Year)     
// }







// export default function fetchApi (inputCity, setCitiesArray){
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`)
//       .then(response => response.json())
//       .then((res) => {        
//         if(res.main !== undefined){ 
//           const elem = {
//             name: res.name,
//             min: Math.round(res.main.temp_min),
//             max: Math.round(res.main.temp_max),
//             img: res.weather[0].icon,
//             id: res.id,
//             wind: res.wind.speed,
//             temp: res.main.temp,
//             humidity: res.main.humidity,
//             weather: res.weather[0].icon,
//             description: res.weather[0].description,
//             clouds: res.clouds.all,
//             latitud: res.coord.lat,
//             longitud: res.coord.lon,  
//             country: res.sys.country        
//           }
//           console.log(res)
//           setCitiesArray(oldCities => [elem, ...oldCities]);         
//         } else {
//           alert("Ciudad no encontrada");
//         }
//       }
//     )
// }




