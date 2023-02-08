import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#808080',
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#808080',
    borderRadius: 6,
    color: '#FFFF',
    fontSize: 16,
    padding: 16,
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    width: 56,
    height: 56,
    marginLeft: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});