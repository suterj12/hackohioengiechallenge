import React from 'react';
import ReactDOM from 'react-dom/client';

function ListForm(props) {
    return (
      <form id="form" onSubmit={props.handleSubmit}>
        <div class="form-spacer">
            <label>Item Name:
            <input 
            type="text" 
            name="item" 
            defaultValue=""
            onChange={props.onChange}
            />
            </label>
        </div>
        <div class="form-spacer">
            <label>Category:</label>
            <div class="categories">
                <input type="radio" id="furniture" name="dontation_cat" value="furniture" />
                <label for="furniture">Furniture</label>
                <input type="radio" id="appliances" name="dontation_cat" value="appliances" />
                <label for="appliances">Appliances</label>
                <input type="radio" id="decor" name="dontation_cat" value="decor" />
                <label for="decor">Decor</label>
                <input type="radio" id="clothing" name="dontation_cat" value="clothing" />
                <label for="clothing">Clothing</label>
                <input type="radio" id="misc" name="dontation_cat" value="misc" />
                <label for="misc">Misc</label>
                <input type="radio" id="stolencarparts" name="dontation_cat" value="stolencarparts" />
                <label for="stolencarparts">Stolen Car Parts</label>
            </div>
        </div>
        <div class="form-spacer">
            <label>Description:
            <input 
                type="text" 
                name="description" 
                defaultValue=""
                onChange={props.onChange}
            />
            </label>
          </div>
          <input type="submit" />
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ListForm />);

export default ListForm;