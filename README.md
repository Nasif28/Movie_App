# 🎬 Movie\_App

> A sleek and responsive mobile application built with **React Native**, **Expo**, and **NativeWind**, allowing users to explore and discover movies effortlessly.

---

## 🚀 Features

* **Modern UI**: Styled using Tailwind CSS via NativeWind for rapid and consistent design.
* **Navigation**: Seamless screen transitions powered by Expo Router.
* **API Integration**: Fetches movie data from The Movie Database (TMDb) API.
* **Responsive Design**: Optimized for both Android and iOS devices.
* **Type Safety**: Utilizes TypeScript for robust type-checking.
* **State Management**: Efficient state handling with React hooks.

---

## 📸 Screenshots

*Include screenshots of your app here to showcase its UI and features.*

---

## 🛠️ Installation

### Prerequisites

* Node.js (v14 or later)
* Expo CLI
* TMDb API Key (You can obtain one by creating an account on [TMDb](https://www.themoviedb.org/))

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nasif28/Movie_App.git
   cd Movie_App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your TMDb API key:

   ```env
   TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server:**

   ```bash
   npx expo start
   ```

   Scan the QR code with the Expo Go app or run on an emulator.

---

## 📁 Project Structure

```
Movie_App/
├── app/                # Contains screens and navigation
├── assets/             # Images and other static assets
├── components/         # Reusable UI components
├── constants/          # Constant values and configurations
├── interfaces/         # TypeScript interfaces
├── services/           # API service calls
├── types/              # Custom TypeScript types
├── .vscode/            # VSCode settings
├── nativewind-env.d.ts # NativeWind environment definitions
├── tailwind.config.js  # Tailwind CSS configuration
├── app.json            # Expo configuration
├── package.json        # Project metadata and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## ⚙️ Technologies Used

* **React Native**: Framework for building native apps using React.
* **Expo**: Toolset for streamlined React Native development.
* **NativeWind**: Utility-first styling with Tailwind CSS in React Native.
* **Expo Router**: File-based routing for Expo apps.
* **TypeScript**: Typed superset of JavaScript.
* **TMDb API**: Source for movie data.

---

## 🧪 Testing

<!-- *Provide details about any testing frameworks or methodologies used.* -->

---

## 📄 License

<!-- *Specify the license under which the project is distributed, e.g., MIT.* -->

---

## 🙌 Acknowledgements

* [The Movie Database (TMDb)](https://www.themoviedb.org/) for the movie data API.
* [Expo](https://expo.dev/) for the development platform.
* [NativeWind](https://www.nativewind.dev/) for Tailwind CSS integration in React Native.

