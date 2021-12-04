import axios from 'axios';
import { getHeaders } from '../helpers/user.helper';


const SERVER = "http://127.0.0.1:8000";

export const crear = (payload) => {
  return axios.post(`${SERVER}/api/reserva`, payload, getHeaders());
};
