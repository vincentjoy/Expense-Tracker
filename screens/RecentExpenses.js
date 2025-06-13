import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from '../util/http';
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState();
    const expensesCntx = useContext(ExpensesContext)

    useEffect(() => {
        async function getExpenses() {
            try {
                const expenses = await fetchExpenses();
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