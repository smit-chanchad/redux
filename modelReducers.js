import { DELETE, STORE, UPDATE } from "../actions/modelActionTypes";
import { initialData } from "../data/initialData";

 // eslint-disable-next-line
export default function(storeData, action) {
    switch(action.type) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]:
                storeData[action.dataType].concat([action.payload])
            }
        case UPDATE:
            return {
              ...storeData,
              [action.dataType]: storeData[action.dataType].map(n => 
                n.id === action.payload.id ? action.payload : n)
            }
        case DELETE:
            return {
              ...storeData,
              [action.dataType]: storeData[action.dataType].filter(n => n.id !== action.payload)
            }
        default:
            return storeData || initialData;
    }
}