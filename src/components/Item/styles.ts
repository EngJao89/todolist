import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    paddingTop: 16,
    paddingBottom: 24
  },
  infoContainer: {},
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    fontSize: 16
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#5E60CE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular',
    fontSize: 16
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 24
  },
  iconsDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#262626',
    marginHorizontal: 12
  }
});