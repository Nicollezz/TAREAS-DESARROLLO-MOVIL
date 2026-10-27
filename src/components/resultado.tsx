import { Text, View } from "react-native";
import { ExerciseValues } from "../modelos/ejercicio";

interface Props {
  datos: ExerciseValues;
}

export const ExerciseResult = ({ datos }: Props) => {
  return (
    <View
      style={{
        padding: 15,
        marginTop: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e0e0e0",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
        Resultado:
      </Text>
      <Text>• Cantidad de días: {datos.periodLength}</Text>
      <Text>• Días de entrenamiento: {datos.trainingDays}</Text>
      <Text>• Objetivo original: {datos.target} horas diarias</Text>
      <Text>• Promedio calculado : {datos.average.toFixed(2)} </Text>
      <Text>• ¿Se alcanzó el objetivo?: {datos.success ? "Sí" : "No"}</Text>
      <Text>• Calificación (1-3): {datos.rating}</Text>
      <Text>• Descripción: {datos.ratingDescription}</Text>
    </View>
  );
};
