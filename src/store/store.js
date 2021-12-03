import { useState,useEffect } from 'react';
import { fetchMovieList } from '../controllers/apis';

var latest_and_trending_home=fetchMovieList("latest");
var action_home=fetchMovieList("action");
var kids_home=fetchMovieList("kids");
var thriller_home=fetchMovieList("thriller");
var crime_home=fetchMovieList("crime");
var comedy_home=fetchMovieList("comedy");
var romantic_home=fetchMovieList("romantic");
var latest_and_trending=[{}];
var action=[{}];
var kids=[{}];
var thriller=[{}];
var crime=[{}];
var comedy=[{}];
var romantic=[{}];
// return(latest_and_trending_home,
//         action_home,
//         kids_home,
//         thriller_home,
//         crime_home,
//         comedy_home,
//         romantic_home,
//         latest_and_trending,
//         action,
//         kids,
//         thriller,
//         crime,
//         comedy,
//         romantic
// )

export {latest_and_trending_home,action_home,kids_home,thriller_home,crime_home,comedy_home,romantic_home};