import { StyleSheet, Text, View } from "react-native";
import { PropiedadesResultado } from "../modelos/imc";

export const ResultadoImc = ({ imc, categoria }: PropiedadesResultado) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Resultado </Text>
      <Text style={estilos.valorImc}>IMC: {imc}</Text>
      <Text style={estilos.categoria}>Clasificación: {categoria}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  titulo: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 4,
  },
  valorImc: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196f3",
  },
  categoria: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
    marginTop: 4,
  },
});
