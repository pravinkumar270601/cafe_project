import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import TimeSheetCreateSlice from "../Slices/TimeSheet/TimeSheetCreate";
import TimeSheetDropdownSlice from "../Slices/TimeSheet/TimeSheetDropdown";
import TimeSheetGetAllSlice from "../Slices/TimeSheet/TimeSheetGetAll";
import TimeSheetGetByIdSlice from "../Slices/TimeSheet/TimeSheetGetById";
import TimeSheetUpdateSlice from "../Slices/TimeSheet/TimeSheetUpdate";

const reducer = combineReducers({
  TimeSheetCreate: TimeSheetCreateSlice,
  TimeSheetDropdown: TimeSheetDropdownSlice,
  TimeSheetGetAll: TimeSheetGetAllSlice,
  TimeSheetGetById: TimeSheetGetByIdSlice,
  TimeSheetUpdate: TimeSheetUpdateSlice,
});

const store = configureStore({
  reducer,
});
export default store;
