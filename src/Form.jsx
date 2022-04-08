const Form = (props) => {
    const { setCustomerOrder, setCustomerName } = props;

    const handleNameInput = (event) => {
        setCustomerName(event.target.value)
    }

    const handleOrderInput = (event) => {
        setCustomerOrder(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="customer-name"></label>
            <input onBlur={handleNameInput} id="customer-name" type="text" ></input>

            <label htmlFor="customer-order"></label>
            <input  onChange={handleOrderInput} id="customer-order" type="number" min="0"></input>
            <button type="submit" >Submit Order</button>
        </form>
    )
}

export default Form;