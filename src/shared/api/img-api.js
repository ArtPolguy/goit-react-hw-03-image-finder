import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32107101-e2562fd64436d208435f63a52',
    per_page: 12,
  },
});

export const searchImg = async q => {
  const { data } = await instance.get('/', {
    params: {
      q,
    },
  });
  console.log(data);
  return data;
};
