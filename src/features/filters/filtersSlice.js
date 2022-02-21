export const StatusFilter = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

const initialState = {
  filters: {
    status: StatusFilter.All,
    colors: [],
  }
}

const filtersReducer = (state = initialState, action) => {  
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state.filters,
        status: action.payload
      }
    }

    default:
      return state
  }
}

export default filtersReducer