import axios from "axios";
const serverUrl = `http://localhost:8080`;
axios.defaults.withCredentials = true;

//axios.defaults.baseURL = `http://localhost:8080`; // set our API server url

export const addLoginData = async (data) => {
  try {
    const logIndata = await axios.post(`${serverUrl}/login`, data);
    return logIndata;
  } catch (err) {
    return err.response.data;
  }
};

export const addSignupData = async (data) => {
  const config = {
    Headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const signupdata = await axios.post(`${serverUrl}/users`, data);
    return signupdata.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getRecordData = async () => {
  try {
    const recordData = await axios.get(`${serverUrl}/records`);
    console.log("recorddata:", recordData);

    return recordData.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (data, id) => {
  try {
    const updatedUser = await axios.put(`${serverUrl}/users/${id}`, data);
    console.log("updatedUser:", updatedUser);
    return updatedUser.data;
  } catch (err) {
    console.log(err);
  }
};
