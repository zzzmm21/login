import { INSERT_BOARD } from "./types";
import axios from 'axios';


export function insertBoard(dataToSubmit){
    const request = axios.post('/api/category', dataToSubmit)
    .then(response => response.data)

return {
    type: INSERT_BOARD,
    payload: request
}
}


