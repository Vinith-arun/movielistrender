import React,{useState,useEffect} from 'react'
import { movieBodyRenderFunction } from './home'
import { fetchMovieList } from './controllers/apis'
import './Home.css'
export default function Movies(props) {
const fetching={ moviename: "Fetching", year: "Fetching",id:'1'}
const notFetched=[fetching,fetching,fetching,fetching,fetching]
const [list,setList]=useState([notFetched])
useEffect(()=>{
    fetchMovieList(props.listRoute)
    .then(resp =>{setList(resp.data);console.log(resp.data)})
    .catch(e=>console.log(e));
},[props.listRoute])
var fullList={"listTitle":props.listTitle,"listObject":list}
    return (
        <div>
            <h1>{fullList.listTitle}</h1>
            <div className="listBody">
            {fullList.listObject.map((obj)=>{
                return(movieBodyRenderFunction (obj))
            })}
            </div>
        </div>
    )
}
