import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibW9yaWxsYTc3NyIsImEiOiJjbDU4eXAzNWswaXVuM2pvanpzdWlrd2xiIn0._978KEf97xOjNZz_oT7MQg';

if( !navigator.geolocation ){
    alert('Tu navegador no soporta el Geolocation')
    throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
