import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import {  fetchMovieList } from './controllers/apis';
import './Home.css';
import { latest_and_trending_home,
    action_home,
    crime_home,
    thriller_home,
    comedy_home,
    kids_home,
romantic_home
 } from './store/store';
// import Movies from './Movies';


export function movieBodyRenderFunction(props){
    return(<Link to={`/movies/movie/${props.MovieId}`}>
        <div key={props.MovieId} className="movie">
            <img className="movieImg" alt="img" src={props.Poster} ></img>
            <div className="movieBody" >
                <div className="movieName">{props.MovieName+" "} </div>
                <div className="movieYear">{props.Year}</div>
            </div>
        </div></Link>

    )
}
export  function listRenderFunction(props){
    return(
        <div className="list" key={props.id} id={props.id} >
            <div className="title_and_button" key={`title_and_button${props.id}`}>
                <h3 className="listTitle">{props.listTitle}</h3>
                <a href={`/movies/${props.listRoute}`}className='a'>
                <button className="button" >More</button></a>
            </div>
            <div className="listBody" key="listBody">
            {
                props.listobject.map((p)=>movieBodyRenderFunction(p))
            } 
            </div>
        </div>
)
}
export default  function Home() {   
// console.log("latest_and_trending_home",action_home);
const fetching={ moviename: "Fetching", year: "Fetching",id:'1'}
const notFetched=[fetching,fetching,fetching,fetching,fetching]
const[latest_and_trending,setlatest_and_trending_home]=useState([notFetched])
// const[action_home,setaction_home]=useState([notFetched])
// const[kids_home,setkids_home]=useState([notFetched])
// const[thriller_home,setthriller_home]=useState([notFetched])
// const[crime_home,setcrime_home]=useState([notFetched])
// const[comedy_home,setcomedy_home]=useState([notFetched])
// const[romantic_home,setromantic_home]=useState([notFetched])
const listOfMovies=[
{"listTitle":"Latest and trending","listRoute":"latest","listobject":latest_and_trending_home,"id":"list1"},
{"listTitle":"Action","listRoute":"action","listobject":action_home,"id":"list2"},
{"listTitle":"Kids","listRoute":"kids","listobject":kids_home,"id":"list3"},
{"listTitle":"Thriller","listRoute":"thriller","listobject":thriller_home,"id":"list4"},
{"listTitle":"Crime","listRoute":"crime","listobject":crime_home,"id":"list5"},
{"listTitle":"Comedy","listRoute":"comedy","listobject":comedy_home,"id":"list6"},
{"listTitle":"Romantic","listRoute":"romantic","listobject":romantic_home,"id":"list7"}]
useEffect(()=>{
    fetchMovieList('latest&limit=5')
    .then(resp =>setlatest_and_trending_home(resp.data))
    .catch(e=>console.log(e));
//     fetchMovieList('action&limit=5')
//     .then(resp => {setaction_home(resp.data);})
//     .catch(e=>{console.log(e)});
//     fetchMovieList('crime&limit=5')
//     .then(resp => {setcrime_home(resp.data)})
//     .catch(e=>{console.log(e)});
//     fetchMovieList('kids&limit=5')
//     .then(resp => {setkids_home(resp.data)})
//     .catch(e=>{console.log(e)});
//     fetchMovieList('thriller&limit=5')
//     .then(resp => {setthriller_home(resp.data)})
//     .catch(e=>{console.log(e)});
//     fetchMovieList('comedy&limit=5')
//     .then(resp => {setcomedy_home(resp.data)})
//     .catch(e=>{console.log(e)});
//     fetchMovieList('romantic&limit=5')
//     .then(resp => {setromantic_home(resp.data)})
//     .catch(e=>{console.log(e)});   
},[])
    return (
        <div id="homeContainer">
            {/* <input placeholder="search" id='search' key='searchField'></input>
            <a href='/movies/search/' key='searchLink'>
            <button key='searchButton'>s</button></a> */}
            {   
                listOfMovies.map((props)=>listRenderFunction(props))  
            }
        </div>
    )
}
