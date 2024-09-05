import Palette from "@/palette";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import { ReactDOM, ReactNode, useCallback } from "react";
import { ScrollViewProps, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

function AnimatedScrollView({ children }: ScrollViewProps) {
  const opacity = useSharedValue(.2);

  useFocusEffect(
    useCallback(() => {
      // Reiniciamos la animación cuando la pantalla se enfoca
      opacity.value = withSpring(1);

      return () => {
        // Esto reinicia el valor cuando la pantalla pierde el foco
        opacity.value = .2;
      };
    }, [opacity])
  );
  return (
    <LinearGradient
      style={styles.container}
      colors={["#091b2d", "#3a6fa3"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.ScrollView
        style={{ opacity }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </Animated.ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.darkShades,
  },
});
export default AnimatedScrollView;
