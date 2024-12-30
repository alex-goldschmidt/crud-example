import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthorsList } from "./pages/AuthorsList/AuthorsList.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Author } from "./pages/Author/Author.jsx";
import { AuthorCreate } from "./pages/AuthorCreate/AuthorCreate.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Sidebar />
        <Routes>
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/" element={<App />} />
          <Route path="/authors/author/:authorId" element={<Author />} />
          <Route path="/author/create" element={<AuthorCreate />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
