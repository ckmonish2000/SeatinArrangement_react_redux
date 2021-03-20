import axios from "axios"

var url=process.env.NODE_ENV==="development"?"http://localhost:5000":"";

const createStudent=async()=>{
    try{
        var  data=await axios({
            method:"post",
            url:`${url}/NewStudent`,
            data:{
                roll:"19sje902",
                pass:"123",
                name:"shadow moon"
            }
            
        })
        return data?.data;
    }catch(err){
        return err
    }
}



export {createStudent}