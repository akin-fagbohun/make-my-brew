const Form = (props) => {
  const {
    setCustomerOrder,
    setCustomerName,
    setCustomerProfile,
    customerName,
    customerProfile,
    customerOrder,
  } = props;

  const handleNameInput = (event) => {
    setCustomerName(event.target.value);
  };

  const handleOrderInput = (event) => {
    setCustomerOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const name = event.target[0].value;
    // const order = event.target[1].value;

    setCustomerProfile({ name: customerName, order: customerOrder });

    // setCustomerName('Enter Your Name');
    // setCustomerOrder(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="customer-name"></label>
      <input
        value={customerName}
        onChange={handleNameInput}
        onBlur={handleNameInput}
        id="customer-name"
        type="text"
        placeholder="name"
      ></input>

      <label htmlFor="customer-order"></label>
      <input
        value={customerOrder}
        onChange={handleOrderInput}
        id="customer-order"
        type="number"
        min="0"
      ></input>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default Form;
