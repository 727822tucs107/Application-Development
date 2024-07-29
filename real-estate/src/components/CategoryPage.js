import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css'; // Import the CSS file for styling

function CategoryPage() {
  const categories = [
    { id: 1, name: 'Home for Sale', image: 'https://tse2.mm.bing.net/th?id=OIP.LSAP-54knZyKgTh3mQ61JQAAAA&pid=Api&P=0&h=180' },
    { id: 2, name: 'Home for Rent', image: 'https://tse1.mm.bing.net/th?id=OIP.id9D6XYzIyc3eLx0PrXksQHaE7&pid=Api&P=0&h=180' },
    { id: 3, name: 'Land for Sale', image: 'https://tse1.mm.bing.net/th?id=OIP.Hn9_AXtQC8sh3rKonqbbXgHaGE&pid=Api&P=0&h=180' },
    { id: 4, name: 'Land for Rent', image: 'https://tse4.mm.bing.net/th?id=OIP.6Lu_vurAgqHs8GGY7WVMAAAAAA&pid=Api&P=0&h=180' },
    { id: 5, name: 'Office and Shop for Rent and sale', image: 'https://tse4.mm.bing.net/th?id=OIP.h1uTtt6QKnq30igQE6rsSwHaE8&pid=Api&P=0&h=180' },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="category-page">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <p>{category.name}</p>
            <button onClick={() => handleCategoryClick(category.id)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
