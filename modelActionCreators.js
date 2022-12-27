import { NAMES } from "../data/dataTypes";
import { DELETE, STORE, UPDATE } from "./modelActionTypes";

let idCounter = 4;

export const saveName = (name) => {
    return createSaveEvent(NAMES, name);
}

const createSaveEvent = (dataType, payload) => {
    if (!payload.id) {
        return {
            type:STORE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++}
        }
    } else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }
}

export const deleteName = (name) => ({
    type: DELETE,
    dataType: NAMES,
    payload: name.id
})

