import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Plus from '../../assets/plus.svg'

type Props = {
    onAdd: () => void;
    taskName: String;
    setTaskName: () => void;
}

export function Input({ onAdd, taskName, setTaskName }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(text) => setTaskName(text)}
                value={taskName}
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080" />
            <TouchableOpacity style={styles.button} onPress={onAdd}>
                <Plus />
            </TouchableOpacity>
        </View>
    )
}