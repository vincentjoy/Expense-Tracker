import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "@components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "@store/expenses-context";
import { getDateMinusDays } from "@util/date";
import { fetchExpenses } from '@util/http';
import LoadingOverlay from "@components/UI/expenses/LoadingOverlay";
import ErrorOverlay from "@components/UI/expenses/ErrorOverlay";
import { AuthContext } from '@store/auth-context';

function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState();
    const expensesCntx = useContext(ExpensesContext)
    const authCtx = useContext(AuthContext)
    const token = authCtx.token

    useEffect(() => {
        async function getExpenses() {
            try {
                const expenses = await fetchExpenses(token);
                expensesCntx.setExpenses(expenses);
            } catch (error) {
                setError('Could not fetch expenses!');
            }
            setIsFetching(false);
        }

        getExpenses();
    }, []);

    if (error && !isFetching) {
        return <ErrorOverlay message={error} />;
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    const recentExpenses = expensesCntx.expenses.filter((expense) => {
        const today = new Date()
        const date7DaysAgo = getDateMinusDays(today, 7)
        return (expense.date > date7DaysAgo) && (expense.date <= today)
    })
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallbackText="No expenses registered for the last 7 days" />
}

export default RecentExpenses;