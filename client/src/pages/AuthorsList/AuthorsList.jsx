import { getAllAuthors } from "../../api/AuthorsApi";
import { ReactQueryItem } from "../../components/ReactQueryItem/ReactQueryItem";
import "./AuthorsList.scss";

const displayAuthorsList = (authors) => {
  const authorsListItems = authors.map((author) => {
    return (
      <li key={author.authorId}>
        <a href={`/author/${author.authorId}`}>
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
      <ReactQueryItem
        reactQueryKey="authors"
        queryFunction={getAllAuthors}
        renderFunction={displayAuthorsList}
      />
    </>
  );
};
