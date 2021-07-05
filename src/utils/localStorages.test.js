import { loadLinks, deleteLink, saveLink, voteUp, voteDown } from ".";

test('load links correctly from local storage', () => {
  const links = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  expect(loadLinks()).toEqual(links);
});


test('load links correctly from local storage and sort by ascending', () => {
  const pagination = { pageNumber: 1, pageSize: 5 };
  const orderValue = 2;
  const links = {
    data: [
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  expect(loadLinks(pagination, orderValue)).toEqual(links);
});

test('load links correctly from local storage and sort by descending', () => {
  const pagination = { pageNumber: 1, pageSize: 5 };
  const orderValue = 1;
  const links = {
    data: [
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 },
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 2 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 }
    ], totalItemCount: 3
  };
  expect(loadLinks(pagination, orderValue)).toEqual(links);
});

test('vote up a link correctly', () => {
  const updatedLinks = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 3 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 1 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  voteUp(1);
  expect(loadLinks()).toEqual(updatedLinks);
});

test('vote down a link correctly', () => {
  const updatedLinks = {
    data: [
      { id: 1, name: 'Google', url: 'https://www.google.com.tr/', vote: 3 },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', vote: 0 },
      { id: 3, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 3
  };
  voteDown(2);
  expect(loadLinks()).toEqual(updatedLinks);
});

test('add new link correctly to the local storage', () => {
  const newLink = { name: 'Instagram', url: 'https://www.instagram.com/', vote: 0 };
  const updatedLinks = {
    data: [
      { id: 1, name: 'Instagram', url: 'https://www.instagram.com/', vote: 0 },
      { id: 2, name: 'Google', url: 'https://www.google.com.tr/', vote: 3 },
      { id: 3, name: 'Facebook', url: 'https://www.facebook.com/', vote: 0 },
      { id: 4, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 3 }
    ], totalItemCount: 4
  };
  saveLink(newLink);
  expect(loadLinks()).toEqual(updatedLinks);
});

test('delete a link correctly from local storage', () => {
  const updatedLinks = {
    data: [
      { id: 1, name: 'Instagram', url: 'https://www.instagram.com/', vote: 0 },
      { id: 2, name: 'Google', url: 'https://www.google.com.tr/', vote: 3 },
      { id: 3, name: 'Facebook', url: 'https://www.facebook.com/', vote: 0 }
    ], totalItemCount: 3
  };
  deleteLink(4);
  expect(loadLinks()).toEqual(updatedLinks);
});

const localStorageMock = (function () {
  const store = {
    links: '{ "data": [{"id": 1, "name": "Google", "url": "https://www.google.com.tr/", "vote": 2}, {"id": 2, "name": "Facebook", "url": "https://www.facebook.com/", "vote": 1}, {"id": 3, "name": "HepsiBurada", "url": "https://www.hepsiburada.com/", "vote": 3}], "totalItemCount": 3 }'
  };

  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });