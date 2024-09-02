import Palette from "@/palette";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
type ItemProps = { title: string; money: string };

function ListAccounts() {
  const Item = ({ title, money }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.money}>{money}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({ item }) => <Item {...item} />}
    />
  );
}
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "General Account",
    money: "$250.000",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Savings Account",
    money: "$250.000",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Savings Account double title",
    money: "$250.000",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sofia Account",
    money: "$250.000",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  money: {
    fontSize: 25,
    fontWeight: 700,
    color: Palette.darkShades,
  },
  item: {
    backgroundColor: Palette.lightShades,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    marginHorizontal: 16,
    height: 90,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
  },
});

export default ListAccounts;
