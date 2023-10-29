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
            <label>On/Off Campus:
            <input 
                type="text" 
                name="onoffcampus" 
                defaultValue=""
                onChange={props.onChange}
            />
            </label>
          </div>
          <div class="form-spacer">
            <label>Area:
            <input 
                type="text" 
                name="area" 
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