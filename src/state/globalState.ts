interface IGlobalState {
    rol: string;
    carouselIndex: number;
    showModal: boolean;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    rol: "trabajador",
    carouselIndex: 0,
    showModal: false
}