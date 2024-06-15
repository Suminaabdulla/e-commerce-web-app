
import FilterBar from "@/views/personal/FilterBar";
import ProductList from "@/views/personal/ProductList";
import { Box, Divider } from "@mui/material";
import { FC } from "react";
interface ISearchParam {
  sortBy: string;
}
interface IPersonal {
  searchParams: ISearchParam;
}

const Personal: FC<IPersonal>= (props) => {

  return (
    <Box sx={{backgroundColor:'white', mt:15}}>
      <Box sx={{ p:10, pt:4, pb:0 }}>
        <FilterBar searchParam={props.searchParams}/>
      </Box>
      <Divider/>
      <Box sx={{ p:10, pt:4, pb:0 }} >
        <ProductList searchParam={props.searchParams}/>
      </Box>
    </Box>
  );
};


export default Personal;