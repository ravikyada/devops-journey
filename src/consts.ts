// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'DevOps Journey';
export const SITE_DESCRIPTION = 'Senior DevOps Engineer specializing in AWS, Kubernetes, Terraform, Docker, and CI/CD. Building scalable cloud infrastructure and automating deployments.';
export const SITE_URL = 'https://ravikyada.github.io/devops-journey'; // Update with actual GitHub Pages URL
export const BASE_PATH = '/devops-journey';

export const withBasePath = (path: string): string => {
	if (!path || path === '/') return `${BASE_PATH}/`;
	if (path.startsWith(BASE_PATH)) return path;
	return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
};
