import axios from "axios";

const headers= {"auth-token":localStorage.getItem("token")}

const API = axios.create({baseURL: "http://localhost:5000"});

export const fetchData = () => API.get("/api/billing/",{headers: headers});
export const addToCart = (data) => API.post("/api/billing/",data, {headers: headers});
export const removeToCart = (id) => API.delete(`/api/billing/${id}`, {headers: headers});
export const updateCart = (data) => API.put(`/api/billing/${data.id}`,data, {headers: headers});