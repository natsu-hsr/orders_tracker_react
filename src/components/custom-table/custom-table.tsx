import Table from "antd/es/table";
import { CustomTableCommonProps } from "./custom-table.types";

type CustomTableProps<T> = CustomTableCommonProps<T>;

export const CustomTable = <T,>({
  columns,
  dataSource,
}: CustomTableProps<T>) => {
  return (
    <Table<T>
      scroll={{
        scrollToFirstRowOnChange: true,
        x: 'max-content',
      }}
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '25', '50'],
      }}
    />
  )
}