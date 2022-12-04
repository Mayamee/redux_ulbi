import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "../reducers/UserSlice";
const { usersFetching, usersFetchingSuccess, usersFetchingError } =
  userSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching());
    const res = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(usersFetchingSuccess(res.data));
  } catch (error) {
    if (!(error instanceof Error)) return;
    dispatch(usersFetchingError(error.message));
  }
};
