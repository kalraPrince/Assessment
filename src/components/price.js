import Data from "./Data"
import NavBar from "./NavBar";
import {useEffect,useState} from "react"


function Price() {
    <NavBar></NavBar>
    const[sorData,setSortData]=useState(Data)
   useEffect(() => {
     const temp=[...sorData].sort((a,b)=>a.price-b.price)
   
      setSortData(temp)
   
   },[])
    return(<div>
        {
            Data.map((product)=>(
    
                <div class="col-4 mt-5">
                  <div class="card " className="card-ex">
                    <div class="card-body">
                    <img class="card-img-top" src={product.img} alt="Card image cap"></img>
                      <h5 class="card-title">{product.name}</h5>
                      <p class="card-text">{product.author}</p>
                      <p class="card-text">{product.rating}</p>
                      <a href={product.link} class="btn btn-primary">Click to Buy</a>
                    </div>
                    <div>
                      
                      </div>
                  </div>
                </div>
                 ))
        }
    </div>)
}
export default Price;