import { StyleSheet, Text, TextInput, View } from "react-native";
import { PropiedadesFormulario } from "../modelos/imc";
import { BotonPersonalizado } from "./BotonPersonalizado";

export const FormularioImc = ({
  peso,
  altura,
  onAumentarPeso,
  onDisminuirPeso,
  onCambiarPesoTexto,
  onAumentarAltura,
  onDisminuirAltura,
  onCambiarAlturaTexto,
}: PropiedadesFormulario) => {
  return (
    <View style={estilos.contenedor}>
      {/* Sección de Peso */}
      <View style={estilos.tarjetaControl}>
        <Text style={estilos.etiqueta}>Peso (kg)</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={peso.toString()}
          onChangeText={onCambiarPesoTexto}
        />
        <View style={estilos.contenedorBotones}>
          <BotonPersonalizado
            titulo="- 1 KG"
            onPress={onDisminuirPeso}
            colorFondo="#d32f2f"
          />
          <BotonPersonalizado
            titulo="+ 1 KG"
            onPress={onAumentarPeso}
            colorFondo="#388e3c"
          />
        </View>
      </View>

      {/* Sección de Altura */}
      <View style={estilos.tarjetaControl}>
        <Text style={estilos.etiqueta}>Altura (metros)</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={altura.toString()}
          onChangeText={onCambiarAlturaTexto}
        />
        <View style={estilos.contenedorBotones}>
          <BotonPersonalizado
            titulo="- 1 CM"
            onPress={onDisminuirAltura}
            colorFondo="#d32f2f"
          />
          <BotonPersonalizado
            titulo="+ 1 CM"
            onPress={onAumentarAltura}
            colorFondo="#388e3c"
          />
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    width: "100%",
  },
  tarjetaControl: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
    elevation: 2,
  },
  etiqueta: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#333333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1bcbc",
    borderRadius: 6,
    padding: 10,
    width: "80%",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  contenedorBotones: {
    flexDirection: "row",
    gap: 15,
  },
});
