import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayerByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/player.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allPlayers = response.data;
      const myPlayers = [];

      if (allPlayers) {
        Object.keys(allPlayers).forEach((playerId) => {
          const player = allPlayers[playerId];
          player.id = playerId;
          myPlayers.push(player);
        });
      }

      resolve(myPlayers);
    })
    .catch((err) => reject(err));
});

const getPlayerById = (playerId) => axios.get(`${baseUrl}/player/${playerId}.json`);

const createPlayer = (newPlayer) => axios.post(`${baseUrl}/player.json`, newPlayer);

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/player/${playerId}.json`);

const updatePlayer = (playerId, updatedPlayer) => axios.put(`${baseUrl}/player/${playerId}.json`, updatedPlayer);

export default {
  getPlayerByUid,
  getPlayerById,
  createPlayer,
  deletePlayer,
  updatePlayer,
};
