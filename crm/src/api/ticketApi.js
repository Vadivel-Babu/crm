import { toast } from "react-toastify";
import api from "./api";

export const getTickets = async ({ token, status = "", search = "" }) => {
  try {
    const res = await api.get("/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        status,
        search,
      },
    });

    return res; // return just the array
  } catch (error) {
    const msg = error.response?.data?.message || "Failed to fetch tickets";
    toast.error(msg);
    throw error;
  }
};
