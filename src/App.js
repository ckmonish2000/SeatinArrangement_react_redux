
import React from "react"
import {Incr,Dcr} from "./utils/actions"
import {useSelector,useDispatch} from "react-redux"
import {Switch,Route} from "react-router-dom"
import TeacherLogin from "./TeacherLogin/TeacherLogin";
import Studentogin from "./Studentlogin/Studentogin";
import TeacherSignup from "./TeachersSignup/TeachersSignup"
import StudentsSignup from "./StudentsSignup/StudentsSignup"
import Home from "./Home/Home";

function App() {
 
  return (
   <main>
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/TeacherSignup" component={TeacherSignup} exact/>
       <Route path="/StudentsSignup" component={StudentsSignup} exact/>
       <Route path="/TeacherLogin" component={TeacherLogin} exact/>
       <Route path="/StudentLogin" component={Studentogin} exact/>
     </Switch>
   </main>
  );
}

export default App;
