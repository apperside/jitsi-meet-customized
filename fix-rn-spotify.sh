cd node_modules/react-native-spotify-remote/android/external
rm -rf SpotifySDK
git clone https://github.com/spotify/android-sdk.git SpotifySDK
cd ../../ios/external
rm -rf SpotifySDK
git clone https://github.com/spotify/ios-sdk.git SpotifySDK
cd ../../
yarn && yarn build