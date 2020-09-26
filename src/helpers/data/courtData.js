import axios from 'axios';

import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getCourts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/court.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getCourtById = (courtId) => axios.get(`${baseUrl}/court/${courtId}.json`);

const getCourtByZipcode = (zipcode) => axios.get(`${baseUrl}/court.json?orderBy="zipcode"&equalTo="${zipcode}"`);

// const createCourt = (newCourt) => axios.post(`${baseUrl}/court.json`, newCourt);

// const deleteCourt = (courtId) => axios.delete(`${baseUrl}/court/${courtId}.json`);

// const updateCourt = (courtId, updatedCourt) => axios.put(`${baseUrl}/court/${courtId}.json`, updatedCourt);

export default {
  getCourts,
  getCourtByZipcode,
  getCourtById,
};
