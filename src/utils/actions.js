// actions for signup
const SignupNameChange=(val)=>{return {type:"Name",payload:val}}
const SignupPasswordChange=(val)=>{return {type:"Password",payload:val}}
const SignupRollNoChange=(val)=>{return {type:"RollNo",payload:val}}





export {
    SignupNameChange,
    SignupRollNoChange,
    SignupPasswordChange
}