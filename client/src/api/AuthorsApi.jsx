import { axiosSafeRequest } from "../utils/axiosSafeRequest.jsx";
import { API_BASE_URL } from "../Config.jsx";

export const getAllAuthors = () =>
  axiosSafeRequest("get", `${API_BASE_URL}/authors`);
export const getAuthorByAuthorId = (authorId) =>
  axiosSafeRequest("get", `${API_BASE_URL}/authors/author/${authorId}`);
export const createAuthor = (data) =>
  axiosSafeRequest("post", `${API_BASE_URL}/authors/author/create`, data);
