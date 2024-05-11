/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

const TIMESHEETGETBYID = createAsyncThunk(
  "TimeSheetGetById/TimeSheetGetById",
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

const TimeSheetGetByIdSlice = createSlice({
  name: "TimeSheetGetByIdSlice",
  initialState: {
    TimeSheetGetById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TIMESHEETGETBYID.fulfilled, (state, action) => {
      state.TimeSheetGetById = {
        ...state.TimeSheetGetById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETGETBYID.pending, (state, action) => {
      state.TimeSheetGetById = {
        ...state.TimeSheetGetById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(TIMESHEETGETBYID.rejected, (state, action) => {
      state.TimeSheetGetById = {
        ...state.TimeSheetGetById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const TimeSheetGetByIdAction = {
    TIMESHEETGETBYID,
};

export { TimeSheetGetByIdAction };
export default TimeSheetGetByIdSlice.reducer;
