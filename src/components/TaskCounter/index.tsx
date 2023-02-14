import { View, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";

import clipboard from "../../assets/icons/Clipboard.png";

interface HeaderProps {
  tasksCreate: number;
  tasksDone: number;
  tasksCounter: number;
}

export function TaskCounter({ tasksCreate, tasksDone, tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter ===1;

  return(
    <View style={styles.container}>
      <Text style={styles.tasksCreate}>Criadas </Text>
      <TouchableOpacity style={styles.tasksCreateButton}>
        {<Text style={styles.counterCreateBold}>{tasksCreate} {tasksCounterText}</Text>}
      </TouchableOpacity>
      
      <Text style={styles.tasksDone}>Concluidas </Text>
      <TouchableOpacity style={styles.tasksDoneButton}>
        {<Text style={styles.counterDoneBold}>{tasksDone}</Text>}
      </TouchableOpacity>

      <View>
        <Image style={styles.iconList} source={clipboard}/>
        <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}