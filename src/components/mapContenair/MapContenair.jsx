
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export function MapContenair() {
    const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };
  return (
    <LoadScript
      googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13184.754459476679!2d48.92286726977539!3d-15.04375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2219e3b240201a29%3A0xc44ac21a3832a910!2sAntsakabary!5e1!3m2!1sfr!2smg!4v1662193099972!5m2!1sfr!2smg" // Replace with your Google Maps API key
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
        {/* Add more markers or other components as needed */}
      </GoogleMap>
    </LoadScript>
  );
}

