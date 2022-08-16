import React, {useState} from 'react'

function Input() {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[price, setPrice] = useState("");
    const[image, setImage] = useState("");
    const[list, setList] = useState([]);

const submit = (e)=>{
    e.preventDefault();
    // console.log(title, description, price, image)
    const data={title, description, price, image}
    if(title && description && price){
        setList((ls)=>[...ls,data])
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
    }

}

  return (

// Input fields to update events into website
    <div class="bg-info ">
        <h1>Update New Events...</h1>
        <div class="container text-center mb-4">
            <input class="form-control" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Event Name" aria-label="default input example"></input>
        </div>     
        <div class="container text-center mb-4">
            <input class="form-control" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" aria-label="default input example"></input>
        </div> 
        <div class="container text-center mb-4">
            <input class="form-control" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" aria-label="default input example"></input>
        </div> 
        <div class="container text-center mb-4">
            <input class="form-control" type="text" value={image} placeholder="give image URL" onChange={(e)=>setImage(e.target.value)} aria-label="default input example"></input>
        </div> 
        <div class="container text-center mb-4">
            <button type="button" onClick={submit} class="btn btn-dark w-25" >Submit</button>
        </div>

        
        {/* Some static card  */}

        <div class="row text-center w-75 mx-auto justify-content-center" >
            <div class="col-sm-4 mb-4" >
                <div class="card ">
                    <img src="https://i.ibb.co/Z1G6ZjD/94417434-padded-logo.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a type='number' class="btn btn-primary">₹10000</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 mb-4">
                <div class="card">
                    <img src="https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-787-Christopher-Brock-Photography.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Sangeet & Mehendi</h5>
                        <p class="card-text">Sangeet is a chance for relatives and friends of both the bride and the groom to get together,” Sunita continues. 
“They play instruments, dance, sing, and interact with each other.</p>
                        <a type='number' class="btn btn-primary">₹10000</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-5 mb-4">
                <div class="card">
                    <img src="https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-Stage-535_Jay-Seth-Phtgrphy.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">The Reception Feast</h5>
                        <p class="card-text">An Indian wedding menu is often served buffet style, since many items involve a gravy sauce or “Makhani” and would be difficult to serve pre-plated.</p>
                        <a type='number' class="btn btn-primary">₹10000</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-5 mb-4">
                <div class="card">
                    <img src="https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-561.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">The Ceremony Under the Mandap</h5>
                        <p class="card-text">Hindu weddings take place outside under a canopy known as a Mandap, but if the Mandap cannot be placed outdoors, it is built inside. </p>
                        <a type='number' class="btn btn-primary">₹10000</a>
                    </div>
                </div>
            </div>
        </div>

        {/* For Adding CARDS Dynamically */}
        {
            list.map((a)=>
                <div class="row text-center w-100 mx-auto justify-content-center" >
                    <div class="col-sm-6 mb-4 " >
                        <div class="card ">
                            <img src={a.image} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{a.title}</h5>
                                <p class="card-text">{a.description}</p>
                                <a type='number' class="btn btn-primary">₹{a.price}</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
        }


        
    </div>
  )
}

export default Input