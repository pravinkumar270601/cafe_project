

import { TimeSheetCreateAction } from "../Slices/TimeSheet/TimeSheetCreate";
import { TimeSheetDropdownAction } from "../Slices/TimeSheet/TimeSheetDropdown";
import { TimeSheetGetAllAction } from "../Slices/TimeSheet/TimeSheetGetAll";
import { TimeSheetGetByIdAction } from "../Slices/TimeSheet/TimeSheetGetById";
import { TimeSheetUpdateAction } from "../Slices/TimeSheet/TimeSheetUpdate";

const actions = {

  ...TimeSheetCreateAction,
  ...TimeSheetDropdownAction,
  ...TimeSheetGetAllAction,
  ...TimeSheetGetByIdAction,
  ...TimeSheetUpdateAction,
  

};

export default actions;
