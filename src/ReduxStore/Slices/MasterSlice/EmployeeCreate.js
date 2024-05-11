/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../helpers";

const CREATEEMPLOYEEMASTER = createAsyncThunk(
  "CreateEmployeeMaster/CreateEmployeeMaster",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const CreateEmployeeMasterSlice = createSlice({
  name: "CreateEmployeeMasterSlice",
  initialState: {
    CreateEmployeeMaster: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CREATEEMPLOYEEMASTER.fulfilled, (state, action) => {
      state.CreateEmployeeMaster = {
        ...state.CreateEmployeeMaster,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(CREATEEMPLOYEEMASTER.pending, (state, action) => {
      state.CreateEmployeeMaster = {
        ...state.CreateEmployeeMaster,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(CREATEEMPLOYEEMASTER.rejected, (state, action) => {
      state.CreateEmployeeMaster = {
        ...state.CreateEmployeeMaster,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const CreateEmployeeMasterAction = {
  CREATEEMPLOYEEMASTER,
};

export { CreateEmployeeMasterAction };
export default CreateEmployeeMasterSlice.reducer;
