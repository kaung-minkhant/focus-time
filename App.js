import { StyleSheet, Text, SafeAreaView } from "react-native";
import Focus from "./src/features/focus.feature";
import { colors } from "./src/utils/colors.util";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
