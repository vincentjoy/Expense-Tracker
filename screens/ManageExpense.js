import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) { // We get navigation componenet here, because this is a screen component
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
    }, [navigation, isEditing])

    return <Text>Manage Expense</Text>
}

export default ManageExpense;