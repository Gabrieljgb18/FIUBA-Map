export const quimica = [
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    level: 0,
  },
  {
    id: "61.03",
    materia: "Análisis Matemático II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "62.01",
    materia: "Física I A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "63.02",
    materia: "Química I",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "61.08",
    materia: "Álgebra II A",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "62.04",
    materia: "Física II B",
    creditos: 6,
    correlativas: "61.03-62.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "75.01",
    materia: "Computación",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "63.13",
    materia: "Química Inorgánica",
    creditos: 8,
    correlativas: "63.02",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "75.12",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "61.03-61.08-75.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "76.45",
    materia: "Termodinámica de los Procesos",
    creditos: 10,
    correlativas: "62.01-63.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "63.14",
    materia: "Química Orgánica",
    creditos: 10,
    correlativas: "63.13",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "61.14",
    materia: "Matemática Especial para Ingeniería Química",
    creditos: 8,
    correlativas: "61.03-61.08",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "76.46",
    materia: "Introducción a la Ingeniería Química",
    creditos: 6,
    correlativas: "76.45",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "61.06",
    materia: "Probabilidad y Estadística A",
    creditos: 4,
    correlativas: "61.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "63.15",
    materia: "Química Analítica Instrumental",
    creditos: 8,
    correlativas: "63.13-63.14-62.04",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "65.48",
    materia: "Laboratorio de Instalaciones Eléctricas",
    creditos: 4,
    correlativas: "62.04-76.46",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "76.47",
    materia: "Fenómenos de Transporte",
    creditos: 10,
    correlativas: "76.46-61.14",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "76.48",
    materia: "Evaluación de Propiedades Físicas",
    creditos: 6,
    correlativas: "76.45-61.06",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "63.16",
    materia: "Química Física",
    creditos: 6,
    correlativas: "63.13-76.45-63.15",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "77.08",
    materia: "Seguridad Ambiental y del Trabajo B",
    creditos: 4,
    requiere: 100,
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.49",
    materia:
      "Operaciones Unitarias de Transferencia de Cantidad de Movimiento y Energía",
    creditos: 10,
    correlativas: "76.47",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.52",
    materia: "Operaciones Unitarias de Transferencia de Materia",
    creditos: 10,
    correlativas: "76.48-76.47",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "76.54",
    materia: "Instalaciones de Plantas de Procesos",
    creditos: 8,
    correlativas: "76.49",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "76.53",
    materia: "Diseño de Reactores",
    creditos: 10,
    correlativas: "76.49-63.16-75.12",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "76.55",
    materia: "Microbiología Industrial",
    creditos: 6,
    correlativas: "63.14",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "76.56",
    materia: "Instrumentación y Control de Plantas Químicas",
    creditos: 10,
    correlativas: "76.49-76.52",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "76.57",
    materia: "Diseño de Procesos",
    creditos: 6,
    correlativas: "76.52",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "76.58",
    materia: "Emisiones de Contaminantes Químicos y Biológicos",
    creditos: 4,
    correlativas: "76.52-76.55",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "71.28",
    materia: "Legislación y Ejercicio Profesional de la Ingeniería Química",
    creditos: 4,
    requiere: 140,
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "62.13",
    materia: "Física III C",
    creditos: 6,
    correlativas: "62.04",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "62.18",
    materia: "Física de los Fluidos",
    creditos: 4,
    correlativas: "76.47",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "63.10",
    materia: "Termodinámica Estadística",
    creditos: 6,
    correlativas: "63.16",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "67.13",
    materia: "Conocimiento de Materiales I",
    creditos: 6,
    correlativas: "63.14",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "67.57",
    materia: "Elementos Finitos Avanzados en la Mecánica de Fluidos",
    creditos: 6,
    correlativas: "67.58",
    categoria: "Materias Electivas",
    level: 14,
  },
  {
    id: "67.58",
    materia: "Intr. al Método de los Elementos Finitos",
    creditos: 6,
    correlativas: "75.12-76.47",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "67.59",
    materia: "Mecánica del Continuo",
    creditos: 6,
    correlativas: "67.60-76.47",
    categoria: "Materias Electivas",
    level: 14,
  },
  {
    id: "67.60",
    materia: "Introducción al Análisis Tensorial",
    creditos: 4,
    correlativas: "61.03-61.08",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "75.38",
    materia: "Análisis Numérico II A",
    creditos: 6,
    correlativas: "75.12",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "76.16",
    materia: "Electroquímica",
    creditos: 4,
    correlativas: "63.16-76.47",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "76.17",
    materia: "Procesos Electroquímicos",
    creditos: 4,
    correlativas: "76.16",
    categoria: "Materias Electivas",
    level: 14,
  },
  {
    id: "76.18",
    materia: "Fisicoquímica Especial",
    creditos: 6,
    correlativas: "63.16",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "76.22",
    materia: "Fundamentos de la Ing. de Reservorios",
    creditos: 8,
    correlativas: "76.47",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "76.23",
    materia: "Recuperación Asistida de Petróleo",
    creditos: 4,
    correlativas: "76.22",
    categoria: "Materias Electivas",
    level: 14,
  },
  {
    id: "76.24",
    materia: "Fundamentos de la Simulación Numérica de Reservorio",
    creditos: 6,
    correlativas: "76.22",
    categoria: "Materias Electivas",
    level: 15,
  },
  {
    id: "76.25",
    materia: "Explotación de Yacimientos",
    creditos: 8,
    correlativas: "62.04-76.46",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "76.27",
    materia: "Control Estadístico de Procesos",
    creditos: 6,
    correlativas: "61.06",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "76.28",
    materia: "Gestión Recursos en la Industria de Procesos",
    creditos: 4,
    correlativas: "76.47",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "76.29",
    materia: "Industria de Procesos",
    creditos: 4,
    correlativas: "76.52",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "76.30",
    materia: "Industrias Alimenticias",
    creditos: 4,
    correlativas: "76.49",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "76.51",
    materia: "Introducción a la Planificación Interactiva",
    creditos: 4,
    requiere: 140,
    categoria: "Materias Electivas",
    level: 15,
  },
  {
    id: "76.63",
    materia: "Diseño Avanzado de Reactores",
    creditos: 6,
    correlativas: "76.53",
    categoria: "Materias Electivas",
    level: 15,
  },
  {
    id: "78.xx",
    materia: "Idioma",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "71.53",
    materia: "Evaluación de Proyectos de Plantas Químicas",
    creditos: 6,
    requiere: 100,
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "76.60",
    materia: "Laboratorio de Operaciones y Procesos",
    creditos: 4,
    correlativas: "76.52-76.53-77.08",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "76.61",
    materia: "Bioingeniería",
    creditos: 6,
    correlativas: "76.52-76.53-76.55",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "76.64",
    materia: "Tesis de Ingeniería Química",
    creditos: 18,
    correlativas: "76.52-76.53",
    categoria: "Fin de Carrera",
    level: -1,
  },
  {
    id: "76.59-76.62",
    materia: "Trabajo Profesional de Ingeniería Química",
    creditos: 12,
    correlativas: "76.52-76.53-76.56",
    categoria: "Fin de Carrera",
    level: -1,
  },
];
