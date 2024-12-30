import { createAuthor } from "../../api/AuthorsApi";
import "./AuthorCreate.scss";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

export const AuthorCreate = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { status, error, isPending, mutate } = useMutation({
    mutationFn: createAuthor,
    onSuccess: (newAuthor) => {
      queryClient.setQueryData(["author", newAuthor.authorId], newAuthor);
      navigate(`/authors/author/${newAuthor.authorId}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    });
  };

  return (
    <div>
      {status === "error" && JSON.stringify(error)}
      <h1>Create Author</h1>
      <form onSubmit={handleSubmit} className="author__form">
        <div>
          <label htmlFor="title">First Name</label>
          <input id="firstName" ref={firstNameRef} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" ref={lastNameRef} />
        </div>
        <button disabled={isPending}>
          {isPending ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};
