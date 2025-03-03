# AI Chat Application - Setup Guide

## Overview
This is an AI-powered chat application leveraging the Gemini API to provide intelligent conversational capabilities. Follow the steps below to set up and run the application locally.

## Prerequisites
Ensure you have the following installed before proceeding:
- Node.js (latest LTS version recommended)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/sidharthtripathi/gemini
```

### 2. Navigate into the Project Directory
```sh
cd gemini
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Set Up the Environment Variables
- Copy the `.env.example` file to `.env`:
  ```sh
  cp .env.example .env
  ```
- Obtain a Gemini API developer key from [Google AI](https://ai.google.dev/)
- Open the `.env` file and set up the Gemini API key:
  ```sh
  GEMINI_API_KEY=your_api_key_here
  ```

### 5. Start the Development Server
```sh
npm run dev
```

### 6. Access the Application
Once the server is running, open your browser and navigate to:
```
http://localhost:5173
```