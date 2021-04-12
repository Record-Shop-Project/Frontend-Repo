import axios from "axios";
const serverUrl = `http://localhost:8080`;

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

    return recordData.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (data, id) => {
  try {
    const updatedUser = await axios.patch(`${serverUrl}/users/${id}`, data );
    return updatedUser.data;
  } catch (err) {
    console.log(err);
  }
};
