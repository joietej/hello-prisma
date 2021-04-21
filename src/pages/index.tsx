import React from "react";
import { withUrqlClient } from "next-urql";
import { useAllUsersQuery } from "../../generated/graphql";

interface Props {}

const index = (props: Props) => {
  const [result] = useAllUsersQuery();
  return (
    <ul>
      {result.data?.users?.map((u) => (
        <li key={u?.id}>{u?.name}</li>
      ))}
    </ul>
  );
};

export default withUrqlClient(() => ({ url: "/api/graphql" }))(index);
