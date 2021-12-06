import React,{useState,useEffect} from 'react'
import {  fetchMovieList } from './controllers/apis';
import './Home.css';
// import Movies from './Movies';


export function movieBodyRenderFunction(props){
    return(
        <div key={props.id} className="movie">
            <img className="movieImg" alt="img" src={props.Poster} ></img>
            <div className="movieBody" >
                <div className="movieName">{props.MovieName+" "} </div>
                <div className="movieYear">{props.Year}</div>
            </div>
        </div>
    )
}
export  function listRenderFunction(props){
    return(
        <div className="list" key={props.id} id={props.id} >
            <div className="title_and_button" >
                <h3 className="listTitle">{props.listTitle}</h3>
                <a href={`/movies/${props.listRoute}` }className='title_and_button'><button >More</button></a>
            </div>
            <div className="listBody" >
            {
                props.listobject.map((p)=>movieBodyRenderFunction(p))
            } 
            </div>
        </div>
)
}
export default  function Home() {   
const fetching={ moviename: "Fetching", year: "Fetching",id:'1'}
const notFetched=[fetching,fetching,fetching,fetching,fetching]
const[latest_and_trending_home,setlatest_and_trending_home]=useState([notFetched])
const[action_home,setaction_home]=useState([notFetched])
const[kids_home,setkids_home]=useState([notFetched])
const[thriller_home,setthriller_home]=useState([notFetched])
const[crime_home,setcrime_home]=useState([notFetched])
const[comedy_home,setcomedy_home]=useState([notFetched])
const[romantic_home,setromantic_home]=useState([notFetched])
const listOfMovies=[
{"listTitle":"Latest and trending","listRoute":"latest","listobject":latest_and_trending_home,"id":1},
{"listTitle":"Action","listRoute":"action","listobject":action_home,"id":2},
{"listTitle":"Kids","listRoute":"kids","listobject":kids_home,"id":3},
{"listTitle":"Thriller","listRoute":"thriller","listobject":thriller_home,"id":4},
{"listTitle":"Crime","listRoute":"crime","listobject":crime_home,"id":5},
{"listTitle":"Comedy","listRoute":"comedy","listobject":comedy_home,"id":6},
{"listTitle":"Romantic","listRoute":"romantic","listobject":romantic_home,"id":7}]
useEffect(()=>{
    fetchMovieList('latest&limit=5')
    .then(resp =>setlatest_and_trending_home(resp.data))
    .catch(e=>console.log(e));
    fetchMovieList('action&limit=5')
    .then(resp => {setaction_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('crime&limit=5')
    .then(resp => {setcrime_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('kids&limit=5')
    .then(resp => {setkids_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('thriller&limit=5')
    .then(resp => {setthriller_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('comedy&limit=5')
    .then(resp => {setcomedy_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('romantic&limit=5')
    .then(resp => {setromantic_home(resp.data)})
    .catch(e=>{console.log(e)});   
},[])
    return (
        <div id="homeContainer">
            {   
                listOfMovies.map((props)=>listRenderFunction(props))  
            }
        </div>
    )
}
