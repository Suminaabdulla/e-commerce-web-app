'use client'

import React, { useState } from 'react'
import { Tabs, Tab, Box, colors } from '@mui/material';

interface DynamicTabsProps {
  items: {
    label: string;
  }[];
}

const HeaderTab: React.FC<DynamicTabsProps> = ({ items }) => {

  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? 'white' : '#f3f3f1',
    color: isActive ? 'red' : '#1d252d',
    borderBottom: 'none',
    height: 10,
  });

  return (
    <Box sx={{ bgcolor: '#f3f3f1', paddingX: 10 }}>
      <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 'none' }} TabIndicatorProps={{style:{ backgroundColor:colors.common.white}}}>
        {items.map((item, index) => (
          <Tab
            key={index}
            label={item.label}
            style={tabStyle(value === index)}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default HeaderTab