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
			en: 'Discover TypeScript',
			fr: 'Découvrez TypeScript'
		},
		issuer: 'OpenClassrooms',
		year: 'avril 2026',
		link: 'https://openclassrooms.com/course-certificates/5219891141'
	},
	{
		title: {
			en: 'Discover Python libraries for Data Science',
			fr: 'Découvrez les librairies Python pour la Data Science'
		},
		issuer: 'OpenClassrooms',
		year: 'févr. 2025',
		link: 'https://openclassrooms.com/fr/course-certificates/5519154324'
	},
	{
		title: {
			en: 'Go Essentials',
			fr: "L'essentiel de Go"
		},
		issuer: 'LinkedIn Learning',
		year: 'juil. 2024',
		link: 'https://www.linkedin.com/learning/certificates/0433c1d1dde4a80585a67915c4aa9ce8826e32165f86882c449c8a64f8cb702a'
	},
	{
		title: { en: 'Unit Testing with Python (pytest)', fr: 'Tests Unitaires avec Python (pytest)' },
		issuer: 'LinkedIn Learning',
		year: 'juin 2024'
	},
	{
		title: { en: 'Docker Advanced Concepts', fr: 'Concepts Avancés Docker' },
		issuer: 'LinkedIn Learning',
		year: 'juin 2024'
	},
	{
		title: {
			en: 'Write JavaScript for the web',
			fr: 'Écrivez du JavaScript pour le web'
		},
		issuer: 'OpenClassrooms',
		year: 'févr. 2023',
		link: 'https://openclassrooms.com/fr/course-certificates/3025212487'
	},
	{
		title: { en: 'Advanced Docker Deployment', fr: 'Déploiement Docker Avancé' },
		issuer: 'OpenClassrooms',
		year: '2023'
	},
	{
		title: {
			en: 'Design a website with Flask',
			fr: 'Concevez un site avec Flask'
		},
		issuer: 'OpenClassrooms',
		year: 'juil. 2022',
		link: 'https://openclassrooms.com/fr/course-certificates/7461428000'
	},
	{
		title: {
			en: 'Set up an API with Django REST Framework',
			fr: 'Mettez en place une API avec Django REST Framework'
		},
		issuer: 'OpenClassrooms',
		year: 'mars 2022',
		link: 'https://openclassrooms.com/fr/course-certificates/7461428000'
	},
	{
		title: {
			en: 'Deploy a Django application',
			fr: 'Déployez une application Django'
		},
		issuer: 'OpenClassrooms',
		year: 'août 2021',
		link: 'https://openclassrooms.com/fr/course-certificates/2237754128'
	},
	{
		title: {
			en: 'Start your project with Python',
			fr: 'Démarrez votre projet avec Python'
		},
		issuer: 'OpenClassrooms',
		year: 'août 2020',
		link: 'https://openclassrooms.com/fr/course-certificates/6226786152'
	},
	{
		title: {
			en: 'Create your website with HTML5 and CSS3',
			fr: 'Créez votre site web avec HTML5 et CSS3'
		},
		issuer: 'OpenClassrooms',
		year: 'déc. 2019',
		link: 'https://openclassrooms.com/fr/course-certificates/9743666606'
	}
];
