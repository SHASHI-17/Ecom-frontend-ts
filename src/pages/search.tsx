import { useState } from "react";
import ProductCard from "../components/Product-card";
import {
  useCategoriesQuery,
  useSearchProductsQuery,
} from "../redux/api/productAPI";
import { CustomError } from "../types/api-types";
import toast from "react-hot-toast";
import { server } from "../redux/store";
import { Skeleton } from "../components/admin/Loader";

const Search = () => {
  const {
    data: categoriesResponse,
    isLoading: loadingCategories,
    isError,
    error,
  } = useCategoriesQuery("");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const { isLoading: productLoading, data: searchedData } =
    useSearchProductsQuery({ search, sort, category, price: maxPrice, page });

  // console.log(searchedData);

  const addToCartHandler = () => {};
  const isNextPage = page > 4;
  const isPrevPage = page < 1;
  if (isError) toast.error((error as CustomError).data.message);
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (high to low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            {!loadingCategories &&
              categoriesResponse?.categories.map((i, key) => {
                return (
                  <option key={key} value={i as string}>
                    {i.toUpperCase()}
                  </option>
                );
              })}
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {productLoading ? (
          <Skeleton length={10} />
        ) : (
          <div className="search-product-list">
            {searchedData?.products.map((i) => {
              return (
                <ProductCard
                  key={i._id}
                  productId={i._id}
                  name={i.name}
                  price={i.price}
                  stock={i.stock}
                  photo={i.photo}
                  handler={addToCartHandler}
                />
              );
            })}
          </div>
        )}

        {searchedData && searchedData.totalPage > 1 && (
          <article>
            <button
              disabled={isPrevPage}
              onClick={(e) => setPage((prev) => prev - 1)}
            >
              prev
            </button>
            <span>
              {page} of {searchedData.totalPage}
            </span>
            <button
              disabled={isNextPage}
              onClick={(e) => setPage((prev) => prev + 1)}
            >
              next
            </button>
          </article>
        )}
      </main>
    </div>
  );
};

export default Search;
