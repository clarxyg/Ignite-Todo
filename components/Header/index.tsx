import { View } from "react-native";
import { styles } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <View style={styles.container}>
            <Logo width="130" height="130" />
        </View>
    )
}