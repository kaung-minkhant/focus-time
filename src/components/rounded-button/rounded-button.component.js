import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors.util";

export default RoundButton = ({ size = 100, label, onPress }) => {
  return (
    <TouchableOpacity style={styles(size).button} onPress={onPress}>
      <Text style={styles(size).buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  button: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: colors.white,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: colors.white,
    fontSize: size / 2,
  },
});
