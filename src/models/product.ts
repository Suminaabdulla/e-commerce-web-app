export type Product = {
    id: number;
    title: string;
    price: number;
    discount_price: number | null | string;
    category: string;
    image: string;
    monthly: number;
    offer: string;
};


const defaultValue: Product = {
    id: 0,
    title: '',
    price: 0,
    discount_price: null,
    category: '',
    image: '',
    monthly: 0,
    offer:''
  };
  
export default defaultValue;
