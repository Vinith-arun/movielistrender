import React from 'react';
import axios from 'axios';
import './ml.css';
import {Link} from "react-router-dom";
// import * as store from'../store' 
function Mlf(props) {
    const [isFetched, setFetched]= React.useState({fetched:false,listName:props.name});
    const [data, setData] = React.useState([{name:"Fetching.."}]);

       function fetchMovieList(fetched,listname){
        if(fetched){
          axios.get(`http://localhost:9000/${listname}?`)
            .then(resp => {
                setData(resp.data);
                setFetched({fetched:true});
            })
            .catch(function (error) {
            console.log(error);
            });
        }   
    }
    if(!isFetched.fetched){
    fetchMovieList(!isFetched.fetched,isFetched.listName);}
    console.log(isFetched.listName +' after completing the function'+isFetched.fetched);

    // function movieDetail(p){
    //     axios.get(`http://localhost:9000/${props.name}?id=${p.target.id}`)
    //     .then(resp => {
    //         console.log(p.target.id);
    //         document.getElementById("that").innerHTML=<div>Name:{resp.data.name}</div>
    //         console.log(resp.data.name)
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     });
    // }   
    
function m(p){
    return "/"+p.target.name
}
    return (
        <div id="allList">
            <h3 >{props.listname}</h3>
            <div id="list" >
                {data.map(ele=>(
                    <a className="seperate" key={ele.id} id={ele.id} href="http://127.0.0.1:5500/src/allList/allList.html" target="_self">
                        {/* <img src={data.img} alt="img"></img> */}
                        <p style={{color: "#333"}}>{ele.name}</p> 
                        <span className={("span ")+(ele.bought&&"bought ")+(ele.rent&&(" rent"))}>
                            {((!ele.bought&&!ele.rent)&&("Rs."+ele.price))||(ele.bought&&"Bought")||(ele.rent&&("Days left:"+ele.daysLeft))}
                        </span>
                    </a>)
                )}
                <Link id="more" name={props.name} to={m} >More..</Link>
            </div>
        </div>
    )   
}
console.log("after return");
export default Mlf;
