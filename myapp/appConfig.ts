/*
The way these environement variables are defined is described here
https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d
*/
const protocol = "https";
const serverAddress = "5694be00-fa43-4fdc-9350-5cad9dca6745.mock.pstmn.io";//process.env.REACT_APP_SERVER_IP;

export type ApiScope = "app" | "spotify"
const APP_URL_MAPPINGS: { [key in ApiScope]: string } = {
  app: `${protocol}://${serverAddress}`,
  spotify: "https://api.spotify.com/v1/"
};
// const BASE_SERVER_URL = `${protocol}://${serverAddress}`;
// const BASE_SPOTIFY_API_URL = "https://api.spotify.com/v1/";


const AppConfig = {
  protocol,
  serverAddress,
  APP_URL_MAPPINGS
};

export default AppConfig;