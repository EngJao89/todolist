import { View, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  tasksCreate: number;
  tasksDone: any;
  tasksCreateCounter: number;
  tasksDoneCounter: number;
}

export function TaskCounter({ 
  tasksCreate, 
  tasksDone, 
  tasksCreateCounter, 
  tasksDoneCounter 
}: HeaderProps) {
  const tasksCounterText = tasksCreateCounter ===1;

  return(
    <View style={styles.container}>
      <Text style={styles.tasksCreate}>Criadas </Text>
      <TouchableOpacity style={styles.tasksCreateButton}>
        {<Text style={styles.counterCreateBold}>{tasksCreate} {tasksCounterText}</Text>}
      </TouchableOpacity>
      
      <Text style={styles.tasksDone}>Concluidas </Text>
      <TouchableOpacity style={styles.tasksDoneButton}>
        {<Text style={styles.counterDoneBold}>{tasksDone} {tasksCounterText}</Text>}
      </TouchableOpacity>
    </View>
  )
}