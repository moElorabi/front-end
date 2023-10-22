export interface InitialState {
  drawer: Drawer;
  category: string;
  productsIsLoading: boolean;
  categoryIsLoading: boolean;
  searchWord: string | null;
  cart: [];
}

export interface NavBarProps {
  open?: boolean;
  handleDrawerOpen?: () => void;
}

export interface Drawer {
  drawerIsOpen: boolean;
}

export interface ProductCardProps {
  name: string;
  img: string;
}
