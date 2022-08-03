import axios from "./axios";
import { toast } from "react-toastify";

//This is used for fetching the decrypted message from backend with the help of  password

async function getDecryptedData(password, messageGot) {
  const object = { password: password, message: messageGot };
  try {
    const response = await axios.post("/posts/view", object);
    //It will render the decrypted text on screen

    toast.success(response.data.message);
    return response;
  } catch (err) {
    toast.error(err.response.data.message);
    return err.response;
  }
}
export default getDecryptedData;
