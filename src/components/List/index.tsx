import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./styles";

import { EditTaskArgs } from "../../screens/Home";
import TaskItem from "../Item";
import { ItemWrapper } from "../ItemWrapper";

import clipboard from "../../assets/icons/Clipboard.png";

interface HeaderProps {
  tasksCreate: number;
  tasksDone: number;
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({taskId, taskNewTitle}: EditTaskArgs) => void;
}

export function List(
    { tasksCreate, tasksDone }: HeaderProps, 
    {tasks, toggleTaskDone, removeTask, editTask}: TasksListProps
  ){
  return(
  <View style={styles.tasks}>
    <Text style={styles.tasksCreate}>Criadas </Text>
    <TouchableOpacity style={styles.tasksCreateButton}>
      {<Text style={styles.counterCreateBold}>{tasksCreate}</Text>}
    </TouchableOpacity>
    
    <Text style={styles.tasksDone}>Concluidas </Text>
    <TouchableOpacity style={styles.tasksDoneButton}>
      {<Text style={styles.counterDoneBold}>{tasksDone}</Text>}
    </TouchableOpacity>

    <View>
      <Image style={styles.iconList} source={clipboard}/>
      <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <ItemWrapper index={index}>
              <TaskItem 
                task={item} 
                editTask={editTask} 
                toggleTaskDone={toggleTaskDone} 
                removeTask={removeTask}
              />
            </ItemWrapper>
          )
        }}
        style={{
          marginTop: 32
        }}
      />
    </View>
  </View>
  )
}