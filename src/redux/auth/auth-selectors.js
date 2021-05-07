const getUser = state => state.users.user;
const getIsLoggedIn = state => state.users.isLoggedIn;
const getIsLoading = state => state.users.isLoading;

export { getUser, getIsLoggedIn, getIsLoading };
