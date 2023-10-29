import React from 'react';
 
const Recycling = () => {
    return (
        <div class="recycling">

        <div class = "content-holder">
        <h1>What Can I Recycle?</h1>
        <div class = "column">
          <div> 
            <div class = "column">
              <div>
            <h3>Examples of Acceptable Items:</h3>
            <ul class = "recycleList">
              <li>✔ Plastic bottles and jugs</li>
              <li>✔ Fountain drink cups</li>
              <li>✔ Laundry detergent bottles</li>
              <li>✔ Shampoo bottles</li>
              <li>✔ Yogurt containers</li>
              <li>✔ Butter tubs</li>
              <li>✔ Fruit cups</li>
            </ul>
            </div>
            <div>
            <h3>Examples of Unnacceptable Items:</h3>
            <ul class = "recycleList">
              <li>🚫 Plastic bags</li>
              <li>🚫 Pizza boxes</li>
              <li>🚫 Plastic utensils</li>
              <li>🚫 Candy wrappers</li>
              <li>🚫 Styrofoam</li>
              <li>🚫 To-go food containers</li>
              <li>🚫 Potato chips bags</li>
              <br></br>
            </ul>
            </div>
             </div>
             </div>
          <div>
            <h3>Tips For Smart Recycling!</h3>
            <ul class = "recycleList">
              <li>❐ Lids, caps and labels can be kept on recyclable containers</li>
              <li>❐ Rinse dirty recyclables</li>
              <li>❐ Do not recycle anything contaminated with food grease or oil</li>
              <li>❐ Plastic grocery bags should not be directly recycled, but many grocery stores can recycle them!</li>
              <li>❐ Yard waste can be placed in biodegradable bags for separate collection</li>
              <li>❐ Sorting recyclable materials, like seperating bottles from paper, is not necessary in Columbus</li>
              <li>❐ For more information, check out <a href="https://fod.osu.edu/recycling"> OSU Recycle Right</a></li>
            </ul>
            <br></br>
          </div>
        </div>
        </div>

        <div class="content-holder">
          <h1>Where Can I Recycle?</h1>
          <img src="./RecycleMap.jpg" width="85%"></img>
        </div>
        </div>
        
    );
};
 
export default Recycling;