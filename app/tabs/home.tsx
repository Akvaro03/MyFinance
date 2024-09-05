import DonutChart from "@/donutChart";
import Palette from "@/palette";
import AllActionsUser from "components/AllActionsUser";
import ListAccounts from "components/ListAccounts";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const HomeScreen = () => {
  const opacity = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      // Reiniciamos la animación cuando la pantalla se enfoca
      opacity.value = withSpring(1, {
        damping: 80, // Controla la suavidad de la animación
        velocity: 2,
        stiffness: 100, // Controla la resistencia
      });

      return () => {
        // Esto reinicia el valor cuando la pantalla pierde el foco
        opacity.value = 0;
      };
    }, [opacity])
  );

  return (
    <LinearGradient
      focusable
      style={styles.container}
      colors={["#091b2d", "#3a6fa3"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.ScrollView
        style={{ opacity }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <DonutChart />
        <ListAccounts Style={{ paddingLeft: 15 }} />
        <AllActionsUser />
      </Animated.ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.darkShades,
  },
});
export default HomeScreen;
