import { fetchSafeRequest } from "../utils/axiosSafeRequest.jsx";
import { API_BASE_URL } from "../Config.jsx";

export const getAllAuthors = () =>
  fetchSafeRequest("get", `${API_BASE_URL}/authors`);
export const getAuthorByAuthorId = (authorId) =>
  fetchSafeRequest("get", `${API_BASE_URL}/authors/author/${authorId}`);
export const createAuthor = (data) =>
  fetchSafeRequest("post", `${API_BASE_URL}/authors/author/create`, data);
