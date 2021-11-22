import React from 'react';
import axios from 'axios';
import './ml.css';
  

function Mlf(props) {
    const [isFetched, setFetched]= React.useState(false);
    const [data, setData] = React.useState([{}]);
    function fetchMovieList(fetched){
        console.log('clicked')
        if(fetched){
            axios.get(`http://localhost:9000/${props.name}`)
            .then(resp => {
                setData(resp.data);
                setFetched(true);
                console.log('data fetched= ');
                console.log(data);

            })
            .catch(function (error) {
            console.log(error);
            });
        }   
    }
    fetchMovieList(!isFetched)
    console.log(isFetched+' after completing the function');
    function movieDetail(p){
        console.log(p.target.id);
    }
    return (
        <div>
            <h3 >{props.listname}</h3>
            <div id="list" >
                {data.map(ele=>(
                    <div className="seperate" key={ele.id} id={ele.id} onClick={movieDetail}>
                        {/* <img src={data.img} alt="img"></img> */}
                        <p style={{color: "#333"}}>{ele.name}</p> 
                        <span className={("span ")+(ele.bought&&"bought ")+(ele.rent&&(" rent"))}>
                            {((!ele.bought&&!ele.rent)&&("Rs."+ele.price))||(ele.bought&&"Bought")||(ele.rent&&("Days left:"+ele.daysLeft))}
                        </span>
                    </div>)
                )}
                <div id="more">More..</div>
            </div>
        </div>
    )   
}
console.log("after return");
export default Mlf;
