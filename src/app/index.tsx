import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { FormularioImc } from "../components/FormularioImc";
import { ResultadoImc } from "../components/ResultadoImc";
import { CategoriaImc } from "../modelos/imc";

export default function App() {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.75);
  const [imc, setImc] = useState<number>(0);
  const [categoria, setCategoria] = useState<CategoriaImc>("Peso normal");

  useEffect(() => {
    if (altura > 0 && peso > 0) {
      const imcCalculado = peso / (altura * altura);
      const imcRedondeado = parseFloat(imcCalculado.toFixed(2));
      setImc(imcRedondeado);

      if (imcRedondeado < 18.5) {
        setCategoria("Bajo peso");
      } else if (imcRedondeado >= 18.5 && imcRedondeado <= 24.9) {
        setCategoria("Peso normal");
      } else if (imcRedondeado >= 25 && imcRedondeado <= 29.9) {
        setCategoria("Sobrepeso");
      } else {
        setCategoria("Obesidad");
      }
    }
  }, [peso, altura]);

  const aumentarPeso = () => setPeso((prev) => prev + 1);
  const disminuirPeso = () => setPeso((prev) => (prev > 1 ? prev - 1 : 1));
  const cambiarPesoTexto = (valor: string) => {
    const numero = parseFloat(valor);
    setPeso(isNaN(numero) ? 0 : numero);
  };

  const aumentarAltura = () =>
    setAltura((prev) => parseFloat((prev + 0.01).toFixed(2)));
  const disminuirAltura = () =>
    setAltura((prev) =>
      prev > 0.1 ? parseFloat((prev - 0.01).toFixed(2)) : prev,
    );
  const cambiarAlturaTexto = (valor: string) => {
    const numero = parseFloat(valor);
    setAltura(isNaN(numero) ? 0 : numero);
  };

  return (
    <SafeAreaView style={estilos.contenedorPrincipal}>
      <ScrollView contentContainerStyle={estilos.contenido}>
        <Text style={estilos.encabezado}>Calculadora de IMC</Text>

        <FormularioImc
          peso={peso}
          altura={altura}
          onAumentarPeso={aumentarPeso}
          onDisminuirPeso={disminuirPeso}
          onCambiarPesoTexto={cambiarPesoTexto}
          onAumentarAltura={aumentarAltura}
          onDisminuirAltura={disminuirAltura}
          onCambiarAlturaTexto={cambiarAlturaTexto}
        />

        <ResultadoImc imc={imc} categoria={categoria} />
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
  },
  contenido: {
    padding: 20,
    alignItems: "center",
  },
  encabezado: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
});
