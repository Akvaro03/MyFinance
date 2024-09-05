import { Link, Tabs, useSegments } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="addExpense"
        options={{
          headerShown: false,
          title: "",
          tabBarButton: (data) => <ButtonAddExpense />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{ headerShown: false, title: "Activity" }}
      />
    </Tabs>
  );
}

const ButtonAddExpense = () => (
  <Link href={"/tabs/addExpense"} asChild>
    <Pressable style={styles.buttonAddExpense}>
      <FontAwesome6 name="add" size={30} color="black" />
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  buttonAddExpense: {
    position: "absolute",
    bottom: 10, // Ajusta esta distancia para sobresalir más o menos
    left: "50%", // Esto lo posiciona en el centro horizontalmente
    transform: [{ translateX: -35 }], // La mitad del ancho para centrarlo perfectamente
    backgroundColor: "white",
    height: 70, // Más grande que los 50px originales
    width: 70, // Más grande que los 50px originales
    borderRadius: 35, // La mitad del ancho/alto para que sea completamente circular
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Opcional: Para dar un efecto de sombra y hacerlo sobresalir más
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.5,
    shadowRadius: 5,
    elevation: 5, // Para añadir sombra en Android
  },
});
