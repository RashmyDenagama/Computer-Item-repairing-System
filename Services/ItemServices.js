import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/items';

export const listItems=() => axios.get(REST_API_BASE_URL);
 export const CreateItem=(Items)=>axios.post(REST_API_BASE_URL,Items);

export const getItem=(id)=>axios.get(REST_API_BASE_URL+'/'+id);

export const updateItem = (id, items) =>  axios.put(REST_API_BASE_URL+'/'+id, items);

  
  export const deleteItem = (id) =>axios.delete(REST_API_BASE_URL+'/'+id);
 
  