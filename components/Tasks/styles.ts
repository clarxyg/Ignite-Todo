import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '82%'
    },
    createText: {
      color: '#4EA8DE',
      fontWeight: 'bold',
      fontSize: 16
    },
    doneText: {
      color: '#8284FA',
      fontWeight: 'bold',
      fontSize: 16
    },
    quantity: {
        color: '#D9D9D9',
        fontWeight: 'bold',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingBottom: 20
    },
    containerQuantity: {
        backgroundColor: '#333333',
        borderRadius: 50,
        width: 30,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
    },
    todo: {
        color: '#fff',
        fontSize: 16
    },
    done: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'line-through'
    },
    card: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 320,
        height: 50,
        padding: 15,
        borderRadius: 6,
        marginTop: 5,
        marginBottom: 5
    },
    radio: {
        borderColor: '#4EA8DE',
        borderWidth: 1.7,
        borderRadius: 20 / 2,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clicked: {
        display: 'flex',
        backgroundColor: '#f1f2f3',
        width: 8,
        height: 8,
        borderRadius: 20
    },
    unClicked: {
        display: 'none'
    }
})