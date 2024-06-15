import axios from 'axios';

export const fetchIpData = async (ip = '') => {
  const response = await axios.get(`https://ipwho.is/${ip}`);
  const data = response?.data;
  if (!!data.message) {
    throw new Error(data.message);
  }
  return response.data;
};
