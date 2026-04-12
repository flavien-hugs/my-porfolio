import { type LocalizedString } from '$lib/i18n.svelte';

export type Project = {
	slug: string;
	title: string | LocalizedString;
	description: string | LocalizedString;
	longDescription: string | LocalizedString;
	stack: string[];
	featured: boolean;
	github?: string;
	demo?: string;
	highlights: (string | LocalizedString)[];
	architecture: (string | LocalizedString)[];
	challenge?: { en: string; fr: string };
	solution?: { en: string; fr: string };
	status?: 'production' | 'development';
};

export const projects: Project[] = [
	{
		slug: 'paygate-africa',
		title: 'Paygate Africa',
		description: {
			en: 'Unified abstraction layer for African payment gateways with zero dependencies.',
			fr: "Couche d'abstraction unifiée pour les passerelles de paiement africaines."
		},
		longDescription: {
			en: 'Paygate Africa is a lightweight Python package providing a unified API to integrate multiple African payment providers (CinetPay, Kkiapay...). Standardizes flows and avoids external dependencies.',
			fr: 'Paygate Africa est un package Python léger offrant une API unifiée pour intégrer plusieurs fournisseurs de paiement africains. Il standardise les flux et évite les dépendances externes.'
		},
		stack: ['Python', 'SDK Design', 'Payment APIs'],
		featured: true,
		github: 'https://github.com/flavien-hugs/paygate-africa',
		demo: 'https://flavien-hugs.github.io/paygate-africa/',
		highlights: [
			{
				en: 'Unified interface for multiple gateways',
				fr: 'Interface unifiée pour plusieurs passerelles'
			},
			{ en: 'Zero external dependencies', fr: 'Zéro dépendance externe' },
			{
				en: 'Clean architecture & extensible design',
				fr: 'Architecture propre et design extensible'
			}
		],
		architecture: [
			{ en: 'Provider Abstraction Layer', fr: "Couche d'abstraction des fournisseurs" },
			{ en: 'Gateway Interface', fr: 'Interface de passerelle' },
			{ en: 'Unified Transaction API', fr: 'API de transaction unifiée' }
		],
		challenge: {
			en: 'Standardizing wildly different API responses and error codes from various African banks into a single, predictable developer interface.',
			fr: "Standardisation des réponses API et des codes d'erreur très disparates des banques africaines en une interface développeur unique et prévisible."
		},
		solution: {
			en: 'Implemented a strict Adapter pattern with a custom Error Mapping engine that normalizes provider-specific failures into high-level business exceptions.',
			fr: "Implémentation d'un pattern Adapter strict avec un moteur de mappage d'erreurs personnalisé qui normalise les échecs spécifiques aux fournisseurs en exceptions métier de haut niveau."
		}
	},
	{
		slug: 'laregina-marketplace',
		title: 'LaRegina Marketplace',
		description: {
			en: 'Multi-vendor marketplace platform for product listing and order management.',
			fr: 'Plateforme de marketplace multi-vendeurs pour la gestion de produits et commandes.'
		},
		longDescription: {
			en: 'Backend-driven marketplace system designed to handle multi-vendor commerce flows. Supports product management per seller and transaction tracking.',
			fr: 'Système backend de marketplace conçu pour gérer les flux de commerce multi-vendeurs. Supporte la gestion des produits par vendeur et le suivi des transactions.'
		},
		stack: ['Python', 'Django', 'Marketplace Design'],
		featured: true,
		github: 'https://github.com/flavien-hugs/laregina-marketplace',
		highlights: [
			{ en: 'Multi-vendor SaaS architecture', fr: 'Architecture SaaS multi-vendeur' },
			{ en: 'Order lifecycle management', fr: 'Gestion du cycle de vie des commandes' },
			{ en: 'Financial flow modeling', fr: 'Modélisation des flux financiers' }
		],
		architecture: [
			{ en: 'Identity & Access (Customers/Sellers)', fr: 'Gestion Identité & Accès' },
			{ en: 'Order Processing Service', fr: 'Service de traitement des commandes' },
			{ en: 'Transaction Layer', fr: 'Couche de Transaction' }
		]
	},
	{
		slug: 'venone-crm',
		title: 'Venone CRM',
		description: {
			en: 'Real estate CRM for managing properties, clients, leads, and sales workflows.',
			fr: 'CRM immobilier pour la gestion de propriétés, clients, prospects et ventes.'
		},
		longDescription: {
			en: 'Centralized dashboard for real estate agents to manage leads, monitor listings, and track deals. Part of the Venone ecosystem.',
			fr: 'Tableau de bord centralisé pour les agents immobiliers pour gérer les prospects, surveiller les annonces et suivre les ventes.'
		},
		stack: ['Python', 'Flask', 'CRM', 'REST API', 'PostgreSQL'],
		featured: true,
		github: 'https://github.com/flavien-hugs/venone-crm',
		demo: 'https://venonedash.flavienhugs.cc',
		highlights: [
			{
				en: 'Lead mapping and pipeline tracking',
				fr: 'Cartographie des prospects et suivi du pipeline'
			},
			{ en: 'Integrated with Venone ecosystem', fr: 'Intégré à l’écosystème Venone' },
			{ en: 'Business Intelligence Dashboard', fr: 'Tableau de bord de Business Intelligence' }
		],
		architecture: [
			{ en: 'Lead Management Module', fr: 'Module de gestion des prospects' },
			{ en: 'Relationship Management Layer', fr: 'Couche de gestion de la relation client' },
			{ en: 'Pipeline Service', fr: 'Service de Pipeline' }
		],
		status: 'production'
	},
	{
		slug: 'venone-web',
		title: 'Venone (Web Platform)',
		description: {
			en: 'Real estate management system for property rental and sales.',
			fr: 'Système de gestion immobilier pour la location et la vente de biens.'
		},
		longDescription: {
			en: 'Full-featured real estate platform designed to manage property rentals and sales for agents and tenants.',
			fr: 'Plateforme immobilière complète conçue pour gérer les locations et ventes pour les agents et locataires.'
		},
		stack: ['Python', 'Flask', 'PostgreSQL'],
		featured: true,
		github: 'https://github.com/flavien-hugs/venone-web',
		demo: 'https://venoneweb.flavienhugs.cc',
		highlights: [
			{ en: 'Web + Mobile ecosystem', fr: 'Écosystème Web + Mobile' },
			{ en: 'Tenant & contract management', fr: 'Gestion des locataires et contrats' },
			{ en: 'Search and filtering systems', fr: 'Systèmes de recherche et filtrage' }
		],
		architecture: [
			{ en: 'Rental Workflow Engine', fr: 'Moteur de workflow de location' },
			{ en: 'Identity Service', fr: 'Service d’identité' },
			{ en: 'Multiformat client API', fr: 'API client multiformat' }
		],
		status: 'production'
	},
	{
		slug: 'mp3music-player',
		title: 'Python MP3 Player',
		description: {
			en: 'Lightweight desktop music player built with Python and Tkinter.',
			fr: 'Lecteur de musique desktop léger construit avec Python et Tkinter.'
		},
		longDescription: {
			en: 'A simple desktop application demonstrating fundamental GUI programming and audio handling in Python.',
			fr: 'Une application desktop simple démontrant la programmation GUI fondamentale et la gestion audio en Python.'
		},
		stack: ['Python', 'Tkinter', 'Pygame'],
		featured: true,
		github: 'https://github.com/flavien-hugs/mp3music-player',
		highlights: [
			{ en: 'Local audio playback engine', fr: 'Moteur de lecture audio locale' },
			{ en: 'Simple/Clean user interface', fr: 'Interface utilisateur simple/propre' },
			{ en: 'File loading & playlist logic', fr: 'Chargement de fichiers & logique de playlist' }
		],
		architecture: [
			{ en: 'GUI Layer (Tkinter)', fr: 'Couche GUI (Tkinter)' },
			{ en: 'Audio Engine (Pygame)', fr: 'Moteur Audio (Pygame)' }
		]
	},
	{
		slug: 'kozondjango',
		title: 'KozonDjango',
		description: {
			en: 'A Django application designed to practice core framework concepts.',
			fr: 'Une application Django conçue pour pratiquer les concepts clés du framework.'
		},
		longDescription: {
			en: 'Experimental platform to explore core Django tools like models, views, and authentication.',
			fr: 'Plateforme expérimentale pour explorer les outils Django tels que les modèles, les vues et l’authentification.'
		},
		stack: ['Python', 'Django', 'Learning'],
		featured: false,
		github: 'https://github.com/flavien-hugs/kozondjango',
		highlights: [
			{ en: 'Best practices implementation', fr: 'Implémentation des bonnes pratiques' },
			{ en: 'Structured learning approach', fr: 'Approche d’apprentissage structurée' }
		],
		architecture: [{ en: 'Classic Django MTV', fr: 'Django MTV Classique' }]
	},
	{
		slug: 'auction-api-architecture',
		title: 'Auction API (Clean Architecture)',
		description: {
			en: 'A high-integrity auction management system built with FastAPI and Clean Architecture.',
			fr: "Système de gestion d'enchères conçu avec FastAPI et Clean Architecture."
		},
		longDescription: {
			en: 'This project implements an auction system focusing on architectural integrity. It uses Clean Architecture (Hexagonal) to decouple business logic from external drivers, with rigorous TDD and domain-driven design.',
			fr: "Projet implémentant un système d'enchères axé sur l'intégrité architecturale. Utilisation de la Clean Architecture (Hexagonale) pour découpler la logique métier, avec TDD rigoureux et DDD."
		},
		stack: ['Python', 'FastAPI', 'TDD', 'Clean Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/fastapi-clean-architecture',
		highlights: [
			{ en: 'Strict Clean Architecture pattern', fr: 'Pattern Clean Architecture strict' },
			{ en: 'Comprehensive TDD coverage', fr: 'Couverture TDD complète' },
			{ en: 'Domain-Driven Design (DDD)', fr: 'Domain-Driven Design (DDD)' }
		],
		architecture: [
			{ en: 'Domain Entities & Use Cases', fr: 'Entités du Domaine & Cas d’Utilisation' },
			{ en: 'Dependency Inversion Layer', fr: 'Couche d’Inversion de Dépendance' },
			{ en: 'Infrastructure Adapters (Repo, API)', fr: 'Adapteurs d’Infrastructure (Repo, API)' }
		]
	},
	{
		slug: 'kareeba-microservices',
		title: 'Kareeba Backend (Microservices)',
		description: {
			en: 'FastAPI REST API designed for a marketplace using microservices architecture.',
			fr: 'API REST FastAPI pour une marketplace utilisant une architecture microservices.'
		},
		longDescription: {
			en: 'Robust backend for a multi-vendor marketplace, leveraging MongoDB for flexible data modeling and Docker for service orchestration.',
			fr: "Backend robuste pour une marketplace multi-vendeur, exploitant MongoDB pour la modélisation et Docker pour l'orchestration des services."
		},
		stack: ['FastAPI', 'MongoDB', 'Microservices', 'Docker'],
		featured: true,
		github: 'https://github.com/flavien-hugs/kareeba-backend',
		highlights: [
			{ en: 'Microservices service decomposition', fr: 'Décomposition en microservices' },
			{ en: 'NoSQL modeling with MongoDB', fr: 'Modélisation NoSQL avec MongoDB' },
			{ en: 'Dockerized development environment', fr: 'Environnement Dockerisé' }
		],
		architecture: [
			{ en: 'Service Registry & Gateway', fr: 'Registre de Services & Gateway' },
			{ en: 'MongoDB Data Persistence', fr: 'Persistence MongoDB' },
			{ en: 'Asynchronous Service Communication', fr: 'Communication Asynchrone' }
		]
	},
	{
		slug: 'django-ninja-keycloak',
		title: 'Django Ninja + Keycloak',
		description: {
			en: 'Secure integration of Django Ninja with Keycloak for Identity Management.',
			fr: 'Intégration sécurisée de Django Ninja avec Keycloak pour la gestion d’identité.'
		},
		longDescription: {
			en: 'Demonstrates a modern approach to authentication by integrating the fast Django Ninja framework with Keycloak (OAuth2/OIDC). Features secure token rotation and RBAC.',
			fr: "Démontre une approche moderne de l'authentification en intégrant Django Ninja avec Keycloak (OAuth2/OIDC). Gestion des tokens et RBAC."
		},
		stack: ['Django Ninja', 'Keycloak', 'OAuth2', 'OIDC'],
		featured: true,
		github: 'https://github.com/flavien-hugs/djn-keycloak',
		highlights: [
			{ en: 'Typed API with Django Ninja', fr: 'API typée avec Django Ninja' },
			{ en: 'Keycloak OIDC Integration', fr: 'Intégration Keycloak OIDC' },
			{ en: 'Secure RBAC implementation', fr: 'Implémentation RBAC sécurisée' }
		],
		architecture: [
			{ en: 'Identity Provider (Keycloak)', fr: 'Fournisseur d’Identité (Keycloak)' },
			{ en: 'Middleware Auth Layer', fr: 'Couche Middleware d’Authentification' },
			{ en: 'Pydantic Data Schemas', fr: 'Schémas de données Pydantic' }
		]
	},
	{
		slug: 'comet-game-pygame',
		title: 'Comet Game',
		description: {
			en: 'A war-themed arcade game developed with Python and Pygame.',
			fr: 'Un jeu de guerre d’arcade développé avec Python et Pygame.'
		},
		longDescription: {
			en: 'A defensive arcade game where players protect their territory from falling comets. Inspired by classic game patterns and rebuilt with a custom OOP structure to ensure modularity and ease of asset integration.',
			fr: 'Un jeu d’arcade défensif où le joueur protège son territoire contre des comètes. Inspiré par des patterns classiques et réécrit avec une structure OOP personnalisée pour assurer la modularité.'
		},
		stack: ['Python', 'Pygame', 'Game Design'],
		featured: false,
		github: 'https://github.com/flavien-hugs/commet-game',
		highlights: [
			{ en: 'Collision detection algorithms', fr: 'Algorithmes de détection de collision' },
			{ en: 'Modular entity system', fr: 'Système d’entités modulaire' },
			{
				en: 'Score tracking & difficulty scaling',
				fr: 'Suivi de score & progression de difficulté'
			}
		],
		architecture: [
			{ en: 'State Management (Game, Player)', fr: 'Gestion d’État (Jeu, Joueur)' },
			{ en: 'Event Handling System', fr: 'Système de Gestion d’Événements' },
			{ en: 'Rendering Pipeline', fr: 'Pipeline de Rendu' }
		]
	}
];
