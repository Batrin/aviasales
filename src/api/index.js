const baseUrl = 'https://aviasales-test-api.kata.academy';

const endPoints = {
  search: '/search',
  getTicketsUrl: (id) => `/tickets?searchId=${id}`,
};

const getData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return getData(url);
    }
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const getSearchId = async () => {
  const url = `${baseUrl}${endPoints.search}`;
  const searchBody = await getData(url);
  return searchBody;
};

export const getTickets = async (searchId) => {
  const url = `${baseUrl}${endPoints.getTicketsUrl(searchId)}`;
  const ticketBody = await getData(url);
  return ticketBody;
};
