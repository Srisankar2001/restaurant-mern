import React, { useEffect, useState } from "react";
import Axios from "axios"
import "../../style/userHome.css"

function UserHome(){
    const [data,setData] = useState([])
    const [order,setOrder] = useState([])
    useEffect(()=>{
        const fetchData = async() => {
            try{
                await Axios.get("http://localhost:3001/food")
                .then(res=>{
                    if(res.data.status){
                        console.log(res.data)
                        setData(res.data.data)
                    }
                })
                .catch(err=>{
                    console.error(err)
                })
            }catch(error){
                console.error(error)
            }
        }
        fetchData()
    },[])
    const renderData = () => {
        if(data.length === 0){
            return (
                <h1 className="user-home-empty">No items to order</h1>
            )
        }else{
                return data.map((item,index) => {
                return(
                    <div key={index} className="user-home-food-div">
                    <h1 className="user-home-food-heading">{item.name}</h1>
                    <img className="user-home-food-image" src={`http://localhost:3001/images/${item.image}`} height="300px" width="300px"/>
                    <h4 className="user-home-food-price">{Number(item.price).toFixed(2)} LKR</h4>
                    <p className="user-home-food-description">{item.description}</p>
                    <div className="user-home-food-btn">
                        
                    </div>
                    </div>
                )
            })
        }
    }
    return(
        <div className="user-home-container">
            <h1 className="user-home-heading">User Home Page</h1>
            {renderData()}
        </div>
    )
}

export default UserHome