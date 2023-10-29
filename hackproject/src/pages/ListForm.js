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
            <label>Description:
            <input 
                type="text" 
                name="description" 
                defaultValue=""
                onChange={props.onChange}
            />
            </label>
          </div>
          <div class="form-spacer categories">
            <label for="pickup">Pickup From Seller</label><br />
            <input type="radio" id="pickup" name="pickup" value="pickup" onChange={props.onChange}/>
            <label for="meet">Meet on Campus</label><br />
            <input type="radio" id="meet" name="meet" value="meet" onChange={props.onChange}/>
            <label for="dropoff">Seller Dropoff</label><br />
            <input type="radio" id="dropoff" name="dropoff" value="dropoff" onChange={props.onChange}/>
          </div>
          <div class="form-spacer">
            <label for="areas">Choose an Area:</label>
            <select id="areas" name="areas" onChange={props.onChange}>
                <option value="Off Campus, North">Off Campus: North</option>
                <option value="On Campus, North">On Campus: North</option>
                <option value="Off Campus, South">Off Campus: South</option>
                <option value="On Campus, South">On Campus: South</option>
                <option value="Off Campus, Central">Off Campus: Central</option>
                <option value="Off Campus, North East">Off Campus: North East</option>
                <option value="Off Campus, North West">Off Campus: North West</option>
            </select>
          </div>
          <input type="submit" />
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ListForm />);

export default ListForm;