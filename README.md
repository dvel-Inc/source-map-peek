Source Map Peek
===============

# generate source maps

cd native
# Android:
react-native bundle --platform android --entry-file index.android.js --dev false --bundle-output ./android/main.jsbundle --assets-dest ./android --sourcemap-output ./sourcemap.js
# iOS:
react-native bundle --platform ios --entry-file index.ios.js --dev false --bundle-output ./ios/main.jsbundle --assets-dest ./ios --sourcemap-output ./sourcemap.js

# copy sourcemap.js into this project directory

# replace stacktrace in index.js and run ./index.js in terminal