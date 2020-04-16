import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Card(){

    const[photoData, setPhotoData] = useState([]);

    useEffect(() => {

        axios.get("https://api.nasa.gov/planetary/apod?api_key=JKYh95lJWPbZWQyqX1eCi3Dspe0qMvDSwfeoefCT")
        .then(res => {
            console.log(res.data);
            setPhotoData(res.data);        

        })
        .catch(error =>{
            console.log(error);
            
        })

    }, []);

    return (
        <div>
            <div className="polaroid">
                <img src = {photoData.url} className = "space-img"/>
            
                <div className="container">
                    <p>{photoData.title}</p>
                    <h4>{photoData.date}</h4>
                </div>                  
            </div>

            <div>
                
                <div className="story-title">
                    <h1>The Story Behing the Photo</h1>
                </div>
                
                <div className="story-text">
                    <p>{photoData.explanation}</p>
                </div>
            
            </div>

        </div>       

    )

}

export default Card;