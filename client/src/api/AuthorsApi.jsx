import { axiosSafeRequest } from "../utils/axiosSafeRequest.jsx";
const baseUrl = "/api/authors";

export const getAllAuthors = () => axiosSafeRequest("get", `${baseUrl}`);
export const getAuthorByAuthorId = (authorId) =>
  axiosSafeRequest("get", `${baseUrl}/author/${authorId}`);
