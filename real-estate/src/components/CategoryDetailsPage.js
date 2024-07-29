import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryDetailsPage.css'; // Import the CSS file for styling

const categoryDetails = {
  1: [
    { id: 1, image: 'https://tse3.mm.bing.net/th?id=OIP.1QKDRC7DiHATF-zOeP7aZgHaEK&pid=Api&P=0&h=180', price: '$300,000', squareFeet: '2,000 sqft' },
    { id: 2, image: 'https://tse3.mm.bing.net/th?id=OIP.yJdaYn1RB9IDYbAwoc8VrwHaE8&pid=Api&P=0&h=180', price: '$350,000', squareFeet: '2,500 sqft' },
    { id: 3, image: 'https://tse3.mm.bing.net/th?id=OIP.GaedU1Z1VsTeYZEN3lp2JwHaE8&pid=Api&P=0&h=180', price: '$400,000', squareFeet: '3,000 sqft' },
    { id: 4, image: 'https://tse1.mm.bing.net/th?id=OIP.1krNIZrgXdTtDoME8Uzy_gHaEw&pid=Api&P=0&h=180', price: '$450,000', squareFeet: '3,500 sqft' },
    { id: 5, image: 'https://tse2.mm.bing.net/th?id=OIP.1PYaLvFiklDgRXRlYbdFSAHaE8&pid=Api&P=0&h=180', price: '$500,000', squareFeet: '4,000 sqft' },
    { id: 6, image: 'https://tse3.mm.bing.net/th?id=OIP.3kWmcgsAwJFLLmHYTcQwJgHaEK&pid=Api&P=0&h=180', price: '$550,000', squareFeet: '4,500 sqft' },
    { id: 7, image: 'https://tse1.mm.bing.net/th?id=OIP.fSiHGro2zBVLtgJPDjzR-QHaE7&pid=Api&P=0&h=180', price: '$600,000', squareFeet: '5,000 sqft' },
    { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.ONucZtsLE334Ftnz8934pwHaE8&pid=Api&P=0&h=180', price: '$650,000', squareFeet: '5,500 sqft' },
    { id: 9, image: 'https://tse1.mm.bing.net/th?id=OIP.sUcs1CnPvNvm_MzI3p7F0wHaES&pid=Api&P=0&h=180', price: '$700,000', squareFeet: '6,000 sqft' },
    { id: 10, image: 'https://tse2.mm.bing.net/th?id=OIP.Kbuxcx6okoH_Wa9BIypJeQHaE7&pid=Api&P=0&h=180', price: '$750,000', squareFeet: '6,500 sqft' },
  ],
  2: [
    { id: 1, image: 'https://tse1.mm.bing.net/th?id=OIP.uM5CXS4VQlDgF9Ip5k7YsQHaDB&pid=Api&P=0&h=180', price: '$300,000', squareFeet: '2,000 sqft' },
    { id: 2, image: 'https://tse3.mm.bing.net/th?id=OIP.elN6iOTqcCyUkeiBGJXQRgHaFM&pid=Api&P=0&h=180', price: '$350,000', squareFeet: '2,500 sqft' },
    { id: 3, image: 'https://tse3.mm.bing.net/th?id=OIP.oUr18e__XknIdsguWMKLwQHaHa&pid=Api&P=0&h=180', price: '$400,000', squareFeet: '3,000 sqft' },
    { id: 4, image: 'https://tse3.mm.bing.net/th?id=OIP.ZAlh-jEKb8KTYTpV_9JS_AHaE9&pid=Api&P=0&h=180', price: '$450,000', squareFeet: '3,500 sqft' },
    { id: 5, image: 'https://tse4.mm.bing.net/th?id=OIP.zIhdZtScmxdubvrCbji1owHaE_&pid=Api&P=0&h=180', price: '$500,000', squareFeet: '4,000 sqft' },
    { id: 6, image: 'https://tse4.mm.bing.net/th?id=OIP.so8j-pRqTdlRuCzgdE4HdgHaE6&pid=Api&P=0&h=180', price: '$550,000', squareFeet: '4,500 sqft' },
    { id: 7, image: 'https://tse4.mm.bing.net/th?id=OIP.l2g_o15Z8jQJ6gx6TDq7QgHaE8&pid=Api&P=0&h=180', price: '$600,000', squareFeet: '5,000 sqft' },
    { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.Q-D1w-fYpExjE4T4eqX3tgAAAA&pid=Api&P=0&h=180', price: '$650,000', squareFeet: '5,500 sqft' },
    { id: 9, image: 'https://tse3.mm.bing.net/th?id=OIP.bJhTXH64tbaQsPG1pr72qwAAAA&pid=Api&P=0&h=180', price: '$700,000', squareFeet: '6,000 sqft' },
    { id: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.28F4vii6IObDsiL4bkMzvgHaE7&pid=Api&P=0&h=180', price: '$750,000', squareFeet: '6,500 sqft' },
  ],
  3: [
    { id: 1, image: 'https://tse4.mm.bing.net/th?id=OIP.W727efabO5EuQEFathaKggHaEK&pid=Api&P=0&h=180', price: '$300,000', squareFeet: '2,000 sqft' },
    { id: 2, image: 'https://tse1.mm.bing.net/th?id=OIP.cn5fCEuEa3QegEr6fviIfgHaGE&pid=Api&P=0&h=180', price: '$350,000', squareFeet: '2,500 sqft' },
    { id: 3, image: 'https://tse1.mm.bing.net/th?id=OIP.t3yWOUak11UMyvXnAavNNAHaEK&pid=Api&P=0&h=180', price: '$400,000', squareFeet: '3,000 sqft' },
    { id: 4, image: 'https://tse1.mm.bing.net/th?id=OIP.-fM7BzJyUigPMIkj1T4EfAHaFj&pid=Api&P=0&h=180', price: '$450,000', squareFeet: '3,500 sqft' },
    { id: 5, image: 'https://tse4.mm.bing.net/th?id=OIP.prM6oaJBZ0-0SlOIv_aiJwHaHc&pid=Api&P=0&h=180', price: '$500,000', squareFeet: '4,000 sqft' },
    { id: 6, image: 'https://tse2.mm.bing.net/th?id=OIP.bnAsDfv2ZbEvjrZxJrzdPQHaEK&pid=Api&P=0&h=180', price: '$550,000', squareFeet: '4,500 sqft' },
    { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.ivM6RKTEB0Rm2Z4oTnH8cgAAAA&pid=Api&P=0&h=180', price: '$600,000', squareFeet: '5,000 sqft' },
    { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.Q_t4a9QZAcqAWZCeCvU_tgAAAA&pid=Api&P=0&h=180', price: '$650,000', squareFeet: '5,500 sqft' },
    { id: 9, image: 'https://tse4.mm.bing.net/th?id=OIP.UVL5ttRH1fiHi-cY6N553gHaE7&pid=Api&P=0&h=180', price: '$700,000', squareFeet: '6,000 sqft' },
    { id: 10, image: 'https://tse4.mm.bing.net/th?id=OIP.FT8sEyuUeVcDczzCUqfE_AHaE7&pid=Api&P=0&h=180', price: '$750,000', squareFeet: '6,500 sqft' },
  ],
  4: [
    { id: 1, image: 'https://tse1.mm.bing.net/th?id=OIP.lnXkz5cxQewNvGfIriGcZgAAAA&pid=Api&P=0&h=180', price: '$300,000', squareFeet: '2,000 sqft' },
    { id: 2, image: 'https://tse4.mm.bing.net/th?id=OIP.ZIYHR2RJAA5AgR5M76eQowHaE7&pid=Api&P=0&h=180', price: '$350,000', squareFeet: '2,500 sqft' },
    { id: 3, image: 'https://tse4.mm.bing.net/th?id=OIP.YxpKz_RdlVk5YR3BmghmzAAAAA&pid=Api&P=0&h=180', price: '$400,000', squareFeet: '3,000 sqft' },
    { id: 4, image: 'https://tse4.mm.bing.net/th?id=OIP.L2waGZ8eKk7ZjaPUlLWKDQHaE7&pid=Api&P=0&h=180', price: '$450,000', squareFeet: '3,500 sqft' },
    { id: 5, image: 'https://tse4.mm.bing.net/th?id=OIP.fLPsBeA8sNvO0OnDwa_Q_QHaFT&pid=Api&P=0&h=180', price: '$500,000', squareFeet: '4,000 sqft' },
    { id: 6, image: 'https://tse4.mm.bing.net/th?id=OIP.8cTKgj1YVRdRN4GbKD6Q-AHaFj&pid=Api&P=0&h=180', price: '$550,000', squareFeet: '4,500 sqft' },
    { id: 7, image: 'https://tse4.mm.bing.net/th?id=OIP.pxGGhO3CbvKqljFswu6dngHaEH&pid=Api&P=0&h=180', price: '$600,000', squareFeet: '5,000 sqft' },
    { id: 8, image: 'https://tse2.mm.bing.net/th?id=OIP.iILlv-JoKM1JMtJROu-7pQAAAA&pid=Api&P=0&h=180', price: '$650,000', squareFeet: '5,500 sqft' },
    { id: 9, image: 'https://tse1.mm.bing.net/th?id=OIP.yehdbY1Vp0DWfLw78nf_NAHaEu&pid=Api&P=0&h=180', price: '$700,000', squareFeet: '6,000 sqft' },
    { id: 10, image: 'https://tse2.mm.bing.net/th?id=OIP.DGSaYC1tejx-JSWzpJEMlQHaE8&pid=Api&P=0&h=180', price: '$750,000', squareFeet: '6,500 sqft' },
  ],
  5: [
    { id: 1, image: 'https://tse1.mm.bing.net/th?id=OIP.nC0v7gqmXJuejFBZGK6ktQHaFb&pid=Api&P=0&h=180', price: '$300,000', squareFeet: '2,000 sqft' },
    { id: 2, image: 'https://tse3.mm.bing.net/th?id=OIP.SXfv2inBixXnjkk-gJVTMgHaGi&pid=Api&P=0&h=180', price: '$350,000', squareFeet: '2,500 sqft' },
    { id: 3, image: 'https://tse2.mm.bing.net/th?id=OIP.fnG96ZbgnhejoEd43k5fkAHaDY&pid=Api&P=0&h=180', price: '$400,000', squareFeet: '3,000 sqft' },
    { id: 4, image: 'https://tse3.mm.bing.net/th?id=OIP.GuYwO3ifpzL4glWH7aQlrgHaFj&pid=Api&P=0&h=180', price: '$450,000', squareFeet: '3,500 sqft' },
    { id: 5, image: 'https://tse4.mm.bing.net/th?id=OIP.O7BSLGCqtkZ0JcB3JOeNRwHaEK&pid=Api&P=0&h=180', price: '$500,000', squareFeet: '4,000 sqft' },
    { id: 6, image: 'https://tse4.mm.bing.net/th?id=OIP.ZQvnHPnM3hJ-6UrCDaxEPgHaEF&pid=Api&P=0&h=180', price: '$550,000', squareFeet: '4,500 sqft' },
    { id: 7, image: 'https://tse4.mm.bing.net/th?id=OIP.oF3q6W1lUS1lN1wSiVXi1gHaE8&pid=Api&P=0&h=180', price: '$600,000', squareFeet: '5,000 sqft' },
    { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.rsZmIX55hGCBzg0xtTEzwAHaEG&pid=Api&P=0&h=180', price: '$650,000', squareFeet: '5,500 sqft' },
    { id: 9, image: 'https://tse4.mm.bing.net/th?id=OIP.B3S0_Yrv5iqXLlgGi7LjEQHaE6&pid=Api&P=0&h=180', price: '$700,000', squareFeet: '6,000 sqft' },
    { id: 10, image: 'https://tse2.mm.bing.net/th?id=OIP.PIq-mT1OS6H5s71kCv30xwAAAA&pid=Api&P=0&h=180', price: '$750,000', squareFeet: '6,500 sqft' },
  ],
  // Add more categories as needed
};

function CategoryDetailsPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const categoryItems = categoryDetails[categoryId] || [];

  const handleBackClick = () => {
    navigate('/category');
  };

  const handleAddToWishlist = (item) => {
    // Implement the logic to add the item to the wishlist
    console.log(`Added ${item.id} to wishlist`);
  };

  return (
    <div className="category-details-page">
      <h1>Category Details</h1>
      <div className="details-list">
        {categoryItems.map((item) => (
          <div key={item.id} className="details-card">
            <img src={item.image} alt={`Detail ${item.id}`} className="details-image" />
            <p>Price: {item.price}</p>
            <p>Square Feet: {item.squareFeet}</p>
            <button className="wishlist-button" onClick={() => handleAddToWishlist(item)}>
              Add to Wishlist ❤️
            </button>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={handleBackClick}>Back</button>
    </div>
  );
}

export default CategoryDetailsPage;
