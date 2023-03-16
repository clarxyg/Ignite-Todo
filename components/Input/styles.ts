import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 25,
        alignItems: 'center',
        gap: 5
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        height: 60,
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        padding: 16,
        fontSize: 16,
        color: '#ffff'
    },
    button: {
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        width: 60,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center'
    }
})