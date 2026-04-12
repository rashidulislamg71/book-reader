const getReadListLocalDB = () => {
  const getData = localStorage.getItem("readList");
  return getData ? JSON.parse(getData) : [];
};

const addToReadListLocalDB = (book) => {
  const currentList = getReadListLocalDB();
  const updatedList = [...currentList, book];
  localStorage.setItem("readList", JSON.stringify(updatedList));
};

const getWishListLocalDB = () => {
  const getData = localStorage.getItem("wishList");
  return getData ? JSON.parse(getData) : [];
};

const addToWishListLocalDB = (book) => {
  const currentList = getWishListLocalDB();
  const updatedList = [...currentList, book];
  localStorage.setItem("wishList", JSON.stringify(updatedList));
};

export { getReadListLocalDB, addToReadListLocalDB, getWishListLocalDB, addToWishListLocalDB };
