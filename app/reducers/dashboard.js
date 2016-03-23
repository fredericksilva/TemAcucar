const initialState = {
  drawerOpen: false,
  demands: [],
  loadingDemands: true,
  demandsOffset: 0,
  canLoadMoreDemands: false,
  creatingDemand: false,
  createDemandError: null,
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_OPEN_DRAWER':
      return {
        ...state, 
        drawerOpen: true,
      }
    case 'DASHBOARD_CLOSE_DRAWER':
      return {
        ...state, 
        drawerOpen: false,
      }
    case 'DASHBOARD_LIST_DEMANDS_REQUEST':
      return {
        ...state, 
        loadingDemands: true,
      }
    case 'DASHBOARD_LIST_DEMANDS_SUCCESS':
      return {
        ...state, 
        demands: state.demands.concat(action.demands),
        loadingDemands: false,
        demandsOffset: state.demandsOffset + action.demands.length,
        canLoadMoreDemands: (action.demands.length >= 10 ? true : false),
      }
    case 'DASHBOARD_LIST_DEMANDS_FAILURE':
      return {
        ...state, 
        loadingDemands: false,
      }
    case 'DASHBOARD_REFUSE_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'DASHBOARD_FLAG_DEMAND_REQUEST':
      return {
        ...state, 
        demands: state.demands.filter(demand => action.demand.id !== demand.id),
        demandsOffset: state.demandsOffset - 1,
      }
    case 'DASHBOARD_CREATE_DEMAND_REQUEST':
      return {
        ...state, 
        creatingDemand: true,
      }
    case 'DASHBOARD_CREATE_DEMAND_SUCCESS':
      return {
        ...state, 
        demands: [action.demand].concat(state.demands),
        demandsOffset: state.demandsOffset + 1,
        creatingDemand: false,
      }
    case 'DASHBOARD_CREATE_DEMAND_FAILURE':
      return {
        ...state, 
        creatingDemand: false,
        createDemandError: action.error,
      }
    default:
      return state
  }
}