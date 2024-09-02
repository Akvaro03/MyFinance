import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import Palette from "./palette";

function DonutChart() {
  return (
    <View
      style={{
        paddingVertical: 50,
        backgroundColor: Palette.darkShades,
        flex: 1,
        margin: 20,
      }}
    >
      <View
        style={{
          borderRadius: 20,
          backgroundColor: Palette.darkAccent,
          alignItems: "center",
        }}
      >
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
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14, color: "white" }}>Gastos</Text>
                <Text
                  style={{ fontSize: 30, color: "white", fontWeight: "bold" }}
                >
                  $253.000
                </Text>
                <Text style={{ fontSize: 14, color: "white" }}>1/09/2024</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
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
const renderDot = (color) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );
};
const renderLegendComponent = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            marginRight: 20,
          }}
        >
          {renderDot("#006DFF")}
          <Text style={{ color: "white" }}>Excellent: 47%</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 120 }}
        >
          {renderDot("#8F80F3")}
          <Text style={{ color: "white" }}>Okay: 16%</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            marginRight: 20,
          }}
        >
          {renderDot("#3BE9DE")}
          <Text style={{ color: "white" }}>Good: 40%</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 120 }}
        >
          {renderDot("#FF7F97")}
          <Text style={{ color: "white" }}>Poor: 3%</Text>
        </View>
      </View>
    </>
  );
};

export default DonutChart;
