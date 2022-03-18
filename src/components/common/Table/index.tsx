import { TableBehaviour } from "../../behaviour/table/tableBehaviour";
import TableHead from "../TableHead";
import "./style.css";

const Table = <TypeData, InputProps extends TableBehaviour<TypeData>>(
  props: InputProps
) => {
  const { columns, renderItem, data } = props;
  return (
    <>
      <div className="container-table">
        <table className="datatable">
          <TableHead>
            {columns.map((name) => {
              return <th key={name}>{name}</th>;
            })}
          </TableHead>
          {data.map((item, index) => renderItem(item, index))}
        </table>
      </div>
    </>
  );
};

export default Table;
