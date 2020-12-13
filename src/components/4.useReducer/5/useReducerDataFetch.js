import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { loading: false, post: action.payload, error: '' };
    case 'FETCH_FAILURE':
      return { loading: false, post: {}, error: 'Something went wrong!' };
    default:
      return state;
  }
};

const useReducerDataFetch = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const { loading, error, post } = state;
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FAILURE' });
      });
  }, []);

  return (
    <>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </>
  );
};

export default useReducerDataFetch;
