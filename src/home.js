import React,{useState,useEffect} from 'react'
import axios from 'axios'
const all =require('./store/store');
function movieBody(props){
    return(
        <div className="movie" style={{display:'flex',flexDirection:'column',padding:'10px',width:'20vw'}}>
            <img className="movieImg" alt="img"></img>
            <div className="movieBody" style={{display:'flex',flexDirection:'row'}}>
                <p className="movieName">{props.moviename+" "} </p>
                <p className="movieYear">{props.year}</p>
            </div>
        </div>
    )
}
function listContainer(props){
    
    return(
        <div id="list" style={{display:'flex',flexDirection:'column'}}>
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
    
const[latest_and_trending_home,setlatest_and_trending_home]=useState([])
const[action_home,setaction_home]=useState([])
const[kids_home,setkids_home]=useState([])
const[thriller_home,setthriller_home]=useState([])
const[crime_home,setcrime_home]=useState([])
const[comedy_home,setcomedy_home]=useState([])
const[romantic_home,setromantic_home]=useState([])
const listjson=[{"listTitle":"Latest and trending","listobject":latest_and_trending_home},
{"listTitle":"Action","listobject":action_home},
{"listTitle":"Kids","listobject":kids_home},
{"listTitle":"Thriller","listobject":thriller_home},
{"listTitle":"Crime","listobject":crime_home},
{"listTitle":"Comedy","listobject":comedy_home},
{"listTitle":"Romantic","listobject":romantic_home}]

console.log("Before UseEffect")
useEffect(()=>{
    const notFetched=[{ moviename: "Fetching", year: "Fetching"},
    { moviename: "Fetching", year: "Fetching"},
    { moviename: "Fetching", year: "Fetching"},
    { moviename: "Fetching", year: "Fetching"},
    { moviename: "Fetching", year: "Fetching"}]
  
    axios.get(`http://localhost:9000/latest`)
    .then(resp => {
        setlatest_and_trending_home(resp.data)
        console.log(resp.data)
    })
    .catch(function (error) {
        setlatest_and_trending_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/action`)
    .then(resp => {
        setaction_home(resp.data)
    })
    .catch(function (error) {
        setaction_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/kids`)
    .then(resp => {
        setkids_home(resp.data)
    })
    .catch(function (error) {
    setkids_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/thriller`)
    .then(resp => {
        setthriller_home(resp.data)
    })
    .catch(function (error) {
        setthriller_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/crime`)
    .then(resp => {
        setcrime_home(resp.data)
    })
    .catch(function (error) {
        setcrime_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/comedy`)
    .then(resp => {
        setcomedy_home(resp.data)
    })
    .catch(function (error) {
        setcomedy_home(notFetched)
    console.log(error);
    });

    axios.get(`http://localhost:9000/romantic`)
    .then(resp => {
        setromantic_home(resp.data)
    })
    .catch(function (error) {
        setromantic_home(notFetched)
    console.log(error);
    });
},[])
    return (
        <div id="homeContainer">
            {   
                    listjson.map((props)=>listContainer(props))  
            }
        </div>
    )
}
