import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";
const position = { lat: 37.774929, lng: -122.419416 };
export default function Mapa() {
  return (
    <>
      <h1>Mapa de Google</h1>
      <div style={{ height: "100vh", width: "100vh" }}>
        <APIProvider apiKey={"AIzaSyBPnoa5_JlzafSUt54wdKxTgmb86m323JQ"}>
          <Map center={position} zoom={100}></Map>
        </APIProvider>
      </div>
    </>
  );
}
