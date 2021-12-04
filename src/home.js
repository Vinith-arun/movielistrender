import React,{useState,useEffect} from 'react'
import {  fetchMovieList } from './controllers/apis';
// const all =require('./store/store');
function movieBody(props){
    return(
        <div key={props.id} className="movie" style={{display:'flex',flexDirection:'column',padding:'10px',width:'15vw',alignItems:"center"}}>
            <img className="movieImg" alt="img" src={props.img} style={{width:"15vw",height:"auto"}}></img>
            <div className="movieBody" style={{display:'flex',flexDirection:'row'}}>
                <p className="movieName">{props.moviename+" "} </p>
                <p className="movieYear">{props.year}</p>
            </div>
        </div>
    )
}
function listContainer(props){
    return(
        <div id="list" key={props.id} style={{display:'flex',flexDirection:'column'}}>
            <div className="title_and_button" style={{display:'flex',flexDirection:'row'}}>
                <h3 className="listTitle">{props.listTitle}</h3>
                <button className="moreButton" style={{float:'right'}}>More</button>
            </div>

            <div className="listBody" style={{display:'flex',flexDirection:'row',width:'100vw'}}>
            {
                props.listobject.map((p)=>movieBody(p))
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
const listjson=[
{"listTitle":"Latest and trending","listobject":latest_and_trending_home,"id":1},
{"listTitle":"Action","listobject":action_home,"id":2},
{"listTitle":"Kids","listobject":kids_home,"id":3},
{"listTitle":"Thriller","listobject":thriller_home,"id":4},
{"listTitle":"Crime","listobject":crime_home,"id":5},
{"listTitle":"Comedy","listobject":comedy_home,"id":6},
{"listTitle":"Romantic","listobject":romantic_home,"id":7}]
useEffect(()=>{
    fetchMovieList('latest')
    .then(resp =>setlatest_and_trending_home(resp.data))
    .catch(e=>console.log(e));
    fetchMovieList('action')
    .then(resp => {setaction_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('crime')
    .then(resp => {setkids_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('crime')
    .then(resp => {setcrime_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('thriller')
    .then(resp => {setthriller_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('comedy')
    .then(resp => {setcomedy_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('romantic')
    .then(resp => {setromantic_home(resp.data)})
    .catch(e=>{console.log(e)});   
},[])
    return (
        <div id="homeContainer">
            {   
                    listjson.map((props)=>listContainer(props))  
            }
        </div>
    )
}
