import axios from "./axios";
import { toast } from "react-toastify";

//for sending the request to db for creating the message

async function CreateMessage(state) {
  try {
    const response = await axios.post("/posts/create", state);
    toast.success(response.data.message);
  } catch (err) {
    toast.error(err);
  }
}

export default CreateMessage;
