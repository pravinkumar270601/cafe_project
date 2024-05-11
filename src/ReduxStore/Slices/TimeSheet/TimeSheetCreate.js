/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const TIMESHEETCREATE = createAsyncThunk(
  "TimeSheetCreate/TimeSheetCreate",
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

const TimeSheetCreateSlice = createSlice({
  name: "TimeSheetCreateSlice",
  initialState: {
    TimeSheetCreate: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TIMESHEETCREATE.fulfilled, (state, action) => {
      state.TimeSheetCreate = {
        ...state.TimeSheetCreate,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETCREATE.pending, (state, action) => {
      state.TimeSheetCreate = {
        ...state.TimeSheetCreate,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETCREATE.rejected, (state, action) => {
      state.TimeSheetCreate = {
        ...state.TimeSheetCreate,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
}); 

const TimeSheetCreateAction = {
    TIMESHEETCREATE,
};

export { TimeSheetCreateAction };
export default TimeSheetCreateSlice.reducer;
