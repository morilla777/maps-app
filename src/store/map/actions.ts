
import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<MapState, StateInterface> = {
    getInitialLocation( { commit } ) {
        navigator.geolocation.getCurrentPosition(
            ( { coords }) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude }),
            ( err ) => {
                console.error(err)
                throw new Error('No geolocation :-( ')
            }
        );
    }
}



export default actions;