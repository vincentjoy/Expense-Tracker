import 'dotenv/config';

export default {
    expo: {
        name: "ExpenseTracker",
        slug: "ExpenseTracker",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        newArchEnabled: true,
        splash: {
            image: "./assets/splash-icon.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            edgeToEdgeEnabled: true
        },
        web: {
            favicon: "./assets/favicon.png"
        },
        extra: {
            API_URL: process.env.API_URL,
            API_KEY: process.env.API_KEY
        }
    }
};
