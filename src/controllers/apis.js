// import { useState,useEffect } from 'react';
import axios from 'axios';
export async function fetchMovieList(listname) {
    return await axios.get(`http://localhost:9000/movie/findByGenre?genre=${listname}`)
}

