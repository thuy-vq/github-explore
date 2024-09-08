"use client";

import React from 'react';
import {Pagination, Table} from "flowbite-react";
import dayjs from "dayjs";

interface IProps {
  dataSource: any[];
}

const OTable = ({dataSource}: IProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Repo</Table.HeadCell>
            <Table.HeadCell>Visibility?</Table.HeadCell>
            <Table.HeadCell>Language</Table.HeadCell>
            <Table.HeadCell>Size</Table.HeadCell>
            <Table.HeadCell>Created At</Table.HeadCell>
            <Table.HeadCell>Updated At</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {!!dataSource?.length && dataSource.map(row => (
              <Table.Row key={row.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {row.name}
                </Table.Cell>
                <Table.Cell>{row.visibility}</Table.Cell>
                <Table.Cell>{row.language}</Table.Cell>
                <Table.Cell>{row.size}</Table.Cell>
                <Table.Cell>{row.created_at ? dayjs.utc(row.created_at).format("YYYY-MM-DD hh:mm:ss") : null}</Table.Cell>
                <Table.Cell>{row.updated_at ? dayjs.utc(row.updated_at).format("YYYY-MM-DD hh:mm:ss") : null}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={1}
          totalPages={100}
          onPageChange={() => {
          }}
          showIcons
          previousLabel=""
          nextLabel=""
        />
      </div>
    </>

  );
};

export default OTable;
