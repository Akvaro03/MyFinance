import { Pressable, StyleSheet, Text, View } from "react-native";
import { PieChart, PieChartPropsType } from "react-native-gifted-charts";
import Palette from "../palette";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";

interface DonutChartProp {
  onPress?: () => void | null;
}
const DonutChart: FC<DonutChartProp> = ({ onPress }) => {
  return (
    <View style={styles.containerComponent}>
      <Pressable onPress={onPress} style={styles.containerDonut}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={140}
          innerRadius={100}
          innerCircleColor={Palette.darkShades}
          centerLabelComponent={() => {
            return (
              <LinearGradient
                style={styles.innerDonut}
                focusable
                colors={["#091b2d", "#3a6fa3"]} // Define tus colores de gradiente aquí
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.titleDonut}>Gastos</Text>
                <Text style={styles.valueDonut}>$253.000</Text>
                <Text style={styles.dateDonut}>1/09/2024</Text>
              </LinearGradient>
            );
          }}
        />
      </Pressable>
    </View>
  );
};
const pieData = [
  {
    value: 40,
    color: "#009FFF",
    gradientCenterColor: "#006DFF",
    focused: true,
  },
  { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
  { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
  { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
];

const styles = StyleSheet.create({
  containerComponent: {
    paddingVertical: 50,
    margin: 20,
  },
  containerDonut: {
    borderRadius: 20,
    backgroundColor: Palette.darkAccent,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: -10,
      height: 17,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9.11,

    elevation: 14,
  },
  titleDonut: {
    fontSize: 14,
    color: Palette.lightShades,
    fontFamily: "Inter-Black",
  },
  valueDonut: {
    fontSize: 30,
    color: Palette.mainColor,
    fontWeight: "bold",
    fontFamily: "Inter-Black",
  },
  innerDonut: {
    width: 202, // Ajusta según el tamaño del círculo interior
    height: 202, // Ajusta según el tamaño del círculo interior
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100, // Esto asegura que sea un círculo
  },

  dateDonut: {
    fontSize: 14,
    color: Palette.lightShades,
    fontFamily: "Inter-Black",
  },
});
export default DonutChart;
