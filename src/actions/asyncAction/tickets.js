import { addTickets } from '../syncAction/actions';

const baseUrl = 'https://aviasales-test-api.java-mentor.com';

const endPoints = {
  search: '/search',
  getTicketsUrl: (searchId) => `/tickets?searchId=${searchId}`,
};

export const getTickets = (searchId) => {
  return (dispatch) => {
    fetch(`${baseUrl}${endPoints.getTicketsUrl(searchId)}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addTickets(json));
      });
  };
};

export const getSearchId = () => {
  return fetch(`${baseUrl}${endPoints.search}`)
    .then((response) => response.json())
    .then((json) => json.searchId);
};
