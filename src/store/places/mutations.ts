import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(  state: PlacesState, {longitude, latitude}: { longitude: number, latitude: number} ) {
        state.userLocation =  [longitude, latitude];
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