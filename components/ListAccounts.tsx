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
    id: "3ac68afc-c304-48d3-a4f8-fbd91aa97f63",
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
    fontFamily: "Inter-Black",
  },
  item: {
    backgroundColor: Palette.lightShades,
    padding: 15,
    marginHorizontal: 8,
    borderRadius: 15,
    height: 90, // Asegura que cada item tenga una altura fija de 90
    justifyContent: "center", // Centra el contenido verticalmente dentro del item
    shadowColor: "#000",
    shadowOffset: {
      width: -10,
      height: 17,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  title: {
    fontFamily: "Inter-Black",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ListAccounts;
