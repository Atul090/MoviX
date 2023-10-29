import axios from "axios"

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjcyOGNkY2Q1YzQ2MDMyMDdlN2RjNzdhYmI5MjU3MCIsInN1YiI6IjY1M2Q3MzlkYmMyY2IzMDBjOTdlNmY5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6l_sRKIygDABVNiK3TS1ZNBf8P9P72uBAj1R6Ec0kr8";

const headers={
    Authorization: "bearer "+ TMDB_TOKEN,
};
export const fetchDataFromApi=async(url,prams)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{ headers, prams});
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
};
