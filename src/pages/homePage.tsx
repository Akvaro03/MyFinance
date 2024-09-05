import DonutChart from "@/Charts/donutChart";
import Palette from "@/palette";
import AllActionsUser from "@/components/AllActionsUser";
import ListAccounts from "@/components/ListAccounts";
import { LinearGradient } from "expo-linear-gradient";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import AnimatedScrollView from "@/components/AnimatedScrollView";

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
    <AnimatedScrollView>
      <DonutChart onPress={() => router.push("/history")} />
      <ListAccounts style={{ paddingLeft: 15 }} />
      <AllActionsUser />
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.darkShades,
  },
});
export default HomeScreen;
