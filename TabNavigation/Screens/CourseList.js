import { View, Text, StyleSheet } from "react-native";

const CourseList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});