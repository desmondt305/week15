//Imports the axios library that I installed//
import axios from "axios";
//Used to create a new instance of axios and sets the base url.//
const api = axios.create({
  baseURL: "https://668ec5bbbf9912d4c92fab6b.mockapi.io/food-api/food",
});
//Makes a Get request to the endpoint.//
export const getFood = async () => {
  const response = await api.get("/food");
  //Returns the data received from the Api//
  return response.data;
};
