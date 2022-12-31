const addItem = food =>{
    return {
        type : "ADD_ITEM" ,
        payload : food
    }
}

const removeItem = food =>{
    return {
        type : "REMOVE_ITEM" ,
        payload : food
    }
}

const increase = food =>{
    return {
        type : "INCREASE" ,
        payload : food
    }
}

const decrease = food =>{
    return {
        type : "DECREASE" ,
        payload : food
    }
}

const cheackout= () =>{
    return {
        type : "CHEACKOUT"
    }
}

const clear= () =>{
    return {
        type : "CLEAR"
    }
}

export {addItem , removeItem , increase , decrease , cheackout , clear} ;