export default axios.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      data: response.data,
    });
  },
  (error) => {
    return Promise.resolve({
      error: error.response,
    });
  }
);
