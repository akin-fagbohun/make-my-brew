import { useState } from 'react'
import Buttons from './Buttons'

const Info = () => {
    const [ funds, setFunds ] = useState(0);
    const [ coffee, setCoffee ] = useState(0);
    const [ beans, setBeans ] = useState(1000);
    const [ demand, setDemand ] = useState(60);

    

    const arrayOfFuntions = [setFunds, setCoffee, setBeans, setDemand];

    return (<section>This is the info section
        <section>
            <p>Funds: {funds}</p>
            <p>No. of Coffees: {coffee}</p>
            <p>Available Beans : {beans} </p>
            <p>Current Demand: {demand}</p>
        </section>
        
        <Buttons functions={arrayOfFuntions}></Buttons>
    </section>)
}

export default Info