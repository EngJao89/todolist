import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 19,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 32
  },
  tasksCreate: {
    justifyContent: 'flex-start',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    color: '#4EA8DE',
    width: 54,
    height: 19,
  },
  tasksCreateButton: {
    width: 25,
    height: 19,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 9
  },
  counterCreateBold: {
    fontSize: 14,
    color: '#D9D9D9',
    marginLeft: 2
  },
  tasksDone: {
    fontSize: 14,
    color: '#8284FA',
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    marginLeft: 184,
    width: 78,
    height: 17
  },
  tasksDoneButton: {
    width: 25,
    height: 19,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 9
  },
  counterDoneBold: {
    fontSize: 14,
    color: '#FFF',
  }
});