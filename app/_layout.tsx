import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/inter/Inter_18pt-Regular.ttf"),
  });

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: true }} />
      </Stack>
  );
}
