import React, { useEffect, useState } from "react";
import { TextField, MenuItem, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { SingleLink } from ".";
import { loadLinks, useStyles, orderProperties } from "./../utils";

export default function LinksList() {
  const classes = useStyles();
  const [links, setLinks] = useState({
    data: [],
    totalItemCount: 0,
  });
  const [orderValue, setOrderValue] = useState("");
  const [pagination, setPagination] = useState({ pageNumber: 1, pageSize: 5 });

  useEffect(() => {
    getLinks(pagination, orderValue);
  }, [pagination, orderValue]);

  const getLinks = (pagination, orderVal) => {
    const loadedLinks = loadLinks(pagination, orderVal);
    if (loadedLinks) {
      if (loadedLinks.data.length === 0) {
        setPagination((prev) => {
          return { ...prev, pageNumber: pagination.pageNumber - 1 };
        });
      }
      else {
        setLinks({ ...loadedLinks });
      }
    } else {
      setLinks({ data: [], totalItemCount: 0 });
    }
  };

  const handleOrderChange = (event) => {
    const orderVal = event.target.value;
    setOrderValue(orderVal);
    getLinks(pagination, orderVal);
  };

  const handlePagination = (event, value) => {
    setPagination((prev) => {
      return { ...prev, pageNumber: value };
    });
  };

  return (
    <Box paddingX="1rem">
      <TextField
        select
        id="linkGroupId"
        name="linkGroupId"
        variant="outlined"
        style={{ width: '60%' }}
        margin="normal"
        label="Order By"
        value={orderValue}
        onChange={handleOrderChange}
      >
        {orderProperties.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </TextField>
      {links.data.length === 0 &&
        <Box>
          Please Add a Link
        </Box>}
      {links.data.map((link) => {
        return (
          <SingleLink
            key={link.id}
            link={link}
            getLinks={getLinks}
            pagination={pagination}
            orderValue={orderValue}
          />
        );
      })}
      {links.totalItemCount > 5 && (
        <Pagination
          count={Math.ceil(links.totalItemCount / pagination.pageSize)}
          shape="rounded"
          page={pagination.pageNumber}
          defaultPage={1}
          onChange={handlePagination}
          className={classes.pagination}
        />
      )}
    </Box>
  );
}
