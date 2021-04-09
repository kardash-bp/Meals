import { useEffect, useReducer } from 'react'
import axios from 'axios'
const initialState = {
  loading: false,
  error: '',
  data: []
}

function apiReducer(state, action) {
  switch (action.type) {
    case 'DATA_FETCH_START':
      return { ...state, loading: true }
    case 'DATA_FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'DATA_FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    default:
      return state
  }
}

export function useAxios(endPoint) {
  const [data, dispatch] = useReducer(apiReducer, initialState)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        dispatch({ type: 'DATA_FETCH_START' })

        const res = await axios(url)

        dispatch({ type: 'DATA_FETCH_SUCCESS', payload: res.data })
      } catch (err) {
        console.log(err)
        dispatch({ type: 'DATA_FETCH_FAILURE', payload: err.message })
      }
    }
    fetchData(endPoint)
  }, [endPoint, dispatch])

  return data
}
