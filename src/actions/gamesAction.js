import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// action creator

export const loadGames = () => async dispatch => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      new: newData.data.results,
    },
  });
};
