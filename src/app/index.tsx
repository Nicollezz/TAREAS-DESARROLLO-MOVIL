import { useState } from "react";
import { ScrollView } from "react-native";
import { ExerciseForm } from "../components/ejercicioForm";
import { ExerciseResult } from "../components/resultado";
import { ExerciseValues } from "../modelos/ejercicio";

export default function Index() {
  const [resultado, setResultado] = useState<ExerciseValues | null>(null);

  return (
    <ScrollView style={{ marginTop: 50, padding: 10 }}>
      <ExerciseForm enviarResultado={(res) => setResultado(res)} />
      {resultado && <ExerciseResult datos={resultado} />}
    </ScrollView>
  );
}
