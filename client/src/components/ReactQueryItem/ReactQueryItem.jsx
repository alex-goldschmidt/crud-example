import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";

export const ReactQueryItem = ({
  reactQueryKey,
  queryFunction,
  renderFunction,
}) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: [reactQueryKey],
    queryFn: queryFunction,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <>{renderFunction(data)}</>;
};

ReactQueryItem.propTypes = {
  reactQueryKey: PropTypes.string.isRequired,
  queryFunction: PropTypes.func.isRequired,
  renderFunction: PropTypes.func.isRequired,
};
