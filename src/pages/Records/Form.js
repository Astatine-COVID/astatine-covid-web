import React from 'react';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
      <label htmlFor="name">First Name: </label>
    <input className="form-control" id="first_name" />
  </div> 

  <div className="form-group">
      <label htmlFor="name">Last Name: </label>
    <input className="form-control" id="last_name" />
  </div> 

  <div className="form-group">
      <label htmlFor="name">Test Date: </label>
    <input className="form-control" id="test_date" placeholder="MM/DD/YYY"/>
  </div> 
  
  <div className="form-group">
    <label htmlFor="email">Test result: </label>
    <input type="email" className="form-control" id="test_result"
     placeholder="positive/negative" 
    />
</div>
  <div className="form-group">
    <button className="form-control btn btn-primary" type="submit">
      Submit
    </button>
</div>
</form>
);
};
export default Form;