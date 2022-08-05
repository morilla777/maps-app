
import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        country: 'cl',
        limit: '5',
        access_token: 'pk.eyJ1IjoibW9yaWxsYTc3NyIsImEiOiJjbDU4eXAzNWswaXVuM2pvanpzdWlrd2xiIn0._978KEf97xOjNZz_oT7MQg'
    }

})

export default searchApi;
