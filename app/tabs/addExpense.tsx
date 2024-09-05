import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

function AddExpense() {
  return (
    <LinearGradient
      focusable
      style={{ flex: 1 }}
      colors={["#091b2d", "#3a6fa3"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text>aa</Text>
    </LinearGradient>
  );
}

export default AddExpense;
