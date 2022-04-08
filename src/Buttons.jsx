const Buttons = (props) => {
  const [setFunds, setCoffee, setBeans, setDemand, setCoffeePrice] = props.functions;
  const [funds, coffee, beans, demand, coffeePrice] = props.values;

/*   const autoSell = () => {

    let timeInMS = 4000;
    setInterval(() => {
      if(coffee >= 0) {
        //let timeInMS = 60000 / demand;
          setCoffee((currCoffee) => {
            return currCoffee - 1;
          })
          setFunds((currentFunds) => {
            return currentFunds + coffeePrice;
          })
        }
      }, timeInMS)

  } */
  

  const updateBeans = () => {
    if (funds >= 6000) {
      setFunds((currFunds) => {
        return currFunds - 6000;
      });
      setBeans((currBeans) => {
        return currBeans + 10000;
      });
    } else {
      // handle not having enough funds later.
      console.log('not enough funds');
    }
  };

  const makeCoffee = () => {
    if (beans >= 50) {
      setBeans((currBeans) => {
        return currBeans - 50;
      });
      setCoffee((currCoffee) => {
        return currCoffee + 1;
      });
    }
  };
  
  const raisePrice = () => {
    setCoffeePrice((currPrice) => {
      decreaseDemand();
      return currPrice + 10;
    });
  };

  const lowerPrice = () => {
    setCoffeePrice((currPrice) => {
      increaseDemand();
      return currPrice - 10;
    });
  };
  
  const increaseDemand = () => {
    setDemand((currDemand) => {
      // handle negative currentDemand
      return currDemand + 1;
    });
  };
  
  const decreaseDemand = () => {
    setDemand((currDemand) => {
      // handle negative currentDemand
      return currDemand - 1;
    });
  };
  
  
  return (
    <section>
      <button onClick={raisePrice}>Raise Price</button>
      <button onClick={lowerPrice}>Lower Price</button>
      <button onClick={updateBeans}>Buy Beans</button>
      <button onClick={makeCoffee}>Make Coffee</button>
    </section>
  );
};
export default Buttons;
