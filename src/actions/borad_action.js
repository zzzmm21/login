import { INSERT_BOARD,NOTE_LIST } from "./types";
import axios from 'axios';


export function insertBoard(dataToSubmit){
    const request = axios.post('/api/category', dataToSubmit)
    .then(response => response.data)

return {
    type: INSERT_BOARD,
    payload: request
}
}

export function noteList(dataToSubmit){
    const request = axios.post('/api/notelist', dataToSubmit)
    .then(response => response.data)

return {
    type: NOTE_LIST,
    payload: request
}
}



