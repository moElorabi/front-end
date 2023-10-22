export interface MockStore {
  market: {
    drawerIsOpen: boolean;
    categoryIsLoading: boolean;
  };
}

export const mockStore: MockStore = {
  market: {
    drawerIsOpen: true,
    categoryIsLoading: false,
  },
};
