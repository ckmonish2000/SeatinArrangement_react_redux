// actions for signup
const NameChange=(val)=>{return {type:"Name",payload:val}}
const PasswordChange=(val)=>{return {type:"Password",payload:val}}
const RollNoChange=(val)=>{return {type:"RollNo",payload:val}}


const LoginNameChange=(val)=>{return {type:"rollno",payload:val}}
const LoginPasswordChange=(val)=>{return {type:"Password",payload:val}}

const TeacherNameChange=(val)=>{return {type:"TNames",payload:val}}
const TeacherPasswordChange=(val)=>{return {type:"TPassword",payload:val}}
const TeacherIdChange=(val)=>{return {type:"TID",payload:val}}



export {
    NameChange,
    RollNoChange,
    PasswordChange,
    LoginPasswordChange,
    LoginNameChange,
   TeacherPasswordChange,
   TeacherNameChange,
   TeacherIdChange
}