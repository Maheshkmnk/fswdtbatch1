import React, {useState} from 'react'
import axios from 'axios';

function Input() {
    const[data, setData] = useState([]);
    const[location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=paste your secrete key here`


 const searchLocation = (event) =>{
    if(event.key === "Enter"){
        axios.get(url).then((response) =>{
            setData(response.data)
            console.log("this data",response.data)
        })
        setLocation('')
    }
}


return (

// Input fields to update events into website
    <div class="bg-info ">
        <h1>Weather App</h1>
        <div class="container text-center mb-4">
            <input class="form-control" type="text" value={location} onChange={(event)=>setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="location" aria-label="default input example"></input>
        </div>

        <div class="row text-center w-75 mx-auto justify-content-center" >
            <div class="col-sm-6 mb-3" >
                <div class="card" >
                    <div class="card-body" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg")`, backgroundRepeat: 'no-repeat', height: '30vh'}}>
                        <h1>{data.name}</h1>
                        <p>{data.weather ? <h1>{data.weather[0].main}</h1>:null}</p>
                        <a type='number' class="width: 350px btn btn-primary">{data.main ? <h1>{data.main.temp.toFixed()} °F</h1>:null}</a>
                    </div>
                    
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Input
