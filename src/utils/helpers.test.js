import { sortList, orderByValue, paginateLinks, updateIndexes } from ".";

test('update indexes correctly', () => {
  const links = {
    data: [
      { id: 3, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 1, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 2, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  const updatedLinks = [
    { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
    { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
  ];
  expect(updateIndexes(links)).toEqual(updatedLinks);
});

test('sort descending for sort method correctly', () => {
  const firstItem = { vote: 1 };
  const secondItem = { vote: 2 };
  const orderValue = 1;
  expect(sortList(firstItem, secondItem, orderValue)).toBe(1);
});

test('sort ascending for sort method correctly', () => {
  const firstItem = { vote: 1 };
  const secondItem = { vote: 2 };
  const orderValue = 2;
  expect(sortList(firstItem, secondItem, orderValue)).toBe(-1);
});

test('ordering by value = 1 (Descending) correctly', () => {
  const links = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  const orderValue = 1;
  const orderedDescLinksData = [
    { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 },
    { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 }
  ];
  expect(orderByValue(links, orderValue)).toEqual(orderedDescLinksData);
});

test('ordering by value = 2 (Ascending) correctly', () => {
  const links = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  const orderValue = 2;
  const orderedDescLinksData = [
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
    { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
    { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
  ];
  expect(orderByValue(links, orderValue)).toEqual(orderedDescLinksData);
});

test('paginate links correctly', () => {
  const links = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'Instagram', url: 'https://www.instagram.com/', vote: 3 },
      { id: 4, name: 'Whatsapp', url: 'https://www.whatsapp.com/', vote: 5 },
      { id: 5, name: 'Github', url: 'https://www.github.com/', vote: 4 },
      { id: 6, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 6 }
    ], totalItemCount: 6
  };
  const pagination = { pageNumber: 1, pageSize: 5 };
  const paginatedLinks = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'Instagram', url: 'https://www.instagram.com/', vote: 3 },
      { id: 4, name: 'Whatsapp', url: 'https://www.whatsapp.com/', vote: 5 },
      { id: 5, name: 'Github', url: 'https://www.github.com/', vote: 4 }
    ], totalItemCount: 6
  };
  expect(paginateLinks(links, pagination)).toEqual(paginatedLinks);
});