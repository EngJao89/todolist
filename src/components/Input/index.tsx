import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Feather } from '@expo/vector-icons';

interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps){
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task) {
      return;
    }
    addTask(task);
    setTask('');
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa..."
        returnKeyType="send"
        placeholderTextColor="#B2B2B2"
        selectionColor="#B2B2B2"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />

      <View style={styles.boxButton}>
        <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.addButton}
          onPress={handleAddNewTask}
        >
          <Feather name="plus-circle" size={24} color="white"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}