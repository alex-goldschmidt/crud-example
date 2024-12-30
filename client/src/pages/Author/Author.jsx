import { ReactQueryFetchItem } from "../../components/ReactQueryFetchItem/ReactQueryFetchItem";
import { getAuthorByAuthorId } from "../../api/AuthorsApi";
import { useParams } from "react-router-dom";

const displayAuthor = (author) => {
  if (!author) {
    return <div>No author data available</div>;
  }

  const authorName = `${author.firstName}  ${author.lastName}`;

  return (
    <div className="author">
      <h1>{authorName}</h1>
      <div>{author.created}</div>
      <div>{author.updated}</div>
    </div>
  );
};

export const Author = () => {
  const { authorId } = useParams();
  const queryFunction = () => getAuthorByAuthorId(authorId);
  return (
    <ReactQueryFetchItem
      reactQueryKey={["authors", parseInt(authorId)]}
      queryFunction={queryFunction}
      renderFunction={displayAuthor}
    />
  );
};
