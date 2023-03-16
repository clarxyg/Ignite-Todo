import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Trash from '../../assets/trash.svg'

type Props = {
    onRemove: () => void;
    task: String;
    tasks: String[];
}

export function TaskHeader({ tasks }: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.box}>
                    <Text style={styles.createText}>
                        Criadas
                    </Text>
                    <View style={styles.containerQuantity}>
                        <Text style={styles.quantity}>
                            {tasks.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.doneText}>
                        Concluídas
                    </Text>
                    <View style={styles.containerQuantity}>
                        <Text style={styles.quantity}>
                          0
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export function Tasks({ onRemove, task }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClickRadio = () => {
        setIsClicked(!isClicked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.radio} onPress={handleClickRadio}>
                    <View style={isClicked ? styles.clicked : styles.unClicked} />
                </TouchableOpacity>
                <Text style={isClicked ? styles.done : styles.todo}>{task}</Text>
                <TouchableOpacity onPress={onRemove}>
                    <Trash />
                </TouchableOpacity>
            </View>
        </View >
    )
}