import type { GetBooksFilters } from "../type/book";
import api from "./axios";

export const uploadBook = async (formData: FormData) => {
  const response = await api.post("/books/uploadBooks", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getBooks = async (filter:GetBooksFilters) => {
  console.log("inside get Books");
  const response = await api.get("/books/", {
    params: filter
  });

  return response.data;
};

export const getBookBySlug = async (slug:string)=>{

    const response = await api.get(`/books/${slug}`);

    return response.data;

}