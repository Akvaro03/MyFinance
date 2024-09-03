import DonutChart from "@/donutChart";
import Palette from "@/palette";
import AllActionsUser from "components/AllActionsUser";
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DonutChart />
        <ListAccounts Style={{ paddingLeft: 15 }} />
        <AllActionsUser />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
