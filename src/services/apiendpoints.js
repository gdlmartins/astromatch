import Axios from "axios";
import { UrlBase } from "../constants/constants";

export const  getMatchesApi = (saveData) => {
    
    const url = `${UrlBase}matches`;
    Axios.get(url)
      .then((res) => saveData(res.data.matches))
      .catch((err) => console.log(err))
    
  };



 export const getProfileToChooseApi = (saveData) => {
    const url = `${UrlBase}person`;

    Axios.get(url)
      .then((res) => {
        saveData(res.data.profile);
      })
      .catch((err) => console.log(err));
  };

  export const choosePerfApi = (idP) => {
    const url = `${UrlBase}choose-person`;
    const body = { id: `${idP}`, choice: `true` };
    Axios.post(url, body)
      .then((res) => {
        console.log(res.data.isMatch)
      })
      .catch((err) => console.log(err));
  };


  