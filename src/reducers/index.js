export default (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_EMPLOYEES': {
          console.log(action.employees);
        return action.employees;
      }
      default:
        return state;
    }
};