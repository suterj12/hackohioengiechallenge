import React from 'react';
 
const Recycling = () => {
    return (
        <div class="content-holder recycling">
        <h1>What Can I Recycle?</h1>
        <div class = "column">
          <div>
            <h3><i>Many types of plastic can be recycled, like bottles, containers, and cups</i></h3>
              <br/>
            <h3>Examples of Acceptable Items:</h3>
            <ul class = "recycleList">
              <li>✔ Plastic bottles and jugs</li>
              <li>✔ Fountain drink cups</li>
              <li>✔ Laundry detergent bottles, tide pod containers</li>
              <li>✔ Shampoo bottles</li>
              <li>✔ Yogurt containers</li>
              <li>✔ Butter tubs</li>
              <li>✔ Fruit cups</li>
              <br/>
            </ul>
            <h3>Tip: please reattach lids!</h3>
          </div>
          <div>
            <h3><i> Sorting materials can be 
            expensive and time consuming for recycling facilities, so take note of what we cannot recycle.</i></h3>
            <br/>
            <h3>Examples of Unnacceptable Items:</h3>
            <ul class = "recycleList">
              <li>🚫 Plastic bags</li>
              <li>🚫 Pizza boxes</li>
              <li>🚫 Plastic utensils (forks, knives, spoons, straws)</li>
              <li>🚫 Candy wrappers</li>
              <li>🚫 Bubble wrappers</li>
              <li>🚫 Styrofoam</li>
              <li>🚫 To-go food containers</li>
              <li>🚫 Potato chips bags</li>
              <br/>
            </ul>
            <h3> Tip: anything contaminated with food, grease, or oil cannot be recycled!</h3>
          </div>
        </div>
        </div>
    );
};
 
export default Recycling;