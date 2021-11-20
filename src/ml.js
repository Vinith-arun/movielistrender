import React,{useState} from 'react';
import axios from 'axios';

[data,setData]=useState([]);
export default function ml(props) {


    axios.get('http://localhost:9000/'+props.name)
    .then(resp => {
        setData(resp.data);
        console.log(resp.data);
        setCount(count+1);console.log(count);
    })
    .catch(function (error) {
      console.log(error);
    });

function movieDetail(prop){
    console.log(prop.target.id);
}
    return (
        <div>
            <h3>{props.name}</h3>
            <div id="list">
                {data.map(()=>{
                    <div id={data.id} onClick={movieDetail}>
                        <img src={data.img} alt="img"></img>
                        <p>{data.name}</p> <span>{data.price}</span>
                    </div>
                })}
            </div>
        </div>
    )
}


