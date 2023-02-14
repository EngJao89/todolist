import { View, Text, Image} from "react-native";
import { styles } from "./styles";

import clipboard from "../../assets/icons/Clipboard.png";

export function EmptyTask(){
  return(
    <View style={styles.emptyContainer}>
      <Image style={styles.iconList} source={clipboard}/>
      <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}