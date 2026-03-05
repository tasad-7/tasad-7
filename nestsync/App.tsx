{
  "expo": {
    "name": "NestSync",
    "slug": "nestsync",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0E0E1A"
    },
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "com.nestsync.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0E0E1A"
      },
      "package": "com.nestsync.app"
    },
    "plugins": [
      "expo-router",
      "expo-secure-store",
      [
        "expo-notifications",
        {
          "color": "#E8445A"
        }
      ]
    ],
    "scheme": "nestsync",
    "experiments": {
      "typedRoutes": true
    }
  }
}