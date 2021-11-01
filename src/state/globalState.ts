interface IGlobalState {
    carouselIndex: number;
    showModal: boolean;
    mainContent: string;
    servicesType: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    carouselIndex: 0,
    showModal: false,
    mainContent: 'Inicio',
    servicesType: 'Administración'
}