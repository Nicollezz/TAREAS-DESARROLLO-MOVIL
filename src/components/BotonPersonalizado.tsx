import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PropiedadesBoton } from "../modelos/imc";

export const BotonPersonalizado = ({
  titulo,
  onPress,
  colorFondo = "#0288d1",
}: PropiedadesBoton) => {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorFondo }]}
      onPress={onPress}
    >
      <Text style={estilos.textoBoton}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  boton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
  },
  textoBoton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
