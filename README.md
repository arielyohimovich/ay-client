# Full Stack App - Frontend

## Overview
This is the frontend service for a mini full-stack project. The frontend is built with TypeScript and React using Vite. It receives messages from the backend and displays them to the user. The primary goal of this project is to deploy the application using Kubernetes on AWS.

## Features
- React with TypeScript
- Fetches and displays messages from the backend
- Vite for fast development and optimized builds
- Dockerized for containerization
- Kubernetes deployment setup
- AWS deployment using Kubernetes

## Technologies Used
- React
- TypeScript
- Vite
- Docker
- Kubernetes
- AWS

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [AWS CLI](https://aws.amazon.com/cli/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ariel93/ay-frontend.git
   cd ay-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. The frontend should be running at `http://localhost:5173`.

### Docker Setup
To run the frontend in a Docker container:
```sh
# Build the Docker image
docker build -t ay-frontend .

# Run the container
docker run -p 5173:5173 ay-frontend
```

## Kubernetes Deployment
1. Apply Kubernetes deployment:
   ```sh
   kubectl apply -f k8s-frontend-deployment.yaml
   ```
2. Verify the pods:
   ```sh
   kubectl get pods
   ```
3. Expose the service:
   ```sh
   kubectl expose deployment ay-frontend --type=LoadBalancer --port=5173
   ```

## Deploying to AWS
1. Ensure AWS CLI is configured:
   ```sh
   aws configure
   ```
2. Deploy Kubernetes cluster using EKS (Elastic Kubernetes Service)
   ```sh
   eksctl create cluster --name my-cluster --region us-east-1
   ```
3. Deploy the frontend service to AWS EKS
   ```sh
   kubectl apply -f k8s-frontend-deployment.yaml
   ```

## Contributing
Feel free to fork the repository and submit pull requests!

## License
This project is licensed under the MIT License.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


