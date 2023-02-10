import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Feather } from '@expo/vector-icons';

export function Input(){
  return(
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa..."
        placeholderTextColor="#B2B2B2"
      />

      <View style={styles.boxButton}>
        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.addButton}
        >
          <Feather name="plus-circle" size={24} color="white"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}