export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      // Log Actions
      console.log("[Log]:" + action.type + " " + new Date().toString());
      // Call the next middleware in the pipeline
      next(action);
      // log the modified state of the app
      console.log(store.getState());
    };
  };
};
