import React,{useState,useEffect} from 'react'
import { movieBodyRenderFunction } from './home'
import { fetchMovieList,fetchMovieDetail } from './controllers/apis'
import './Home.css'
import {useParams} from 'react-router-dom'
// export function Search(e){
//     // let {name}=useParams();
//     console.log(e.target);
//     return(<h1>Search</h1>)
// }
function cast(props){
    if(props.movieCast)
    return(
    <div className='cast-detail'>
        {/* <p>Director:{movie.movieCast.Director}</p>
        <p>Actors:{movie.movieCast.Actors}</p> */}
          <div className="block">
            <p className="small-header">Actors</p>
            <p>{props.movieCast.Actors}</p>
          </div>
          <div className="block">
            <p className="small-header">Producer</p>
            <p>{props.movieCast.Producers}</p>
          </div>
          <div className="block">
            <p className="small-header">Director</p>
            <p>{props.movieCast.Director}</p>
          </div>
          <div className="block">
            <p className="small-header">Writer</p>
            <p>{props.movieCast.Writer}</p>
        </div> 
    </div>)
}
export function Movie(){
    let path=useParams();
    let movieID=path.movie;
    const[movie,setMovie]=useState([{}]);
    useEffect(()=>{
    fetchMovieDetail(movieID)
    .then(res=>{setMovie(res.data);})
    .catch(e=>{console.log(e)})
    },[movieID])
    return(
        <div className="movie-basic">
        <div className="poster">
          <img alt="movie" src={movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h1>{movie.MovieName}</h1>
            <span className="year">{movie.Year}</span>
            <span className="duration">{movie.Duration}utes</span> 
            <div className="genre">{movie.Genre}</div>
          </div>
          <div className="movie-amt">
            <button className='buyRent'>Rent  {movie.RentAmt}</button>
            <button className='buyRent'>Buy  {movie.BuyAmt}</button>
          </div>
        </div>
        {cast(movie)}
      </div>
        )
}
export default function Movies() {
let path= useParams();
let genre=path.genre;
const[list,setList]=useState([])
useEffect(()=>{
    fetchMovieList(genre)
    .then(resp =>setList(resp.data))
    .catch(e=>console.log(e));
},[genre])
    return (
        <div>
            <h1 className="listtitle">{`${genre[0].toUpperCase()+genre.slice(1,genre.length)} Movies`}</h1>
            <div className="listBody">
            {
                list.map((obj)=>{return(movieBodyRenderFunction (obj))})
            }
            </div>
        </div>
    )
}
