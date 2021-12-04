import axios from 'axios';
import { getHeaders } from '../helpers/user.helper';


const SERVER = "http://127.0.0.1:8000";

export const getAll = (fecha) => {
  return axios.get(`${SERVER}/api/actividades/${fecha}`, getHeaders());
};

export const getById = (id, fecha) => {
  return axios.get(`${SERVER}/api/actividad/${id}/${fecha}`, getHeaders());
};
