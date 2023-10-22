export const filterByCategory = (products: any, category: string) => {
  return (
    products &&
    products.filter((product: any) =>
      category === "All" ? products : product.category === category
    )
  );
};

export const filterBySearchWord = (products: any, searchWord: string) => {
  return (
    products &&
    products.filter((product: any) =>
      product.title.toLowerCase().includes(searchWord.toLowerCase())
    )
  );
};
