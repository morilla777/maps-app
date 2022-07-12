import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(  state: PlacesState, coords: { lng: number, lat: number } ) {
        console.log({ coords });
        state.userLocation = [coords.lng, coords.lat];
        state.isLoading = false;
    }

    /*
    setLngLat(  state: PlacesState, {lng, lat}: { lng: number, lat: number } ) {
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
    */
}


export default mutation;