export type Education = {
	degree: { en: string; fr: string };
	institution: { en: string; fr: string } | string;
	period: { en: string; fr: string } | string;
	status: 'completed' | 'in-progress';
	location?: string;
};

export type Certification = {
	title: { en: string; fr: string } | string;
	issuer: { en: string; fr: string } | string;
	year: string;
	link?: string;
};

export const education: Education[] = [
	{
		degree: {
			en: "Master's in Economics (M1)",
			fr: 'Master 1 en Économie'
		},
		institution: {
			en: 'Université Alassane Ouattara',
			fr: 'Université Alassane Ouattara'
		},
		period: {
			en: '2017 - 2018',
			fr: '2017 - 2018'
		},
		status: 'completed',
		location: "Bouaké, Côte d'Ivoire"
	},

	{
		degree: {
			en: 'Self-taught / Professional Backend Engineering Track',
			fr: 'Parcours autodidacte / Développeur Backend'
		},
		institution: {
			en: 'Professional Experience & Online Learning',
			fr: 'Expérience professionnelle & formations en ligne'
		},
		period: {
			en: '2019 - Present',
			fr: '2019 - Présent'
		},
		status: 'in-progress',
		location: "Remote / Côte d'Ivoire"
	}
];

export const certifications: Certification[] = [
	{
		title: {
			en: 'Build REST APIs with Django REST Framework',
			fr: 'Construire des API REST avec Django REST Framework'
		},
		issuer: 'OpenClassrooms',
		year: '2024',
		link: 'https://openclassrooms.com/course-certificates/4974284327'
	},
	{
		title: { en: 'Advanced Docker Deployment', fr: 'Déploiement Docker Avancé' },
		issuer: 'OpenClassrooms',
		year: '2023'
	},
	{
		title: { en: 'Docker Advanced Concepts', fr: 'Concepts Avancés Docker' },
		issuer: 'LinkedIn Learning',
		year: '2023'
	},
	{
		title: { en: 'Unit Testing with Python (pytest)', fr: 'Tests Unitaires avec Python (pytest)' },
		issuer: 'LinkedIn Learning',
		year: '2025'
	}
];
