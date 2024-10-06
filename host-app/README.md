# Microfrontend Project Documentation

## Overview

This project consists of multiple microfrontends that integrate into a single cohesive application. The microfrontend architecture enables modular development and deployment, making it scalable and easy to maintain. Below, you will find instructions on how to set up the development environment, build the project, and a list of the required software.

## Prerequisites

Make sure the following software is installed on your system:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** for package management
- **Docker** (optional, for containerized environments)
- **Git** for version control

## Development Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   For each microfrontend, navigate to its folder and install the dependencies:

   ```bash
   cd host-app
   npm install

   cd ../events-app
   npm install

   cd ../checkout-app
   npm install
   ```

3. **Start the Development Environment**

   To start each microfrontend for development, run the following commands in **separate terminal windows**:

   ```bash
   cd host-app
   npm run dev

   cd ../events-app
   npm run dev

   cd ../checkout-app
   npm run dev
   ```

   Access the host app at `http://localhost:5173/`

## Building the Project

To build the microfrontends for production, run the following commands for each microfrontend:

```bash
cd host-app
npm run build

cd ../events-app
npm run build

cd ../checkout-app
npm run build
```

The build output will be available in the `dist` folder.

## Deployment

You can use any web server or cloud service to host the build files. Common options include:

- **Amazon S3 + CloudFront**
- **NGINX**
- **GitHub Pages** (for static hosting)

The deployment scripts are included in the repository for convenience.
