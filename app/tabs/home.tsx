import DonutChart from "@/donutChart";
import Palette from "@/palette";
import AllActionsUser from "components/AllActionsUser";
import ListAccounts from "components/ListAccounts";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient
      focusable
      style={styles.container}
      colors={["#091b2d", "#3a6fa3"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DonutChart />
        <ListAccounts Style={{ paddingLeft: 15 }} />
        <AllActionsUser />
      </ScrollView>
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
