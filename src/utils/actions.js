// actions for signup
const NameChange=(val)=>{return {type:"Name",payload:val}}
const PasswordChange=(val)=>{return {type:"Password",payload:val}}
const RollNoChange=(val)=>{return {type:"RollNo",payload:val}}


const LoginNameChange=(val)=>{return {type:"rollno",payload:val}}
const LoginPasswordChange=(val)=>{return {type:"Password",payload:val}}


export {
    NameChange,
    RollNoChange,
    PasswordChange,
    LoginPasswordChange,
    LoginNameChange
}