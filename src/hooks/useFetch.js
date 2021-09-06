// Node Modules
import axios from 'axios';

export const useFetch = () => {
  async function fetchLookup (url, setApiResponseData, setIsLoadingResponseData) {
    setIsLoadingResponseData(true);
    const data = await axios.get(url, { validateStatus: false }).then(({ data }) => data).catch(console.error);
    setIsLoadingResponseData(false);
    setApiResponseData(data || {});
  };

  return [
    fetchLookup
  ];
}