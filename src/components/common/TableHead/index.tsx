import React, { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const TableHead = (props: ComponentProps) => {
  return (
    <thead>
      <tr>
        <th></th>
        {props.children}
      </tr>
    </thead>
  );
};

export default TableHead;
