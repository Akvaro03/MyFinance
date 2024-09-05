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
        backgroundColor: Palette.lightShades,
        margin: 15,
        padding: 15,
        marginBottom:25,
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
      <ItemIcon tittle="Recargar Celular">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Recargar Celular">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Recargar Celular">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Recargar Celular">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Recargar Celular">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Cuentas y Servicios">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Cargar transporte">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Recargar Directv">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Cobrar con Point">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Cobrar con Link de pago">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Sin Tope">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
      <ItemIcon tittle="Ver más">
        <AntDesign name="book" size={30} color="black" />
      </ItemIcon>
    </View>
  );
}
type ItemIconProps = { children: ReactNode; tittle: string };
const ItemIcon = ({ children, tittle }: ItemIconProps) => (
  <TouchableOpacity style={{ alignItems: "center" }}>
    <LinearGradient
      colors={["rgba(144,191,255,1)", "#FFFFFF"]} // Define tus colores de gradiente aquí
      // colors={["rgba(88,153,226,0.8)", "#FFFFFF"]} // Define tus colores de gradiente aquí
      // colors={["#FFFFFF","#335C8115", "#FFFFFF"]} // Define tus colores de gradiente aquí
      start={{ x: 0, y: 0 }}
      end={{ x: .5, y: .5 }}
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
    flexWrap: "wrap",
    width:60,
    textAlign:"center",
    fontSize: 10,
  },
});

export default AllActionsUser;
