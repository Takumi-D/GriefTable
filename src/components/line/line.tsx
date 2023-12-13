import React from "react";

interface Props {
  header: string;
  id: number;
  description: string;
}

function Line({ id, header, description }: Props): React.JSX.Element {
  return (
    <tr>
      <th className="line" scope="row">
        {id}
      </th>
      <td className="line">{header}</td>
      <td className="line">{description}</td>
    </tr>
  );
}

export default Line;
