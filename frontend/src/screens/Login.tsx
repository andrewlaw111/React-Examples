import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import env from '../environment';

export class Login extends React.Component {
  componentClicked() {
    return null;
  }

  responseFacebook() {
    return null;
  }

  render() {
    return (
      <div>
        <h3 className="text-center">
          Login Form
        </h3>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
          <h4 className="text-center"> OR </h4>
          <div className="text-center">
            <FacebookLogin
              appId={env.FACEBOOK_APP_ID || ''}
              autoLoad={true}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        </div>
      </div>
    );
  }
}