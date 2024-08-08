import React, { useState } from 'react';

const PaymentComponent = ({ payments }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <div>
      <h1>Payments</h1>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            <p>Name: {payment.name}</p>
            <button onClick={() => handlePaymentClick(payment)}>View Details</button>
          </li>
        ))}
      </ul>
      {selectedPayment && (
        <div>
          <h2>Payment Details</h2>
          <p>ID: {selectedPayment.id}</p>
          <p>Name: {selectedPayment.name}</p>
          <img src={selectedPayment.image} alt={selectedPayment.name} />
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
