import { useState,useEffect } from 'react';
import axios from 'axios';

export function fetchMovieList(listname) {
var data=[]
    axios.get(`http://localhost:9000/${listname}`)
    .then(resp => {
        console.log(resp.data)
        data=resp.data
    })
    .catch(function (error) {
    console.log(error);
    });
    return(data);
}

export default function Api() {
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
    return ( listjson )
    }
