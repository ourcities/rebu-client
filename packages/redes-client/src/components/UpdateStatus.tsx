import React from "react";
import styled from "styled-components";
import { useMutation } from "bonde-core-tools";
import { Text } from "bonde-components";

const Select = styled.select`
  text-transform: capitalize;
  padding: 5px 0 2px 5px;
  width: 100%;
  background-color: #fff;
  border: unset;
  border-bottom: 1px solid #ee0099;
  font-size: 16px;
  font-family: inherit;
  color: #4a4a4a;
  &:active,
  &:hover {
    box-shadow: 0 0 4px rgb(204, 204, 204);
  }
  &:hover {
    box-shadow: 0 0 4px rgb(204, 204, 204);
  }
`;

const Option = styled.option`
  text-transform: capitalize;
  font-size: 16px;
  color: #4a4a4a;
  font-family: inherit;
`;

type Props = {
  name: string;
  row: {
    original: {
      id: number;
    };
  };
  options: { label: string; value: string | number }[];
  selected: string;
  query: any;
  type: string;
};

const UpdateStatus = ({
  name,
  row,
  options,
  selected,
  query,
  type,
}: Props): React.ReactElement => {
  const [update] = useMutation(query);

  const handleOnChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    const variables = {
      [type]: { [name]: value },
      id: row.original.id,
    };
    return update({
      variables,
      refetchQueries: [
        type === "relationship" ? "Relationships" : "Individuals",
      ],
    });
  };
  return (
    <Text color="#000">
      <Select onChange={handleOnChange} value={selected}>
        {options.map((i) => (
          <Option key={`status-options-${i}`} value={i.value.toString()}>
            {i.label}
          </Option>
        ))}
      </Select>
    </Text>
  );
};

export default UpdateStatus;