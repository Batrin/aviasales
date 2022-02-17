import { addTickets } from '../syncAction/actions';

const baseUrl = 'https://aviasales-test-api.java-mentor.com';

const searchId = '648995e77b203bd74d97f0f9a236ae52';

const endPoints = {
  search: '/search',
  getTicketsUrl: (id) => `/tickets?searchId=${id}`,
};

export const getTickets = () => {
  return (dispatch) => {
    fetch(`${baseUrl}${endPoints.getTicketsUrl(searchId)}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addTickets(json));
        console.log(json);
      });
  };
};
