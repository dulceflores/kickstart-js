import { get, post, put, del, exGet } from './request';

const URL = 'http://localhost:5000';

export const fetchProduce = (type, variety) => get( variety ? `${URL}/${type}/${variety}` : `${URL}/${type}`);