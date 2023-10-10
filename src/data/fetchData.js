import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get("http://localhost:5130/api/movies");
    const responseData = response.data;
    return responseData;
  } catch (error) {
    throw error; // You can also handle the error here if needed
  }
}
