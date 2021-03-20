const SignupReducer=(state={name:"",password:"",rollno:""},action)=>{
    switch (action.type) {
        case "Name": return {...state,name:action.payload};
        case "Password":return {...state,password:action.payload};
        case "RollNo":return {...state,rollno:action.payload}
        default:return state;
    }
}


export {SignupReducer}