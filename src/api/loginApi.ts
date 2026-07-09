import api from "./axios";

export const login = async (data:{username:string, password:string}) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const verifyAdmin = async () =>{
  const response = await api.get("auth/me")
  console.log(response)
  return response
}
export const logout = async () => {
  console.log("insie logout 14 ksak")
  const response = await api.get("/auth/logout");
  return response
};