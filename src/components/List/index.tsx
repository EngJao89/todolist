import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  tasksCreate: number;
  tasksDone: number;
}

export function List({ tasksCreate, tasksDone }: HeaderProps){
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
  </View>
  )
}