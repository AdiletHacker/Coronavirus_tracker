import * as axios from "axios";

const GET_GLOBAL_DATA = "GET_GLOBAL_DATA";
const GET_COUNTRIES_DATA = "GET_COUNTRIES_DATA";



const initial_state = {
    global: {},
    countries: []
};


export const virus_data = (state = initial_state, action) => {
    switch (action.type) {
        case GET_GLOBAL_DATA:
            return {
                ...state,
                global: action.payload
            }
        case GET_COUNTRIES_DATA:
            return {
                ...state,
                countries: action.payload
            }
        default: return state;
    };
}

const setGlobalData = (data) => ({ type: GET_GLOBAL_DATA, payload: data });
const setCountriesData = (data) => ({ type: GET_COUNTRIES_DATA, payload: data });



export const getGlobalData = () => async (dispatch) => {
    const res = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
    dispatch(setGlobalData(res.data));
};

export const getCountriesData = () => async (dispatch) => {
    const res = await axios.get("https://coronavirus-19-api.herokuapp.com/countries");
    dispatch(setCountriesData(res.data));
};












