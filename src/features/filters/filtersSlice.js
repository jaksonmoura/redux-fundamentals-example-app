export const StatusFilter = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

const initialState = {
  status: StatusFilter.All,
  colors: [],
}

const filtersReducer = (state = initialState, action) => {  
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state.filters,
        status: action.payload
      }
    }
    case 'filters/colorsFilterToggled': {
        if (state.colors.includes(action.payload))
        {
          return {
            ...state,
            colors: state.colors.filter(color => color !== action.payload)
          }
        }

        return {
          ...state,
          colors: state.colors.concat(action.payload)
        }
    }

    default:
      return state
  }
}

export default filtersReducer