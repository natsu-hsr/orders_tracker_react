import Row from "antd/es/row";

import {CustomTable} from "./custom-table"
import {TFilters} from "../filters-form";
import {CustomTableCommonProps} from "./custom-table.types";
import {FiltersForm} from "../filters-form/filters-form";

import s from './custom-table-container.module.scss';

export type CustomTableContainerProps<T> = CustomTableCommonProps<T> & {
  filters?: TFilters;
}
export const CustomTableContainer = <T,>({
  filters,
  columns,
  dataSource,
}: CustomTableContainerProps<T>) => {
  return (
    <div>
      {filters?.length && (
        <Row
          className={s.actions}
          justify="end"
        >
          <FiltersForm
            filters={filters}
          />
        </Row>
      )}
      <CustomTable<T>
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  )
}

export default CustomTableContainer