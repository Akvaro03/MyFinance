import Palette from "@/palette";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ReactNode } from "react";

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
        flexWrap: "wrap",
        justifyContent: "space-evenly",
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
  <TouchableOpacity style={{alignItems:"center"}}>
    <View style={styles.iconContainer}>{children}</View>
    <Text>{tittle}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 47, // Ajusta según el tamaño deseado
    height: 47, // Ajusta según el tamaño deseado
    borderRadius: 50, // Esto hará que el `View` sea circular
    borderColor: "black",
    borderWidth: 1,
  },
});

export default AllActionsUser;
