export type Project = {
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	stack: string[];
	featured: boolean;
	github?: string;
	demo?: string;
	highlights: string[];
	architecture: string[];
};

export const projects: Project[] = [
	{
		slug: 'ecommerce-microservices',
		title: 'E-commerce Microservices Platform',
		description:
			'A production-ready microservices MVP with auth, catalog, cart, orders and deployment.',
		longDescription:
			'This project demonstrates how to build and deploy a modern e-commerce backend using microservices, Docker, API security best practices, and observability tooling.',
		stack: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Nginx'],
		featured: true,
		github: 'https://github.com/flavien-hugs/ecommerce-microservices',
		demo: '',
		highlights: [
			'JWT auth + refresh token rotation',
			'Redis caching + cart session storage',
			'Docker Compose production deployment',
			'API documentation + OpenAPI',
			'Rate limiting and RBAC'
		],
		architecture: [
			'API Gateway (Nginx)',
			'Auth Service',
			'Catalog Service',
			'Orders Service',
			'Cart Service (Redis)',
			'PostgreSQL + MongoDB'
		]
	},
	{
		slug: 'secure-auth-service',
		title: 'Secure Auth Service',
		description: 'A dedicated authentication service with RBAC and brute-force protection.',
		longDescription:
			'This service focuses on authentication and security: refresh rotation, blacklist tokens, password reset, RBAC, and rate limiting.',
		stack: ['FastAPI', 'PostgreSQL', 'Redis'],
		featured: true,
		github: 'https://github.com/flavien-hugs/secure-auth-service',
		highlights: [
			'Access + Refresh tokens rotation',
			'Brute force protection (rate limit)',
			'Password reset workflow',
			'RBAC permissions system'
		],
		architecture: ['FastAPI REST API', 'PostgreSQL database', 'Redis token storage']
	},
	{
		slug: 'async-job-processor',
		title: 'Async Job Processor',
		description: 'Background tasks processing system with retries, queue, and monitoring.',
		longDescription:
			'This project showcases async task execution with a queue system, job retries, and persistence.',
		stack: ['FastAPI', 'Celery', 'Redis', 'Docker'],
		featured: false,
		github: 'https://github.com/flavien-hugs/async-job-processor',
		highlights: [
			'Queue + worker system',
			'Retry strategy + dead letter queue',
			'Task monitoring'
		],
		architecture: ['FastAPI API', 'Redis broker', 'Celery workers']
	},
	{
		slug: 'oriens-engine',
		title: 'Oriens Engine (Recommendation API)',
		description: 'A rules-based recommendation engine for academic guidance.',
		longDescription:
			'Oriens Engine uses a custom scoring algorithm to match students with academic programs. Built with a strict Hexagonal Architecture, it features an Explanation Engine for transparent AI, a Scoring Engine, and a School Filtering Engine.',
		stack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
		featured: true,
		github: 'https://github.com/flavien-hugs/oriens-engine',
		highlights: [
			'Hexagonal Architecture implementation',
			'Custom Rules-based Scoring Algorithm',
			'Transparent Recommendation Explanations',
			'Data Validation with Pydantic'
		],
		architecture: [
			'FastAPI Gateway',
			'RecommendProgramsUseCase',
			'ScoringEngine & ExplanationEngine',
			'PostgreSQL Repository'
		]
	}
];
