import BarChartComponent from "@/barChart";
import DonutChart from "@/donutChart";
import { View } from "react-native";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <DonutChart />
        </View>
    );
};
export default HomeScreen;