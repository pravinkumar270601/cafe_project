/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const TIMESHEETGETALL = createAsyncThunk(
  "TimeSheetGetAll/TimeSheetGetAll",
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

const TimeSheetGetAllSlice = createSlice({
  name: "TimeSheetGetAllSlice",
  initialState: {
    TimeSheetGetAll: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TIMESHEETGETALL.fulfilled, (state, action) => {
      state.TimeSheetGetAll = {
        ...state.TimeSheetGetAll,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETGETALL.pending, (state, action) => {
      state.TimeSheetGetAll = {
        ...state.TimeSheetGetAll,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETGETALL.rejected, (state, action) => {
      state.TimeSheetGetAll = {
        ...state.TimeSheetGetAll,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const TimeSheetGetAllAction = {
    TIMESHEETGETALL,
};

export { TimeSheetGetAllAction };
export default TimeSheetGetAllSlice.reducer;
