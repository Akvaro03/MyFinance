import Palette from "@/palette";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

type propsAllActions = { style?: ViewStyle };
function AllActionsUser({ style }: propsAllActions) {
  return (
    <View
      style={{
        height: 190,
        backgroundColor: Palette.lightShades,
        margin: 15,
        padding: 15,
        borderRadius: 15,
        flexDirection: "row",
        columnGap: 25,
        rowGap: 5,
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        shadowColor: "#000",
        shadowOffset: {
          width: -10,
          height: 17,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        ...style,
      }}
    >
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Guardar">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
    </View>
  );
}
type ItemIconProps = { children: ReactNode; tittle: string };
const ItemIcon = ({ children, tittle }: ItemIconProps) => (
  <TouchableOpacity style={{ alignItems: "center" }}>
    <LinearGradient
      colors={["#f9fcff", "#dee4ea"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.iconContainer}
    >
      {children}
    </LinearGradient>
    <Text style={styles.title}>{tittle}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 47, // Ajusta según el tamaño deseado
    height: 47, // Ajusta según el tamaño deseado
    borderRadius: 50, // Esto hará que el `View` sea circular
    borderColor: "grey",
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.11,
    elevation: 4,
  },
  title: {
    fontFamily: "Inter-Black",
    paddingVertical: 5,
  },
});

export default AllActionsUser;
