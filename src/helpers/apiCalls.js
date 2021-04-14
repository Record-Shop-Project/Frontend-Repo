import axios from 'axios';
const serverUrl = `http://localhost:5000`;
//axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`; // set our API server url

axios.defaults.withCredentials = true;


export const fetchRecords = async () => {
  const res = await axios.get(`${serverUrl}/records`);
  return res;
};

export const loginUser = async ( data ) => {
  
  const res = await axios.post(`${serverUrl}/users/login`, data);
  return res;
};

export const signUpUser = async (data) => {
  const res = await axios.post(`${serverUrl}/users`, data);
  return res;
};

export const updateUser = async (data, id) => {
  const res = await axios.put(`${serverUrl}/users/${id}`, data);
  return res;
};

export const authenticateUser = async (next) => {
  try {
    const response = await axios.post(`${serverUrl}/me/auth`);
    console.log("auth res.data", response.data);
    return response.data;
  }
  catch(err) {
   next(err)
  }
}

export const logOutUser = async () => {
  try {
    console.log("Logging out at backend...")
      const response = await axios.post(`${serverUrl}/users/logout`);
      console.log("Result: ", response.data)
      return response.data;
  } catch(err){
    return err
  }
};

export const addOrder = async (orderData) => {
  try {
    const order = await axios.post(`${serverUrl}/cart`, orderData);
    return order
  } catch(err) {
    return err
  }
}