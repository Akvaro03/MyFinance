import Palette from "@/palette";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type ItemProps = { title: string; money: string };
type ListAccountProps = { Style?: ViewStyle };

const Item = ({ title, money }: ItemProps) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.money}>{money}</Text>
  </TouchableOpacity>
);

function ListAccounts({ Style }: ListAccountProps) {
  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ ...Style }}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
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
  money: {
    fontSize: 25,
    fontWeight: "700",
    color: Palette.darkShades,
  },
  item: {
    backgroundColor: Palette.lightShades,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    marginHorizontal: 8,
    borderRadius: 15,
    height: 90, // Asegura que cada item tenga una altura fija de 90
    justifyContent: "center", // Centra el contenido verticalmente dentro del item
  },
  title: {
    fontSize: 20,
  },
});

export default ListAccounts;
