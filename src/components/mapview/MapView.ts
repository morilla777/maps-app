import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

export default defineComponent({
  name: 'MapView',
  setup() {

    
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();

    const mapContainer = ref<HTMLDivElement>();

    const initMap = async ()  => {

      if( !mapContainer.value ) throw new Error('Div Element no existe');
      if( !userLocation.value ) throw new Error('User Location no existe'); 

      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapContainer.value?mapContainer.value:'mapContainer', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        //style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom,
        projection: {name: 'globe'}
        });
        
        map.on('style.load', () => {
        map.setFog({
          color: 'rgb(186, 210, 235)',
          'high-color': 'rgb(36, 92, 233)',
          'horizon-blend': 0.02,
          'space-color': 'rgb(11, 11, 25)',
          'star-intensity': 0.6
        } as mapboxgl.Fog); // Set the default atmosphere style
        });

        const myLocationPopup = new mapboxgl.Popup({ offset: [0,-25] })
          .setLngLat( userLocation.value )
          .setHTML(`
            <h4>Aquí estoy</h4>
            <p>Actualmente en San Francisco de Mostazal</p>
            <p>${ userLocation.value }</p>
          `);

        const myLocationMarker = new mapboxgl.Marker();

          myLocationMarker.setLngLat( userLocation.value )
          .setPopup( myLocationPopup )
          .addTo( map );


          setMap( map )
    }

    onMounted( () => {

      if( isUserLocationReady.value )
        return initMap();
     
    });

    watch ( isUserLocationReady, ( ) => {
      if ( isUserLocationReady.value ) initMap();
    })

    return{
        isUserLocationReady,
        mapContainer
    }

  }
});
