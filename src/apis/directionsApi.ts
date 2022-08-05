
import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: 'false',
        geometries: 'geojson',
        language: 'en',
        overview: 'simplified',
        steps: 'false',
        access_token: 'pk.eyJ1IjoibW9yaWxsYTc3NyIsImEiOiJjbDU4eXAzNWswaXVuM2pvanpzdWlrd2xiIn0._978KEf97xOjNZz_oT7MQg'
    }

})

export default directionsApi;
