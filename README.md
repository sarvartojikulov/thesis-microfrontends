# Microfrontend Project Documentation

## Overview

This project is composed of multiple microfrontends that integrate seamlessly into a single application. By utilizing microfrontend architecture, the application is modular, scalable, and easier to maintain. Below are the steps to set up the development environment, build the project, and details about the required software.

## Prerequisites

Ensure the following software is installed on your system:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (for package management)
- **Docker** (optional, for containerized environments)
- **Git** (for version control)

## Development Setup

1. **Install Dependencies**

   For each microfrontend, navigate to its respective folder and install the dependencies:

   ```bash
   cd host-app
   npm install

   cd ../events-app
   npm install

   cd ../checkout-app
   npm install
   ```

2. **Set Up Environment Variables**

   To ensure that all microfrontends communicate with the correct remote services during local development, configure the `.env` file in each microfrontend's folder.

   Create a `.env` file in the `host-app`, `checkout-app`, and `events-app` directories with the following content:

   ```
   VITE_PRODUCTION_DOMAIN="http://localhost:4000"
   ```

   Alternatively, you can run the following commands to automatically create the `.env` files:

   ```bash
   echo VITE_PRODUCTION_DOMAIN="http://localhost:4000" >> host-app/.env
   echo VITE_PRODUCTION_DOMAIN="http://localhost:4000" >> checkout-app/.env
   echo VITE_PRODUCTION_DOMAIN="http://localhost:4000" >> events-app/.env
   ```

3. **Start the Development Servers**

   Start each microfrontend in **separate terminal windows** by running the following commands:

   ```bash
   cd host-app
   npm run dev

   cd ../events-app
   npm run dev

   cd ../checkout-app
   npm run dev
   ```

   After starting, access the host app at `http://localhost:5173/`.

## Building the Project

To build each microfrontend for production, execute the following commands for each microfrontend:

```bash
cd host-app
npm run build

cd ../events-app
npm run build

cd ../checkout-app
npm run build
```

The build output will be located in the `dist` folder of each microfrontend.

## Deployment

The production build files can be hosted on any web server or cloud service. Common hosting options include:

- **Amazon S3 + CloudFront**
- **NGINX**
- **GitHub Pages** (for static hosting)
