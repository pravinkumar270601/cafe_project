/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const TIMESHEETUPDATE = createAsyncThunk(
  "TimeSheetUpdate/TimeSheetUpdate",
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

const TimeSheetUpdateSlice = createSlice({
  name: "TimeSheetUpdateSlice",
  initialState: {
    TimeSheetUpdate: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TIMESHEETUPDATE.fulfilled, (state, action) => {
      state.TimeSheetUpdate = {
        ...state.TimeSheetUpdate,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETUPDATE.pending, (state, action) => {
      state.TimeSheetUpdate = {
        ...state.TimeSheetUpdate,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETUPDATE.rejected, (state, action) => {
      state.TimeSheetUpdate = {
        ...state.TimeSheetUpdate,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const TimeSheetUpdateAction = {
    TIMESHEETUPDATE,
};

export { TimeSheetUpdateAction };
export default TimeSheetUpdateSlice.reducer;