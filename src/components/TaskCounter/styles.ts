import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: 327,
    height: 247,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 36
  },
  tasksCreate: {
    fontSize: 14,
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
  },
  tasksDone: {
    fontSize: 14,
    color: '#8284FA',
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
  },
  iconList: {
    width: 56,
    height: 56,
    marginTop: 100,
    marginLeft: -220,
  },
  emptyTextBold:{
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 190,
    marginLeft: -170,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    color: '#808080',
    fontSize: 14,
    marginLeft: -325
  }
});