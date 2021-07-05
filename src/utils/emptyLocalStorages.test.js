import { loadLinks, deleteLink, saveLink, voteUp, voteDown } from ".";

test('load links correctly from local storage', () => {
  expect(loadLinks()).toBe(null);
});

test('add new link correctly to the local storage', () => {
  const newLink = { name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 0 };
  const updatedLinks = {
    data: [
      { id: 1, name: 'HepsiBurada', url: 'https://www.hepsiburada.com/', vote: 0 }
    ], totalItemCount: 1
  };
  saveLink(newLink);
  expect(loadLinks()).toEqual(updatedLinks);
});

const localStorageMock = (function () {
  const store = {};

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