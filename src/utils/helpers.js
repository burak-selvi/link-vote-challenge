export const updateIndexes = (links) => {
  return links.data.map((link, index) => {
    if (link.id !== index + 1) {
      link.id = index + 1;
      return link;
    } else {
      return link;
    }
  });
};

export const sortList = (first, second, orderValue) => {
  if (orderValue === 1) {
    return second.vote - first.vote;
  }
  if (orderValue === 2) {
    return first.vote - second.vote;
  }
};

export const orderByValue = (links, orderValue) => {
  return links.data.sort((a, b) => sortList(a, b, orderValue));
};

export const paginateLinks = (links, pagination) => {
  const start = (pagination.pageNumber - 1) * pagination.pageSize;
  const end = start + pagination.pageSize;
  let slicedLinks = links.data.slice(start, end);
  return { data: slicedLinks, totalItemCount: links.totalItemCount };
};
