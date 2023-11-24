import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME, CHANGE_CAT,  CHANGE_IMG, CHANGE_PRICE, CHANGE_LIST, CHANGE_FILTER, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PW, CHANGE_LOGGED, CHANGE_ERROR, CHANGE_INFO, CH_LAT, CH_LANG , CH_ADD, CH_MAP } from "./authStat";
const initialState = {
    isOpen: false,
    title: "",
    regHome: "category",
    category: "Beach",
    img: "../../src/assets/images/arctic.jpg",
    price: "Php 0.00",
    list: [],
    filter:"",
    email:"",
    name:"",
    pw:"",
    logged:"",
    error:"",
    editInfo:"",
    lat: "",
    lang: "",
    add:"",
    mapa:""
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_AUTH:
            return {
                ...state,
                isOpen: action.payload
            }

        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }

        case CHANGE_REG_HOME:
            return {
                ...state,
                regHome: action.payload
            }

        case CHANGE_CAT:
            return {
                ...state,
                category: action.payload
            }    

        case CHANGE_IMG:
            return {
                ...state,
                img: action.payload
            }    

        case CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }        

        case CHANGE_LIST:
            return {
                ...state,
                list: action.payload
            }       

        case CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload
            }       

        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }    
            
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }    

        case CHANGE_PW:
            return {
                ...state,
                pw: action.payload
            }    

        case CHANGE_LOGGED:
            return {
                ...state,
                logged: action.payload
            }    
        case CHANGE_ERROR:
            return {
                ...state,
                error: action.payload
            }        
        case CHANGE_INFO:
            return {
                ...state,
                editInfo: action.payload
            }        
        case CH_LAT:
            return {
                ...state,
                lat: action.payload
            }        
        case CH_LANG:
            return {
                ...state,
                lang: action.payload
            }          
        case CH_ADD:
            return {
                ...state,
                add: action.payload
            }          
        case CH_MAP:
            return {
                ...state,
                mapa: action.payload
            }                
        default:
            return state;
    }
}
export default reducer;