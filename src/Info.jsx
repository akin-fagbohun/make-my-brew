import { useState } from 'react'; // import useEffect for demand functionality
import Buttons from './Buttons';
import Form from './Form';

const Info = () => {
  const [funds, setFunds] = useState(10000);
  const [coffee, setCoffee] = useState(0);
  const [beans, setBeans] = useState(10000);
  const [demand, setDemand] = useState(60);
  const [coffeePrice, setCoffeePrice] = useState(300);

  const [customerName, setCustomerName] = useState('Enter Your Name');
  const [customerOrder, setCustomerOrder] = useState(0);
  const [customerProfile, setCustomerProfile] = useState({});

  const arrayOfValues = [funds, coffee, beans, demand, coffeePrice];
  const arrayOfFuntions = [setFunds, setCoffee, setBeans, setDemand, setCoffeePrice];

  return (
    <section>
      <p>Hello {customerProfile.name}</p>
      <p>Your order is {customerProfile.order} coffees.</p>
      <section>
        <p>Funds: {funds}</p>
        <p>No. of Coffees: {coffee}</p>
        <p>Available Beans : {beans} </p>
        <p>Current Demand: {demand}</p>
        <p>Price of a Cup: {coffeePrice}</p>
      </section>
      <Buttons functions={arrayOfFuntions} values={arrayOfValues}></Buttons>
      <Form
        setCustomerName={setCustomerName}
        setCustomerOrder={setCustomerOrder}
        setCustomerProfile={setCustomerProfile}
        customerOrder={customerOrder}
        customerName={customerName}
      />
    </section>
  );
};

export default Info;
