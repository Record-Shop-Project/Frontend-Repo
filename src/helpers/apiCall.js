import axios from "axios";
axios.defaults.baseURL = `http://localhost:8080`; // set our API server url const serverUrl = `http://localhost:8080`;so I don't need to write  const logIndata = await axios.post(`${serverUrl}/login`, data);
axios.defaults.withCredentials = true;

const extractApiError = (errAxios) => {
  return errAxios.response
    ? errAxios.response.data
    : { error: { message: "API not reachable" } };
};

export const logoutUser = async () => {
  try {
    const response = await axios.get("/logout");
    console.log("Result: ", response.data);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const addLoginData = async (data) => {
  try {
    const logIndata = await axios.post(`/login`, data);
    return logIndata;
  } catch (err) {
    return err.response.data;
  }
};

export const googleLoginUser = async (userCredentials) => {
  // call login route passing in email & password
  try {
    const response = await axios.post(`/users/googleLogin`, userCredentials);
    console.log(response);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const addSignupData = async (data) => {
  try {
    const signupdata = await axios.post(`/users`, data);
    return signupdata.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getRecordData = async () => {
  try {
    const recordData = await axios.get(`/records`);
    console.log("recorddata:", recordData);

    return recordData.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (data, id) => {
  try {
    const updatedUser = await axios.put(`/users/${id}`, data);
    console.log("updatedUser:", updatedUser);
    return updatedUser.data;
  } catch (err) {
    console.log(err);
  }
};

export const authenticateUser = async () => {
  try {
    const response = await axios.post(`/me`);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const addOrders = async (orderData) => {
  try {
    const response = await axios.post("/orders", orderData);
    return response;
  } catch (error) {
    return extractApiError(error);
  }
};

export const verifyUser = async (token) => {
  try {
    const response = await axios.post(`/users/verify`, { token: token });
    return response.data;
  } catch (err) {
    let error = extractApiError(err);
    console.log(error);
    return error;
  }
};
