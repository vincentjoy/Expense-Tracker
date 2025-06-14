import { useContext } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../../store/expenses-context";

function AllExpenses() {
    const expensesCntx = useContext(ExpensesContext)
    return <ExpensesOutput expenses={expensesCntx.expenses} expensesPeriod='Total' fallbackText="No registered expenses found" />
}

export default AllExpenses;