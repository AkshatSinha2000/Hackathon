import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  expenses: [],
  income: [],
  expensechart: [],
  incomechart: [],
  totalincome: 0,
  totalexpenses: 0,
  loading: true,
  error: null,
};

export const expenses = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    Addexpenses: (state, action) => {
      console.log('EXPENSESE ', action.payload);
      state.expenses = state.expenses.concat(action.payload);
      state.totalexpenses += Number(action.payload.amount);
      state.expensechart = state.expensechart.concat({
        value: Number(action.payload.amount),
      });
      console.log('EXPENSESE ', state.expenses);
    },
    Addincome: (state, action) => {
      state.income = state.income.concat(action.payload);
      state.totalincome += Number(action.payload.amount);
      state.incomechart = state.incomechart.concat({
        value: Number(action.payload.amount),
      });
      console.log('INCOME', state.income);
    },

    DeleteExpenses: (state, action) => {
      console.log('payload', action.payload);
      // state.totalexpenses -= Number(action.payload.amount);
      state.expenses = state.expenses.filter(
        item => item.id !== action.payload,
      );
    },
    DeleteIncome: (state, action) => {
      console.log('payload', action.payload);
      // state.totalincome -= Number(action.payload.amount);
      state.income = state.income.filter(item => item.id !== action.payload);
    },
  },
});

export const {Addexpenses, Addincome, DeleteExpenses, DeleteIncome} =
  expenses.actions;
export default expenses.reducer;
