import React from 'react'

export default class SignUp extends React.Component {
    render() {
        return (
            <div>
                <form>
        <div>
          <input type="text" name="email-address" placeholder="Email Address" />
          <label htmlFor="email-address">Enter Valid Email Address</label>
        </div>
        <div>
          <input type="text" name="create-username" placeholder="Create Username" />
          <label htmlFor="create-username">Create Username</label>
        </div>
        <div>
          <input type="password" name="create-password" placeholder="Create Password" />
          <label htmlFor="create-password">Create Password</label>
        </div>
        <input type="submit" value="SignUp" />
      </form>
            </div>
        )
    }
}
