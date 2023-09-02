import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import RoundButton from "../components/rounded-button/rounded-button.component";
import { colors } from "../utils/colors.util";
import { useState } from "react";

export default Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          label="What would you like to focus on?"
          onChangeText={(text) => setSubject(text)}
        />
        <RoundButton style={{ alignItems: "center" }} size={50} label="+" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  textInputStyle: {
    flex: 1,
    marginRight: 10,
  },
});
