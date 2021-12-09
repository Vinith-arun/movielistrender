// import { useState,useEffect } from 'react';
import { fetchMovieList } from '../controllers/apis';
console.log("store executed");
let latest_and_trending_home=[{}]
let action_home=[{}]
let kids_home=[{}]
let thriller_home=[{}]
let crime_home=[{}]
let comedy_home=[{}]
let romantic_home=[{}]
fetchMovieList('latest&limit=5')
.then((res)=>{latest_and_trending_home=res.data;})
.catch(e=>{console.log(e)})
fetchMovieList('action&limit=5')
.then((res)=>{action_home=res.data;})
.catch(e=>{console.log(e)})
fetchMovieList('crime&limit=5')
.then(resp => {crime_home=resp.data})
.catch(e=>{console.log(e)});
fetchMovieList('kids&limit=5')
.then(resp => {kids_home=resp.data})
.catch(e=>{console.log(e)});
fetchMovieList('thriller&limit=5')
.then(resp => {thriller_home=resp.data})
.catch(e=>{console.log(e)});
fetchMovieList('comedy&limit=5')
.then(resp => {comedy_home=resp.data})
.catch(e=>{console.log(e)});
fetchMovieList('romantic&limit=5')
.then(resp => {romantic_home=resp.data})
.catch(e=>{console.log(e)});

// function Searchm(id){
// const[list,setLIst]=useState([])
// latest_and_trending_home=list;
// console.log("from search fn",latest_and_trending_home)
// useEffect(()=>{
//     fetchMovieList(id)
//     .then((res)=>{
//         setLIst(res.data);
//     })
//     .catch((e)=>{
//         console.log(e);})
// },[id])
// // return (list)
// }
// function s(){ 
// Searchm('latest');
// }
// s();
export {
    latest_and_trending_home,
    action_home,
    kids_home,
    thriller_home,
    crime_home,
    comedy_home,
    romantic_home
};