import axios from 'axios';

const BASE_URL = process.env.REACT_APP_FIREBASE_BASE_URL

export function storeExpense(expenseData) {
  axios.post(
    `${BASE_URL}/expenses.json`,
    expenseData
  );
}