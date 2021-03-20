const Reducer=(state=0,action)=>{
    switch(action.type){
    case "Increment": return state+action.payload;
    case "Dec":return state-5
    default: return state
    }
}



export {Reducer}