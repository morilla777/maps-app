import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { PlacesState } from './places/state';


export interface StateInterface {
  places: PlacesState
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  //example: ExampleStateInterface
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule
  }
})