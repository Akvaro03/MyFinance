import { Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
        
const BarChartComponent = () => {
    const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
    return (
        <BarChart data={[{value: 15}, {value: 30}, {value: 26}, {value: 40}]}/>
    );
};


export default BarChartComponent;