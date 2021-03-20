import axios from "axios"

var url=process.env.NODE_ENV==="development"?"http://localhost:5000":"";

const createStudent=async(name,roll,pass)=>{
    try{
        console.log(name,roll,pass);
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



export {createStudent}