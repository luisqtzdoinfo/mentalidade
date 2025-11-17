export type Question = {
  id: number;
  question: string;
  answers: string[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Quando você decide fazer algo importante, o que acontece na prática?",
    answers: [
      "Eu faço imediatamente.",
      "Eu faço… mas só quando dá vontade.",
      "Eu planejo, mas raramente começo.",
      "Eu adio até esquecer.",
    ],
  },
  {
    id: 2,
    question: "Você costuma cumprir o que promete para si mesmo?",
    answers: [
      "Sempre.",
      "Quase sempre.",
      "Às vezes.",
      "Quase nunca (e isso me irrita).",
    ],
  },
  {
    id: 3,
    question: "Nos dias ruins, você…",
    answers: [
      "Age mesmo sem vontade.",
      "Faz só o básico.",
      "Desiste rápido.",
      "Nem tenta.",
    ],
  },
  {
    id: 4,
    question: "Seu foco hoje é…",
    answers: [
      "Inquebrável.",
      "Bom, mas distrações me vencem às vezes.",
      "Fraco.",
      "Quase inexistente.",
    ],
  },
  {
    id: 5,
    question: "O que mais te trava de evoluir?",
    answers: [
      "Falta de consistência.",
      "Procrastinação.",
      "Desorganização.",
      "Falta de clareza.",
    ],
  },
  {
    id: 6,
    question: "Quando você cai, quanto tempo leva para voltar?",
    answers: [
      "No mesmo dia.",
      "No dia seguinte.",
      "Na semana seguinte.",
      "Só volto quando a culpa aperta.",
    ],
  },
  {
    id: 7,
    question: "O quanto você sente que sua própria mente te sabota?",
    answers: ["Quase nunca.", "Às vezes.", "Muito.", "O tempo todo."],
  },
];
