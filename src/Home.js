import { useState } from "react";
function Home() {
  

  const [formData, setFormData] = useState({
    email: "",
    team: "",
    leader: "",
    country: "",
    city: "",
    address: "",
    pincode: "",
    nearby: "",
    gender: "",
    college: "",
    year: "",
    caddress: "",
  });
  

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    
    <div  class="container">
      <br></br>
      <br></br>
      <form>
      <div class="user-info">
        <div class="profile-picture">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADCCAMAAACYEEwlAAAARVBMVEX////f39/a2tvd3d3W2t/Ly8vY2Nnh4eHI0t/M1d/09PTu7u7a3N7D0N/V1dXAzt/R19/K09fDz9Te0t/f2N/T2NrLx8dQW8jqAAACvElEQVR4nO2d25KbMBAFzyBuimFhc/v/Tw068cYkxeZ1Hugu15YKy/JUFyPLMNZqmKKLP7ya5XVwPD3//nX5t+d18/Si11ClXPT85J3+P/z5+auul+/0SXiDJt2eSZEdQj5xawlf/Li5hO7x6HR3CRqG9vfeEh4lHrq7hMmPm0t4EuqyQ8in40wgHQwShASDBCHBhPrsEPIJ1ewQ8gnN2SHkE1qyQ8gnVLJDyKcjHZgTDOsEIcEgQUgwoTU7hHw4E8QXKDNpyw4hn5E5oaUDt+aZGBucCWoS3rJDyIczQcwJBglCgkGCqE8w1CeIdDBIEBIMEoQEgwQhwSBBSDDUJxwUzgTSwSBBSDBIEBIMH5FqErgrjYRG6Ft2CPl0+p4dQj6BBD4iDRLUJAzZIeRDkYYo0jDMCUKCQYKoTzDUJ4h0MEgQEgwShASDBCHBIEHcdzCFZTPLZsOcICQYJIjddQxbB4iNZQzpICZGwyYSaitGJka2ImyE9uwQ8mFiFBIMEoQEgwQhwSBB1CcYLrSKdDBIEBIMEoQEgwQhwSBB1CeYggT2TzDMCUKCQYKQYJAgJBgkCAmGC63iQqshHdQkvGeHkA8/GBfpYJAgJBgkCAkGCWoSxuwQ8hlZJ7R/kEc6MCc0kCAkGCQICQYJQoKhPkHcmjekg5BgkCAkGCQICQYJQoJBgqhPMNQniHQwSBASDBKEBIMEIcEgQUgwLJvVls3swnecCT+yQ8iHOUFIMEgQEgwShASDBFGfYLjQKtLBIEFIMEgQEgwShASDBPEzYRP6mR1CPm+kQ/shGOlwKBim6OI3y7Z/NOtSl7VE9HPEvkesx7G1jxjXuVb3ePac5+jXOi913rdjhHXf+jbSHqOHOUbY+hIfFDf7+nx9v/jg0b/WuT3VXrTFefy/WtfN7qprKRcHT83xdbAMvwClCghoV3xUMQAAAABJRU5ErkJggg==" alt="Sorry"/>
        </div>
        <div class="details">
          <br></br>
        <div class="name">NAME</div>
        
        <div class="white-hr"><hr></hr></div>
        
        <div class="registration-id">Registration ID</div>
        </div>
        <br></br>
      </div>
      
    
      <input 
        type="text"
        placeholder="Email ID"
        value={formData.email}
        onChange={handleChange}
        name="email"
        id="email"
        className="input-field-large"
      />
      <br></br>
      <br></br>
      <div class="input-row">
      <input
        type="text"
        placeholder="Team ID"
        value={formData.team}
        onChange={handleChange}
        id="team"
        name="team"
        className="input-field-small"
      />
      
     
      <input
        type="text"
        placeholder="Leader"
        value={formData.leader}
        onChange={handleChange}
        id="leader"
        name="leader"
        className="input-field-small"
      />
      </div>
<br></br>
<div class="input-row">
<input
        type="text"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        id="country"
        name="country"
        className="input-field-small"
      />

<input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        id="city"
        name="city"
        className="input-field-small"
      />
      </div>
      <br></br>
     
      <div class="input-row">
<input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        id="address"
        name="address"
        className="input-field-small"
      />
  <input
        type="text"
        placeholder="Pin Code"
        value={formData.pincode}
        onChange={handleChange}
        id="pincode"
        name="pincode"
        className="input-field-small"
      />
      </div>
      <br></br>
      <div class="input-row">

<input
        type="text"
        placeholder="Nearby Zonal"
        value={formData.nearby}
        onChange={handleChange}
        id="nearby"
        name="nearby"
        className="input-field-small"
      />

<input
        type="text"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
        id="gender"
        name="gender"
        className="input-field-small"
      />
      </div>
<br></br>

<input
        type="text"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        id="college"
        name="college"
        className="input-field-large"
      />
      <br></br>
      <br></br>
<input
        type="text"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        id="year"
        name="year"
        className="input-field-large"
      />
      <br></br>
      <br></br>
  <input
        type="text"
        placeholder="College Address"
        value={formData.caddress}
        onChange={handleChange}
        id="caddress"
        name="caddress"
        className="input-field-large"
      />
      <br></br>
      <br></br>
      </form>
      <div class="bcon">
      <button onClick={handleSubmit}>Submit</button>
      </div>
      
      
    </div>
  );
}
export default Home;





