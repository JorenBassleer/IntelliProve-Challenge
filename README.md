# IntelliProve Challenge

This project is a frontend challenge for **IntelliProve**, built using **Vue 3**, **Vite**, **Pinia**, **Vue router** and **Tailwind CSS**. It features dynamic data visualization, theme switching, and interactive components.

### [View it live](https://intelli-prove-challenge.vercel.app/)

## 🚀 Features
- **Vue 3 Composition API** for modular and efficient code  
- **Tailwind CSS** for rapid UI styling  
- **Dark/Light Mode** with local storage persistence  
- **API Integration** for fetching and displaying user data  
- **Radial Bar Charts** using ApexCharts  

## Project Structure

- **`src/components/`**: Contains modular, reusable base components like buttons, carts, and icons.
- **`src/composables/`**: Includes package wrappers (e.g., Axios, notify,..) and reusable logic/helpers.
- **`src/router/`**: Defines route configurations and navigation logic.
- **`src/store/`**: Manages global state using Pinia.
- **`src/views/`**: Holds page components, with subfolders for page-specific components if needed.

## 📦 Installation
Clone the repository and install dependencies:  
```sh
git clone https://github.com/JorenBassleer/IntelliProve-Challenge.git
cd intelliprove-challenge
npm install
```

## ▶️ Running the Project
Start the development server:  
```sh
npm run dev
```

## Building & Preview
```sh
npm run build && npm run dev
```

## 🔧 Configuration
**Environment Variables:** API key & API URL and configurations should be set in `.env`
```sh
VITE_API_KEY=[YOUR_API_KEY]
VITE_API_URL=[URL_OF_API]
```

## 🎨 Theming
Barebones of theming is implemented
- Dark mode can be toggled via the UI  
- Stores the theme preference in `localStorage`

## 📊 Data Visualization
- Uses **ApexCharts** for interactive radial bar charts  