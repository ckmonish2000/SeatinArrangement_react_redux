// actions for signup
const NameChange=(val)=>{return {type:"Name",payload:val}}
const PasswordChange=(val)=>{return {type:"Password",payload:val}}
const RollNoChange=(val)=>{return {type:"RollNo",payload:val}}


const LoginNameChange=(val)=>{return {type:"rollno",payload:val}}
const LoginPasswordChange=(val)=>{return {type:"Password",payload:val}}



// acions for teachers
const TeacherNameChange=(val)=>{return {type:"TNames",payload:val}}
const TeacherPasswordChange=(val)=>{return {type:"TPassword",payload:val}}
const TeacherIdChange=(val)=>{return {type:"TID",payload:val}}



const LoginTeacherId=(val)=>{return {type:"LoginTID",payload:val}}
const LoginTeacherPassword=(val)=>{return {type:"Tpass",payload:val}}


const NewModal=()=>{return {type:"open"}}
const CloseNewModal=()=>{return {type:"close"}}


const ModalSName=(val)=>{return {type:"ModalName",payload:val}}
const ModalSRollno=(val)=>{return {type:"ModalRollNo",payload:val}}
const ModalSExam=(val)=>{return {type:"ModalExam",payload:val}}
const ModalSFloor=(val)=>{return {type:"ModalFloor",payload:val}}
const ModalSClass=(val)=>{return {type:"ModalClass",payload:val}}


const SearchVal=(val)=>{return {type:"Search",payload:val}}
const resultVal=(val)=>{return {type:"SearchResult",payload:val}}

const Contactnumber=(val)=>{return {type:"ContactNumber",payload:val}}
const ContactEmail=(val)=>{return {type:"ContactEmail",payload:val}}

export {
    NameChange,
    RollNoChange,
    PasswordChange,
    LoginPasswordChange,
    LoginNameChange,
   TeacherPasswordChange,
   TeacherNameChange,
   TeacherIdChange,
   LoginTeacherId,
   LoginTeacherPassword,
   NewModal,
   CloseNewModal,
   ModalSClass,
   ModalSRollno,
   ModalSName,
   ModalSFloor,
   ModalSExam,
   SearchVal,
   resultVal,
   Contactnumber,
   ContactEmail
}