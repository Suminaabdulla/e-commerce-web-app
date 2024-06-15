"use client"

import ReactSelect from 'react-select';
import Props from './type';
import Link from 'next/link';
import colors from '@/utils/colors';

function AppSelect<T>(props: Props<T>) {
  const {
    options,
    innerPlaceHolder = 'Choose',
    name,
    value,
    defaultValue,
  } = props;

  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected ? colors.common.white : colors.common.black,
      backgroundColor: state.isSelected ? colors.primary.lightRadicalRed : colors.common.white,
      cursor: 'pointer',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#000',
    }),
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#f7f7f7',
    }),
  };

  return (
      <ReactSelect
        name={name}
        options={options.map((option: any) => ({
          ...option,
          label: (
            <Link href={`?sortBy=${option.value}`} passHref>
              {option.label}
            </Link>
          ),
        }))}
        value={value}
        defaultValue={defaultValue}
        placeholder={innerPlaceHolder}
        className='select-main'
        styles={customStyles}
      />
  );
}

export default AppSelect;
