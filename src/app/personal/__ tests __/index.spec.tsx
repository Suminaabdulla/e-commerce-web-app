import { render, screen } from '@testing-library/react';
import ProductList from '@/views/personal/ProductList';

describe('ProductList', () => {
  it('renders the Dashboard component', () => {
    render(<ProductList />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
