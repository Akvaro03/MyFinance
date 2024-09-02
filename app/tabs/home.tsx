import DonutChart from "@/donutChart";
import Palette from "@/palette";
import ListAccounts from "components/ListAccounts";
import { FlatList, ScrollView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Palette.darkShades,
      }}
    >
      <DonutChart />
      <ListAccounts />
      {/* <FlatList >
        <View
          style={{
            width: 150,
            height: 50,
            backgroundColor: Palette.lightShades,
          }}
        >
          <Text style={{ color: Palette.mainColor }}>General Account</Text>
          <Text style={{ color: Palette.darkAccent }}>280.000</Text>
        </View>
        <View
          style={{
            width: 150,
            height: 50,
            backgroundColor: Palette.lightShades,
          }}
        >
          <Text style={{ color: Palette.mainColor }}>General Account</Text>
          <Text style={{ color: Palette.darkAccent }}>280.000</Text>
        </View>
      </FlatList> */}
    </View>
  );
};
export default HomeScreen;
