export type Experience = {
  company: string;
  period: { start: Date; end: Date | null };
  technologies: string[];
  positions: Array<{
    period?: { start: Date; end: Date | null };
    title: string;
    description: string;
  }>;
};

export const experiences: Experience[] = [
  {
    company: "Loggi",
    positions: [
      {
        title: "Desenvolvedor Front-end II",
        description:
          "Desenvolvimento de aplicativos mobile, com foco em performance e usabilidade. Manutenção de aplicações web.",
      },
    ],
    period: {
      start: new Date(2024, 8),
      end: null,
    },
    technologies: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Sentry",
      "MixPanel",
      "Github Actions",
      "Design Systems",
      "Jest",
    ],
  },
  {
    company: "PJBank Pagamentos S.A.",
    positions: [
      {
        title: "Desenvolvedor mobile Sênior",
        period: {
          start: new Date(2022, 9),
          end: new Date(2024, 8),
        },
        description:
          "Desenvolvimento de aplicativos mobile, com foco em performance e usabilidade. Manutenção de aplicações web.",
      },
      // {
      //   title: "Desenvolvedor Mobile I",
      //   period: {
      //     start: new Date(2021, 9),
      //     end: new Date(2022, 8),
      //   },
      //   description:
      //     "Desenvolvimento de aplicativos mobile, com foco em performance e usabilidade. Manutenção de aplicações web.",
      // },
      // {
      //   title: "Desenvolvedor Mobile Junior IV",
      //   period: {
      //     start: new Date(2019, 9),
      //     end: new Date(2021, 8),
      //   },
      //   description:
      //     "Desenvolvimento de aplicativos mobile, com foco em performance e usabilidade. Manutenção de aplicações web.",
      // },
    ],
    period: {
      start: new Date(2019, 9),
      end: new Date(2024, 8),
    },
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Firebase",
      "Sentry",
      "MixPanel",
      "Github Actions",
      "Design Systems",
      "PHP",
      "Redux",
      "Detox",
      "Jest",
    ],
  },
  {
    company: "Agência Road Tech",
    positions: [
      {
        title: "Co-fundador e desenvolvedor",
        description:
          "Desenvolvimento de aplicativos mobile, com foco em performance e usabilidade. Manutenção de aplicações web.",
      },
    ],
    period: {
      start: new Date(2018, 10),
      end: new Date(2020, 8),
    },
    technologies: [
      "PHP",
      "Java",
      "Javascript",
      "React Native",
      "React",
      "Expo",
      "TypeScript",
      "Firebase",
      "Sentry",
    ],
  },
];

const xpYearsCount =
  new Date().getFullYear() -
  experiences[experiences.length - 1].period.start.getFullYear();

export const me = {
  name: "Lucas Cruz",
  role: "Software Engineer | Senior Mobile Developer | Frontend Specialist",
  photo: "https://github.com/lucasoliveiracruz.png",
  socials: {
    linkedin: "https://linkedin.com/in/lucasoliveiracruz",
    github: "https://github.com/lucasoliveiracruz",
    site: "https://lucasoliveiracruz.github.io",
  },
  about: [
    `Sou Lucas, desenvolvedor front-end especialista em React Native. Com mais de ${xpYearsCount} anos de experiência em desenvolvimento e ${xpYearsCount - 1} anos focado em mobile`,
    "Atualmente trabalho na Loggi, onde desenvolvo aplicativos mobile com foco em performance e usabilidade. Além disso, mantenho aplicações web.",
    "Estou buscando aprofundar meu conhecimento em mobile, focando no Android com Kotlin. Estou estudando Jetpack Compose e coroutines. Isso vai me ajudar a ser um desenvolvedor mais completo e preparado para os desafios do futuro.",
  ],
};
