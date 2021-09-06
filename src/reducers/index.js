// Node Modules
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
  
// Export reducers
function reducers (history){
  return combineReducers({
    router: connectRouter(history)
  });
};
  
export default reducers