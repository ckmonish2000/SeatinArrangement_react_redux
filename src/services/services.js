import axios from "axios"

var url=process.env.NODE_ENV==="development"?"http://localhost:5000":"";

const createStudent=async(name,roll,pass)=>{
    try{
        var  data=await axios({
            method:"post",
            url:`${url}/NewStudent`,
            data:{
                roll:roll,
                pass:pass,
                name:name
            }
            
        })
        return data?.data;
    }catch(err){
        return err
    }
}



const loginStudent=async (rollno,password)=>{
    try{
        var val= await axios({
            method:"post",
            url:`${url}/studentLogin`,
            data:{
                username:rollno,
                password:password
            }
        })
        return val?.data

    }catch(err){
        console.log(err);
    }

}


const CreateNewTeacher=async(id,password,name)=>{
    try{
        var val=await axios({
            method:"post",
            url:`${url}/NewTeacher`,
            data:{
                roll:id,
                name:name,
                pass:password
            }
        })
        return val?.data
    }catch(err){
        return err
    }

}


const TeacherLoginService=async(TID="",password="")=>{
   try{
    var val=await axios({
        method:"post",
        url:`${url}/teacherLogin`,
        data:{
            username:TID,
            password:password
        }
    })
    return val?.data
   }catch(err){
       return err
   }
}


const NewSeating=async(name,roll,classR,floor,exam)=>{
    var token=localStorage.getItem("TeacherToken")
    try{
        var val=await axios({
            method:"post",
            url:`${url}/newSeating?token=${token}`,
            data:{
                StudentName:name,
                RollNo:roll,
                classRoom:classR,
                floor:floor,
                exam:exam
            }
        })

        return val?.data;
    }catch(err){

        return err
    }

}

const getAllSeating=async()=>{
    var token=localStorage.getItem("TeacherToken")
    try{
        var val=await axios.get(`${url}/getAllSeating?token=${token}`)

        return val?.data;
    }catch(err){

        return err
    }
}


const DeleteSeating=async(rollno)=>{
    var token=localStorage.getItem("TeacherToken")
    try{
        var val=await axios({
            method:"post",
            url:`${url}/deleteSeat?token=${token}`,
            data:{
                RollNo:rollno
            }
        })

        return val?.data;
    }catch(err){

        return err
    }

}


const getSeating=async(rollno,exam)=>{

   

    var token=localStorage.getItem("StudentTOKEN")
    try{
        var val=await axios.get(`${url}/getStudentSeating?token=${token}&RollNo=${rollno}&exam=${exam}`)

        return JSON.parse(val.data?.data);
    }catch(err){

        return err
    }
}


export {createStudent,loginStudent,CreateNewTeacher,TeacherLoginService,NewSeating,getAllSeating,DeleteSeating,getSeating}