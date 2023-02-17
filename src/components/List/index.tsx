import { View, FlatList } from "react-native";
import { styles } from "./styles";

import { EditTaskArgs } from "../../screens/Home";
import TaskItem from "../Item";
import { ItemWrapper} from "../ItemWrapper";
import { EmptyTask } from "../EmptyTask";

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

export function List({tasks, toggleTaskDone, removeTask, editTask}: TasksListProps){

  return(
  <View style={styles.tasks}>
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
      style={{ marginTop: 32 }}
      ListEmptyComponent={() => (<EmptyTask />)}
      />
  </View>
  )
}