
import { ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<ExampleStateInterface, StateInterface> = {
    getInitialLocation( { commit } ) {
        navigator.geolocation.getCurrentPosition(
            ( { coords }) => commit('setLngLat', coords),
            ( err ) => {
                console.error(err)
                throw new Error('No geolocation :-( ')
            }
        );
    }
}



export default actions;