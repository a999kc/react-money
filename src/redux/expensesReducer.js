const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (amount, category) => ({
  type: ADD_EXPENSE,
  payload: { amount: parseFloat(amount), category },
});

const initialState = {
  expenses: [],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default expensesReducer;
