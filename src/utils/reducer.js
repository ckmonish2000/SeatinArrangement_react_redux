const SignupReducer=(state={name:"",password:"",rollno:""},action)=>{
    switch (action.type) {
        case "Name": return {...state,name:action.payload};
        case "Password":return {...state,password:action.payload};
        case "RollNo":return {...state,rollno:action.payload}
        default:return state;
    }
}


const LoginRedcerStudents=(state={StudentRollno:"",Studentpassword:""},action)=>{
    switch (action.type) {
        case "rollno":
            return {...state,StudentRollno:action.payload}
        case "Password":
            return {...state,Studentpassword:action.payload}
        default:
            return state;
    }
}


export {SignupReducer,LoginRedcerStudents}