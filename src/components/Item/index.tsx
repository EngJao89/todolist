import React, { useEffect, useRef, useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';

import { styles } from './styles';

import trashIcon from '../../assets/icons/trash/trash.png';
import editIcon from '../../assets/icons/edit/edit.png';

import Icon from '@expo/vector-icons/Feather';
import { List, Task } from '../List';
import { EditTaskArgs } from '../../screens/Home';


interface TaskItemProps {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({taskId, taskNewTitle}: EditTaskArgs) => void;
}

export default function TaskItem({ task, toggleTaskDone, removeTask, editTask }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitleValue, setTaskTitleValue] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleFinishEditing() {
    setTaskTitleValue(task.title);
    setIsEditing(false);
  }

  function handleSubmitEditing() {
    editTask({ taskId: task.id, taskNewTitle: taskTitleValue });
    setIsEditing(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  } , [isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(task.id)}
        >
        <View 
          style={task.done ? styles.taskMarkerDone : styles.taskMarker}
        >
          { task.done && (
            <Icon 
              name="check"
              size={12}
              color="#FFF"
            />
          )}
      </View>

        <TextInput 
          value={taskTitleValue}
          onChangeText={setTaskTitleValue}
          editable={isEditing}
          onSubmitEditing={handleSubmitEditing}
          style={task.done ? styles.taskTextDone : styles.taskText}
        />
        </TouchableOpacity>
    </View>

      <View style={styles.iconsContainer}>
        { isEditing ?(
          <TouchableOpacity
            onPress={handleFinishEditing}
          >
            <Icon 
              name="x"
              size={24}
              color="#b2b2b2"
            />
          </TouchableOpacity>
        ) :(
          <TouchableOpacity
            onPress={handleStartEditing}
          >
            <Image source={editIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.iconsDivider} />

      <TouchableOpacity
        onPress={() => removeTask(task.id)}
        disabled={isEditing}
      >
        <Image source={trashIcon} style={{ opacity: isEditing ? 0.2 : 1 }}/>
      </TouchableOpacity>
    </View>
  );
}