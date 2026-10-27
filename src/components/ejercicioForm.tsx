import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ExerciseValues } from "../modelos/ejercicio";

interface Props {
  enviarResultado: (res: ExerciseValues) => void;
}

export const ExerciseForm = ({ enviarResultado }: Props) => {
  const [lunes, setLunes] = useState("3");
  const [martes, setMartes] = useState("0");
  const [miercoles, setMiercoles] = useState("2");
  const [jueves, setJueves] = useState("4.5");
  const [viernes, setViernes] = useState("0");
  const [sabado, setSabado] = useState("3");
  const [domingo, setDomingo] = useState("1");

  const [metaInput, setMetaInput] = useState("2");

  const calculateExcercise = () => {
    const horas = [
      Number(lunes),
      Number(martes),
      Number(miercoles),
      Number(jueves),
      Number(viernes),
      Number(sabado),
      Number(domingo),
    ];

    const target = Number(metaInput);

    const periodLength = horas.length;

    let trainingDays = 0;
    for (let i = 0; i < horas.length; i++) {
      if (horas[i] > 0) {
        trainingDays++;
      }
    }

    let suma = 0;
    for (let i = 0; i < horas.length; i++) {
      suma += horas[i];
    }
    const average = suma / periodLength;

    const success = average >= target;

    let rating = 1;
    let ratingDescription = "Mal, hay que entrenar más.";

    if (average >= target) {
      rating = 3;
      ratingDescription = "¡Muy bien! Cumpliste el objetivo.";
    } else if (average >= target / 2) {
      rating = 2;
      ratingDescription = "No está tan mal, pero podría ser mejor.";
    }

    enviarResultado({
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    });
  };

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
        Registro de Horas por Día:
      </Text>

      <Text>Lunes:</Text>
      <TextInput
        style={styles.input}
        value={lunes}
        onChangeText={setLunes}
        keyboardType="numeric"
      />

      <Text>Martes:</Text>
      <TextInput
        style={styles.input}
        value={martes}
        onChangeText={setMartes}
        keyboardType="numeric"
      />

      <Text>Miércoles:</Text>
      <TextInput
        style={styles.input}
        value={miercoles}
        onChangeText={setMiercoles}
        keyboardType="numeric"
      />

      <Text>Jueves:</Text>
      <TextInput
        style={styles.input}
        value={jueves}
        onChangeText={setJueves}
        keyboardType="numeric"
      />

      <Text>Viernes:</Text>
      <TextInput
        style={styles.input}
        value={viernes}
        onChangeText={setViernes}
        keyboardType="numeric"
      />

      <Text>Sábado:</Text>
      <TextInput
        style={styles.input}
        value={sabado}
        onChangeText={setSabado}
        keyboardType="numeric"
      />

      <Text>Domingo:</Text>
      <TextInput
        style={styles.input}
        value={domingo}
        onChangeText={setDomingo}
        keyboardType="numeric"
      />

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Meta u objetivo :
      </Text>
      <TextInput
        style={styles.input}
        value={metaInput}
        onChangeText={setMetaInput}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calculateExcercise} />
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
};
