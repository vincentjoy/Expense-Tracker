import { View, StyleSheet } from "react-native";
import Input from "./Input";
function ExpenseForm() {

    function amountChangedHandler() { }

    return (
        <View style={styles.form}>
            <View style={styles.inputRows}>
                <Input style={styles.rowInput} label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangedHandler
                }} />
                <Input style={styles.rowInput} label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10
                }} />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true
            }} />
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginBottom: 16,
    },
    inputRows: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
})