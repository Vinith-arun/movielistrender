import React,{useState,useEffect} from 'react'
import { movieBodyRenderFunction } from './home'
import { fetchMovieList } from './controllers/apis'
import './Home.css'
import {useParams} from 'react-router-dom'
export function Search(){
    let {name}=useParams();
    console.log(name);
 
    return(<h1>{name}</h1>)
}
export default function Movies() {
let path= useParams();
console.log(path)
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
                list.map((obj)=>{return(movieBodyRenderFunction (obj))
            })}
            </div>
        </div>
    )
}
