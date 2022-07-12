import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

export default defineComponent({
  name: 'MapView',
  setup() {

    
    const { userLocation, isUserLocationReady } = usePlacesStore();

    const mapContainer = ref<HTMLDivElement>();

    onMounted( () => {
      const map = new mapboxgl.Map({
        container: mapContainer.value!, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        //style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 14, // starting zoom,
        projection: 'globe'
        } as any);
        
        map.on('style.load', () => {
        map.setFog({
          color: 'rgb(186, 210, 235)',
          'high-color': 'rgb(36, 92, 233)',
          'horizon-blend': 0.02,
          'space-color': 'rgb(11, 11, 25)',
          'star-intensity': 0.6
        } as any); // Set the default atmosphere style
        });
    });

    return{
        userLocation,
        isUserLocationReady,
        mapContainer
    }

  }
});
