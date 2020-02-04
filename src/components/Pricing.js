import React from 'react'
const Pricing =()=>{
   return(
    <div style={{marginTop:"100px"}}>
        <h2 className= "text-center">This Price for only for Rental</h2>
    <table className="table col-6 offset-3 mt-5" style={{border:"1px solid black"}} >
<thead className="thead-dark">
<tr>
  <th scope="col"></th>
  <th scope="col">Car</th>
  <th scope="col">Bike</th>
  <th scope="col">Scooty</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1 day</th>
  <td>₹1500-₹2500</td>
  <td>₹800-₹1500</td>
  <td>₹500-₹800</td>
</tr>
<tr>
  <th scope="row">2 days</th>
  <td>₹2500-₹3500</td>
  <td>₹1500-₹2500</td>
  <td>₹800-₹1500</td>
</tr>
<tr>
  <th scope="row">3 days</th>
  <td>₹3500-₹4500</td>
  <td>₹2500-₹3500</td>
  <td>₹1200-₹2400</td>
</tr>
<tr>
  <th scope="row">4 days</th>
  <td>₹4500-₹5500</td>
  <td>₹3000-₹4000</td>
  <td>₹1600-₹2400</td>
</tr>
<tr>
  <th scope="row">5 days</th>
  <td>₹5500-₹7500</td>
  <td>₹3700-₹4500</td>
  <td>₹2000-₹3000</td>
</tr>
<tr>
  <th scope="row">6 days</th>
  <td>₹6500-₹8500</td>
  <td>₹4500-₹5400</td>
  <td>₹2400-₹3400</td>
</tr>
<tr>
  <th scope="row">7 days</th>
  <td>₹8500-₹9500</td>
  <td>₹5000-₹5900</td>
  <td>₹2700-₹3900</td>
</tr>
<tr>
  <th scope="row">8 days</th>
  <td>₹9500-₹10,500</td>
  <td>₹5500-₹6200</td>
  <td>₹3000-₹4200</td>
</tr>
<tr>
  <th scope="row">9 days</th>
  <td>₹10,500-₹11,500</td>
  <td>₹6000-₹6900</td>
  <td>₹3300-₹4500</td>
</tr>
<tr>
  <th scope="row">10 days</th>
  <td>₹11,500-₹12,500</td>
  <td>₹6300-₹7200</td>
  <td>₹3700-₹4800</td>
</tr>
<tr>
  <th scope="row">1 Month</th>
  <td>₹13,500-₹14,500</td>
  <td>₹6600-₹7500</td>
  <td>₹4000-₹5400</td>
</tr>
<tr>
  <th scope="row">2 Months</th>
  <td>₹20,500-₹21,500</td>
  <td>₹12000-₹13000</td>
  <td>₹7500-₹9000</td>
</tr>
<tr>
  <th scope="row">3 Months</th>
  <td>₹28,000-₹30,500</td>
  <td>₹16500-₹17500</td>
  <td>₹10000-₹12000</td>
</tr>
</tbody>
</table>
</div>
   );
   
}
export default Pricing;