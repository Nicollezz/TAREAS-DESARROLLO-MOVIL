export type CategoriaImc =
  | "Bajo peso"
  | "Peso normal"
  | "Sobrepeso"
  | "Obesidad";

export interface PropiedadesResultado {
  imc: number;
  categoria: CategoriaImc;
}

export interface PropiedadesFormulario {
  peso: number;
  altura: number;
  onAumentarPeso: () => void;
  onDisminuirPeso: () => void;
  onCambiarPesoTexto: (valor: string) => void;
  onAumentarAltura: () => void;
  onDisminuirAltura: () => void;
  onCambiarAlturaTexto: (valor: string) => void;
}

export interface PropiedadesBoton {
  titulo: string;
  onPress: () => void;
  colorFondo?: string;
}
