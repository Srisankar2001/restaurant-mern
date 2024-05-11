function validate(state){
    let error = {
        name:"",
        price:"",
        description:"",
        image:""
    }

    if(state.name.trim() === ""){
        error.name = "Name field is empty"
    }else{
        error.name = ""
    }

    if(state.type === ""){
        error.type = "Type field is empty"
    }else{
        error.type = ""
    }

    if(state.price.trim() === ""){
        error.price = "Price field is empty"
    }else if(!(/^\d*\.?\d{1,2}$/.test(state.price.trim()))){
        error.price = "Invalid price"
    }else{
        error.price = ""
    }

    if(state.description.trim() === ""){
        error.description = "Description field is empty"
    }else{
        error.description = ""
    }

    if(!state.image){
        error.image = "Image field is empty"
    }else{
        error.image = ""
    }

    return error
}

export default validate