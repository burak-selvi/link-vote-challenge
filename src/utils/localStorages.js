import { orderByValue, paginateLinks, updateIndexes } from '.';

export const loadLinks = (pagination = null, orderValue = null) => {
  if (localStorage.getItem('links')) {
    const links = JSON.parse(localStorage.getItem('links'));
    links.data = updateIndexes(links);
    if (pagination) {
      if (orderValue) {
        links.data = orderByValue(links, orderValue);
      }
      return paginateLinks(links, pagination);
    } else {
      return links;
    }
  } else {
    return null;
  }
};

export const saveLink = (link) => {
  let newLinkId, newLinks, newLink;
  const links = loadLinks();
  if (links) {
    newLinkId = links.totalItemCount + 1;
    newLink = { id: newLinkId, ...link };
    newLinks = {
      data: [newLink, ...links.data],
      totalItemCount: links.totalItemCount + 1,
    };
  } else {
    newLinkId = 1;
    newLink = { id: newLinkId, ...link };
    newLinks = { data: [newLink], totalItemCount: 1 };
  }
  localStorage.setItem('links', JSON.stringify(newLinks));
};

export const deleteLink = (linkId) => {
  const currentLinks = loadLinks();
  if (currentLinks.totalItemCount === 1) {
    localStorage.removeItem('links');
  } else {
    const newLinks = currentLinks.data.filter((link) => link.id !== linkId);
    const newLinksObject = {
      data: newLinks,
      totalItemCount: currentLinks.totalItemCount - 1,
    };
    localStorage.setItem('links', JSON.stringify(newLinksObject));
  }
};

export const voteUp = (linkId) => {
  const newLinks = loadLinks();
  const index = newLinks.data.findIndex((link) => link.id === linkId);
  newLinks.data[index].vote = newLinks.data[index].vote + 1;
  localStorage.setItem('links', JSON.stringify(newLinks));
};

export const voteDown = (linkId) => {
  const newLinks = loadLinks();
  const index = newLinks.data.findIndex((link) => link.id === linkId);
  newLinks.data[index].vote = newLinks.data[index].vote - 1;
  localStorage.setItem('links', JSON.stringify(newLinks));
};