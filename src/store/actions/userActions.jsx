import axios from "../../utils/axios";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncLoadUser = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/auth/");
    console.log(data);
    
    if (data && status === 200) {
      await dispatch(loadUser(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncRegisterUser =
  ({ firstName, lastName, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/auth/register", {
        fullName: { firstName, lastName },
        email,
        password,
      });
      if (data && status === 201) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncLoginUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data, status } = await axios.post("/auth/login", {
        email,
        password,
      });
      if (data && status === 200) {
        await dispatch(asyncLoadUser());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
