import React from 'react';
import { Grid } from '@mui/material';
import AppSelect from '@/core/components/app-select';
import { ProductFilter } from '@/const/enum/productFilter';

interface ISearchParam {
  sortBy: string;
}
interface FilterBarProps {
  searchParam: ISearchParam
}

const FilterBar: React.FC<FilterBarProps>= ({ searchParam }) => {
  const productFilterOptions = [{ value: 'SMARTPHONES', label: 'Smartphones' }];
  const productSort = [{ value: ProductFilter.ASC, label: 'Price low to high' }, { value: ProductFilter.DESC, label: 'Price high to low' }];


  return (
    <Grid container justifyContent="space-between" pb={3}>
      <Grid item xs={12} sm={3} md={3} lg={3} xl={4}>
        <AppSelect
         options={productFilterOptions}
         innerPlaceHolder='Category'
         defaultValue={productFilterOptions[0]}
        />
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
        <AppSelect
         options={productSort}
         innerPlaceHolder='Sort'
         value={productSort.filter((item) => item.value === searchParam.sortBy)[0]}
        />
      </Grid>
    </Grid>
  );
}

export default FilterBar;
