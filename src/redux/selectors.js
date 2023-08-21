export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectUserName = state => state.auth.user.name;
export const selectLogStatus = state => state.auth.isLoggedIn;