import { Grid } from "@mui/material";
import { Product } from "@/models/product";
import SingleProduct from "@/shared/components/product";
import { fetchProducts } from "@/lib/api/product";
import { ProductFilter } from "@/const/enum/productFilter";

interface ISearchParam {
  sortBy: string;
}
interface ProductListProps {
  searchParam: ISearchParam;
}

export const getProducts = async (sortParam?: ISearchParam) => {
  try {
    const res = await fetchProducts();
    let sortedProducts = [...res]; // Create a copy of the products array
    
    if (sortParam?.sortBy === ProductFilter.ASC) {
      sortedProducts.sort((a: Product, b: Product) => a.price - b.price);
    } else if (sortParam?.sortBy === ProductFilter.DESC) {
      sortedProducts.sort((a: Product, b: Product) => b.price - a.price);
    }
    
    return sortedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductList: React.FC<ProductListProps> = async (props) => {
  const { searchParam } = props;
  const products = await getProducts(searchParam);

  return (
    <Grid container spacing={2}>
      {products?.map((item: Product, index: number) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={4}>
          <SingleProduct key={item.id} product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
