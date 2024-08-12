import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const products = [
    { id: 1, name: 'Chocolate caliente', price: '$39', image: 'https://www.196flavors.com/wp-content/uploads/2021/10/chocolate-caliente-3fp.jpg' },
    { id: 2, name: 'Cafe Helado', price: '$39', image: 'https://masonjarsmexico.com/wp-content/uploads/2019/07/Caf%C3%A9-Helado-Bormioli.jpg' },
    { id: 3, name: 'Rol de canela', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YEd5AqyL9qKpAw0PkkEFLY1JojbBKSXDKA&s' },
    { id: 4, name: 'Pan dulce', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCR9Z4gFnLMmg6rRE_i0pEx9X3XqU_0_1og&s' },
    { id: 5, name: 'Frape de chocolate', price: '$39', image: 'https://www.buenossaborespanama.com/wp-content/uploads/2020/09/2-11-1.jpg' },
    { id: 6, name: 'Malteada', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaOO7nX9qEOXp70WewIi4OTjyThCEJfOFsA&s' },
    { id: 7, name: 'Pastel de queso', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrArNBz2mvqYPaAfLiZ1oXjHbQZuyczUcEA&s' },
    { id: 8, name: 'Pastel de fresa', price: '$39', image: 'https://lh4.googleusercontent.com/proxy/XEJzv1FI1gC9kJrYBgAw0zp3Z3YDTwJt8rYKjlRKYmxK9GIT9T7I_bPvyTPq54w93VeemP4yr-359jGpYcu0T9mm2Hxh_WZf1xRka4auVGY2rXhrWzvUpgLT' },
    { id: 9, name: 'Cafe americano', price: '$39', image: 'https://www.somoselcafe.com.ar/img/novedades/47.jpg' },
    { id: 10, name: 'Cafe expreso', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAPeh0CYp79f1H39geljGiGBngRgFq2Jq8A&s' },
    { id: 11, name: 'Cafe cubano', price: '$39', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDAaoxKVp_Shcnw_ZvuS6Di1JbjXDrgZB2w&s' },
    { id: 12, name: 'Pan de nata', price: '$39', image: 'https://cdn7.kiwilimon.com/brightcove/10155/640x640/10155.jpg.webp' },
  ];

  return (
    <div>
      <Header />
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
