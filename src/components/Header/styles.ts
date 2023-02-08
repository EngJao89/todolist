import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 173,
    paddingLeft: 158,
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  }
});