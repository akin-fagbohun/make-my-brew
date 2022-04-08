import { useState } from 'react'; // import useEffect for demand functionality
import Buttons from './Buttons';

const Info = () => {
  const [funds, setFunds] = useState(10000);
  const [coffee, setCoffee] = useState(0);
  const [beans, setBeans] = useState(10000);
  const [demand, setDemand] = useState(60);
  const [coffeePrice, setCoffeePrice] = useState(300);

  const arrayOfValues = [funds, coffee, beans, demand, coffeePrice];
  const arrayOfFuntions = [setFunds, setCoffee, setBeans, setDemand, setCoffeePrice];

  return (
    <section>
      This is the info section
      <section>
        <p>Funds: {funds}</p>
        <p>No. of Coffees: {coffee}</p>
        <p>Available Beans : {beans} </p>
        <p>Current Demand: {demand}</p>
        <p>Price of a Cup: {coffeePrice}</p>
      </section>
      <Buttons functions={arrayOfFuntions} values={arrayOfValues}></Buttons>
    </section>
  );
};

export default Info;
