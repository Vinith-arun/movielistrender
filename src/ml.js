import React,{useEffect} from 'react';
import axios from 'axios';
import './ml.css';
  

function Mlf(props) {
    const [data, setData] = React.useState([{}]);
    function fetchMovieList(){
        console.log('clicked')
        axios.get(`http://localhost:9000/${props.name}`)
        .then(resp => {
            setData(resp.data);
            console.log('dat dat dat')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    function movieDetail(p){
        console.log(p.target.id);
    }
    return (
        <div>
            <h3 onClick={fetchMovieList}>{props.listname}</h3>
            <div id="list" >
                {data.map(ele=>(
                    <div className="seperate" key={ele.id} id={ele.id} onClick={movieDetail}>
                        {/* <img src={data.img} alt="img"></img> */}
                        <p >{ele.name}</p> <span>Rs.{ele.price}</span>
                    </div>)
                )}
                <div id="more">More..</div>
            </div>
        </div>
    )   
}
console.log("after return");
export default Mlf;
