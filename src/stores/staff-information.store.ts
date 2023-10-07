import type { StaffInformation } from '@/interface/staff';
import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  //general
  profilePicture?: string;
  role: string; //<= 5MB
  name: string; //<=50 character
  englishName?: string; //<=50 character
  phoneNumber: string;
  staffNumber?: string;
  email: string;
  password: string;
  gender: string;
  startDate: string; //yyyy-mm-dd
  spaShopId: string;
  specialty: string[];
  workingType: string;
  floors: string[];

  //additional
  birthDate?: string; //yyyy-mm-dd
  birthplace?: string; //<=100 characters
  nationality?: string;
  governmentIdentityNumber: string;
  governmentIdentityIssuedDate: string;
  governmentIdentityIssuedPlace: string;
  permanentAddress?: string;
  currentAddress?: string;
  religion?: string;
  contact?: {
    name: string; //<= 50 character
    phoneNumber: string;
    relationship: string;
  };
} = {
  role: '',
  name: '', //<=50 character
  phoneNumber: '',
  email: '',
  password: '',
  gender: '',
  specialty: [],
  spaShopId: '',
  workingType: '',
  floors: [],
  startDate: '', //yyyy-mm-dd
  //additional
  governmentIdentityNumber: '',
  governmentIdentityIssuedDate: '',
  governmentIdentityIssuedPlace: '',
};

const staffInfoSlice = createSlice({
  name: 'staff-info',
  initialState,
  reducers: {
    setStaffInformation(state, action: PayloadAction<Partial<StaffInformation>>) {
      Object.assign(state, action.payload);
    },
    clearStaffInformation() {
      return { ...initialState };
    },
  },
});

export const { setStaffInformation, clearStaffInformation } = staffInfoSlice.actions;

export default staffInfoSlice.reducer;
