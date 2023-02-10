import { View, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { List } from "../../components/List";

export function Home(){
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <List 
        tasksCreate={0}
        tasksDone={0}       
      />
    </View>
  )
}