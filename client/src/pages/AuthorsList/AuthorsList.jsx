import { getAllAuthors } from "../../api/AuthorsApi";
import { ReactQueryFetchItem } from "../../components/ReactQueryFetchItem/ReactQueryFetchItem";
import "./AuthorsList.scss";

const displayAuthorsList = (authors) => {
  const authorsListItems = authors.map((author) => {
    return (
      <li key={author.authorId}>
        <a href={`/authors/author/${author.authorId}`}>
          Author {author.authorId}: {author.firstName} {author.lastName}
        </a>
      </li>
    );
  });

  return <ul className="authors__list">{authorsListItems}</ul>;
};

export const AuthorsList = () => {
  return (
    <>
      <ReactQueryFetchItem
        reactQueryKey={["authors"]}
        queryFunction={getAllAuthors}
        renderFunction={displayAuthorsList}
      />
    </>
  );
};
