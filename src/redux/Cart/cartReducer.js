const initialstate={
    selectItems:[] ,
    itemCounter : 0 ,
    total : 0 ,
    cheackout : false
}

const sumItems = item =>{
   const itemCounter = item.reduce((total , food)=>total + food.quantity , 0);
   const total = item.reduce((total , food)=> total + food.price * food.quantity,0);
   return { itemCounter , total }
}

const cartReducer = (state=initialstate , action) =>{
    switch(action.type){
        case "ADD_ITEM" :
            if(!state.selectItems.find(item=>item.id===action.payload.id)){
                state.selectItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
                return{
                    ...state ,
                    selectItems:[...state.selectItems],
                    ...sumItems(state.selectItems),
                    cheackout:false,
                }
        case "REMOVE_ITEM":  
                 const newSelectItems=state.selectItems.filter(item=>item.id !== action.payload.id);
                 return{
                    ...state,
                    selectItems :[...newSelectItems],
                    ...sumItems(newSelectItems)
                 } 
        case "INCREASE":
               const indexI=state.selectItems.findIndex(item=>item.id === action.payload.id);
               state.selectItems[indexI].quantity++;
               return{
                ...state ,
                ...sumItems(state.selectItems),
               }
        case "DECREASE":
                const indexD=state.selectItems.findIndex(item=>item.id === action.payload.id);
                state.selectItems[indexD].quantity--;
                return{
                 ...state ,
                 ...sumItems(state.selectItems)
                } 
         case "CHEACKOUT" :
            return{
                selectItems:[] ,
                itemCounter : 0 ,
                total : 0 ,
                cheackout : true
            }             
            case "CLEAR" :
                return{
                    selectItems:[] ,
                    itemCounter : 0 ,
                    total : 0 ,
                    cheackout : false
                }  
            default :
                return state;       
            }
    }
export default cartReducer;