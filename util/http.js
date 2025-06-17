import axios from 'axios';
import Constants from 'expo-constants';

const BACKEND_URL = Constants.expoConfig.extra.API_URL;

export async function storeExpense(expenseData, token) {
    const response = await axios.post(BACKEND_URL + '/expenses.json?auth=' + token, expenseData)
    const id = response.data.name
    return id
}

export async function fetchExpenses(token) {

    const response = await axios.get(BACKEND_URL + '/expenses.json?auth=' + token);
    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }

    return expenses;
}

export function updateExpense(id, token, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json?auth=${token}`, expenseData);
}

export function deleteExpense(id, token) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json?auth=${token}`);
}