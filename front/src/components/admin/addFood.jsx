import React, { useState } from "react";
import Axios from "axios"
import validate from "../../function/validation";
import "../../style/addFood.css"

function AddFood(){
    const [state,setState]  = useState({
        name:"",
        price:"",
        description:"",
        type:"",
        image:null
    })
    const [error,setError] = useState({
        name:"",
        type:"",
        price:"",
        description:"",
        image:""
    })
    const handleChange = (e) => {
        if(e.target.name === "image"){
            setState(prev=>({
                ...prev,
                [e.target.name]:e.target.files[0]
            }))
        }else{
            setState(prev=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }
    }
    const handleReset = () => {
        setState({
            name:"",
            price:"",
            description:"",
            type:"",
            image:null
        })
        setError({
            name:"",
            price:"",
            description:"",
            type:"",
            image:null
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const error = validate(state)
        setError(error)
        if(Object.values(error).every(value => value === "")){
            const sendData = async()=>{
                const postData = {
                    name:state.name.trim(),
                    type:state.type,
                    price:Number(state.price),
                    description:state.description.trim(),
                    image:state.image
                }
                await Axios.post("http://localhost:3001/food/add",postData, {
                headers : {
                    'Content-Type': 'multipart/form-data' 
                }
                })
                .then(res => {
                    console.log("Success")
                })
                .catch(error => {
                    console.error("Error")
                })
            }
            sendData()
            handleReset()
        }

    }
    return(
        <div className="addFood-container">
            <h1 className="addFood-heading">Add Food</h1>
            <form className="addFood-form" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="addFood-input-div">
                    <label className="addFood-input-label" htmlFor="name">Name</label>
                    <input className="addFood-input-field" type="text" name="name" value={state.name} placeholder="Enter Food's Name" onChange={handleChange}/>
                    {error.name && <span className="addFood-input-error">{error.name}</span>}
                </div>
                <div className="addFood-input-div">
                    <label className="addFood-input-label" htmlFor="type">Type</label>
                    <select className="addFood-input-field" name="type" value={state.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    <option value="food">Food</option>
                    <option value="juice">Juice</option>
                    <option value="ice-cream">Ice Cream</option>
                    </select>
                    {error.type && <span className="addFood-input-error">{error.type}</span>}
                </div>
                <div className="addFood-input-div">
                    <label className="addFood-input-label" htmlFor="price">Price</label>
                    <input className="addFood-input-field" type="text" name="price" value={state.price} placeholder="Enter Food's Price" onChange={handleChange}/>
                    {error.price && <span className="addFood-input-error">{error.price}</span>}
                </div>
                <div className="addFood-input-div">
                    <label className="addFood-input-label" htmlFor="description">Description</label>
                    <input className="addFood-input-field" type="text" name="description" value={state.description} placeholder="Enter Food's Description" onChange={handleChange}/>
                    {error.description && <span className="addFood-input-error">{error.description}</span>}
                </div>
                <div className="addFood-input-div">
                    <label className="addFood-input-label" htmlFor="image">Image</label>
                    <input key={state.image ? "file" : "reset"} className="addFood-input-field" type="file" name="image" placeholder="Enter Food's Description" onChange={handleChange}/>
                    {error.image && <span className="addFood-input-error">{error.image}</span>}
                </div>
                <div className="addFood-form-btn">
                    <input className="addFood-form-btn-submit" type="submit" value="Submit"/>
                    <input className="addFood-form-btn-clear" type="reset" value="Clear"/>
                </div>
            </form>
        </div>
    )
}

export default AddFood