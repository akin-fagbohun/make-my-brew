const Buttons = (props) => {
    const [setFunds, setCoffee, setBeans, setDemand] = props.functions;
   
    const updateBeans = () => {

        setFunds((currFunds) => {})
        setBeans((currBeans)=> {
            return currBeans + 1000;
        })
    }
    
    return (<section>
        <button >Raise Price Button</button>
        <button>Lower Price</button>
        <button onClick={updateBeans}>Buy Beans</button>
        <button>Make Coffee</button>
        </section>);
}

export default Buttons;