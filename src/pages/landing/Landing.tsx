import Box from "@mui/material/Box";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import DrawerComponent from "../../components/Drawer";
import BreadcrumbsComponent from "../../components/BreadCrumbs";
import Main from "../../components/Main";
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../../services/product-service";
import { Grid } from "@mui/material";
import {
  filterByCategory,
  filterBySearchWord,
} from "../../utils/utils-functions";
import { setProductsIsLoading } from "../../actions/market-action";
import Loading from "../../components/Loading";
import useInfiniteScroll from "../../components/InfiniteScroll";

export default function PersistentDrawerLeft() {
  const dispatch = useDispatch();
  const market = useSelector((state: any) => state.market);
  const [products, setProducts] = useState([]); // [] is the initial value
  const [filteredProducts, setFilteredProducts] = useState([]); // [] is the initial value
  const numberOfItemsToShow = 8;
  const numberOfItemsToShowOnScroll = 3;

  const getProductsApi = async () => {
    dispatch(setProductsIsLoading(true));
    const res = await getProducts(); // get products from api
    setProducts(res.data); // set products in state
    const itemsToShow = res.data.slice(0, numberOfItemsToShow);
    setFilteredProducts(itemsToShow);
    dispatch(setProductsIsLoading(false));
  };

  // fetch more items on scroll
  const fetchMoreItems = useCallback(() => {
    setTimeout(() => {
      setFilteredProducts([
        ...filteredProducts,
        ...products.slice(
          filteredProducts.length,
          filteredProducts.length + numberOfItemsToShowOnScroll
        ),
      ]);
    }, 500);
  }, [filteredProducts, products]);

  // custom hook to handle scroll
  useInfiniteScroll(fetchMoreItems);

  useEffect(() => {
    getProductsApi();
  }, []);

  // filter products by category
  useEffect(() => {
    const res = filterByCategory(products, market.category);
    setFilteredProducts(res);
  }, [market.category]);

  // filter products by search word
  useEffect(() => {
    if (market.searchWord) {
      const res = filterBySearchWord(products, market.searchWord);
      setFilteredProducts(res);
    } else {
      setFilteredProducts(products);
    }
  }, [market.searchWord]);

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      <Main open={market.drawerIsOpen}>
        <BreadcrumbsComponent />
        {market.productsIsLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={3}>
            {filteredProducts.length === 0
              ? "No Data"
              : filteredProducts &&
                filteredProducts.map(
                  (
                    product: any, // map over products
                    key: any
                  ) => (
                    <ProductCard
                      key={key}
                      name={product.title}
                      img={product.image}
                    />
                  )
                )}
          </Grid>
        )}
      </Main>
    </Box>
  );
}
