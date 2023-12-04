import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async action creator
// export const getUsers = () => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch({ type: "user/getUsers/pending" });
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       dispatch({ type: "user/getUsers/fulfilled", payload: data });
//     } catch (error) {
//       dispatch({ type: "user/getUsers/rejected", error: error.response.data });
//     }
//   };
// };

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      return { ...state, isLoading: true };
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      return { ...state, isLoading: false, users: action.payload };
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});

export default userSlice.reducer;
