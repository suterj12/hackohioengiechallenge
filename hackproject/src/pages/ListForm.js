import React from 'react';
import ReactDOM from 'react-dom/client';

function ListForm(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <label>Item Name:
        <input 
          type="text" 
          name="item" 
          defaultValue=""
          onChange={props.onChange}
        />
        </label>
        <label>Description:
          <input 
            type="text" 
            name="description" 
            defaultValue=""
            onChange={props.onChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ListForm />);

export default ListForm;