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




const TeacherSignup=(state={TeacherId:"",TeacherName:"",Teacherpassword:""},action)=>{
    switch (action.type) {
        case "TNames":
            return {...state,TeacherName:action.payload} 
        case "TPassword":
            return {...state,Teacherpassword:action.payload} 
        case "TID":
            return {...state,TeacherId:action.payload} 
    
        default:
            return state;
    }
}


const LoginTeacher=(state={LoginTID:"",LoginPass:""},action)=>{
    switch (action.type) {
        case "LoginTID":
            return {...state,LoginTID:action.payload}
        case "Tpass":
            return {...state,LoginPass:action.payload}
    
        default:
            return state
    }
}


const OpenNewModal=(state=false,action)=>{
    switch (action.type) {
        case "open":return true;
        case "close":return false;
        default: return state;
    }
}

export {SignupReducer,LoginRedcerStudents,TeacherSignup,LoginTeacher,OpenNewModal}