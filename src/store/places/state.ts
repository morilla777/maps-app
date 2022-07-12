export interface PlacesState {
    isLoading: boolean;
    userLocation: [number, number]; //long lat
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: [0.0, 0.0]
    }
}

export default state;