import React from 'react';
import {render} from 'react-dom';
import Update from './hcard.jsx';
import MyUploader from './hcard_img_upload.jsx';

class hCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      house: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Next Steps: Validation and back end things!');
    event.preventDefault();
  }

  handleUpload(event){
    <MyUploader />
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
       
        <div className="inputs col-md-6">
          <h1> hCard Builder</h1>
          <form onSubmit={this.handleSubmit}>
            
            <div className="sub-heading col-md-12">Personal Details</div>
            
            <div className="col-md-6">
              <label>
                Given Name:
              </label>
              <input name="givenName" type="text" value={this.state.givenName} onChange={this.handleChange} />
              
            </div>

            <div className="col-md-6">
              <label>
                Surname:
              </label>
              <input name="surname" type="text" value={this.state.surname} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                Email:
              </label>
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                Phone:
              </label>
              <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
            </div>

            <div className="sub-heading col-md-12">Address</div>

            <div className="col-md-6">
              <label>
                House Name or #:
              </label>
              <input name="house" type="text" value={this.state.house} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                Street:
              </label>
              <input name="street" type="text" value={this.state.street} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                Suburb:
              </label>
              <input name="suburb" type="text" value={this.state.suburb} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                State:
              </label>
              <select name="state" className="selectpicker form-control" value={this.state.state} onChange={this.handleChange}>
                <option selected value="Select"> Select State</option>
                <option value="ACT">ACT</option>
                <option value="NSW">NSW</option>
                <option value="NT">NT</option>
                <option value="QLD">QLD</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="VIC">VIC</option>
                <option value="WA">WA</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>
                Postcode:
              </label>
              <input name="postcode" type="text" value={this.state.postcode} onChange={this.handleChange} />
            </div>

            <div className="col-md-6">
              <label>
                Country:
              </label>
              <input name="country" type="text" value={this.state.country} onChange={this.handleChange} />
            </div>
            
            <div id="imgUpload" className="collapse"> <MyUploader /></div>
            <div  data-toggle="collapse" data-target="#imgUpload" className="col-md-6"><input name="imgUpload" onClick={this.handleUpload} type="button" value="Upload Avatar" /></div>

            <div className="col-md-6"><input type="submit" value="Create hCard" /></div>
          </form>

        </div>

        <div className="display col-md-6">
          <Update 
            name={this.state.givenName} 
            surname={this.state.surname} 
            email={this.state.email} 
            phone={this.state.phone} 
            house={this.state.house} 
            street={this.state.street} 
            suburb={this.state.suburb} 
            state={this.state.state} 
            postcode={this.state.postcode} 
            country={this.state.country} 
          />
        
        </div>

      </div>

    );
  }
}

export default hCard;