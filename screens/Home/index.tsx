import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskHeader, Tasks } from "../../components/Tasks";
import { styles } from './styles'
import Clipboard from '../../assets/clipboard.svg'


export function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')
    

    function handleTaskAdd() {
        if (tasks.includes(taskName)) {
            Alert.alert("Task", "Essa tarefa já existe na lista!")
            setTaskName('')
            return
        }
        setTasks(prevState => [...prevState, taskName])
        setTaskName('')
    }

    function handleTaskRemove(task: string) {
        Alert.alert("Remover", `Deseja remover a tarefa: ${task}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(item => item !== task))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View>
            <Header />
            <View style={styles.containerInput}>
                <Input onAdd={handleTaskAdd} taskName={taskName} setTaskName={setTaskName} />
            </View>
            <View style={styles.containerTaks}>
                <TaskHeader tasks={tasks}/>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <>
                            <Tasks 
                            key={item} 
                            task={item}
                            onRemove={() => handleTaskRemove(item)}/>
                        </>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.containerEmpty}>
                            <View style={styles.containerEmptyText}>
                                <Clipboard style={styles.clipboard} />
                                <Text style={styles.textFirst}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.textSecond}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}