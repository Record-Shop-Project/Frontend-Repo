import axios from 'axios';
const serverUrl = `http://localhost:8080`;

export const addLoginData = async (data) => {

    try{

        const logIndata = await axios.post(`${serverUrl}/login`,data);
        console.log(logIndata);
        return logIndata;
    } catch(err){
        console.log("error:",err.response.data);
        return err.response.data
    }
  };

  export const addSignupData = async (data) => {
      console.log(`I am creating singnupdata`);

      const config = {
          Headers:{
              "Content-type":"application/json"
          }
      }

    try{

        const signupdata = await axios.post(`${serverUrl}/users`,data);
        console.log("signupdata", signupdata);
        return  signupdata;
    } catch(err){
        console.log("error:",err.response.data);
        return err.response.data
    }
  };

  export const getRecordData = async () => {

    try{

        const recordData = await axios.get(`${serverUrl}/records`);
 
        return  recordData.data;
    } catch(err){
        console.log(err);
        
    }
  };

 