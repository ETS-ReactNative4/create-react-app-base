import { Alert, Button, Form, FormGroup, Input, Label } from 'components/common'
import React, { Component } from 'react'

import { GlobalContainerContext } from 'components/global/GlobalContainer'

import './Login.scss'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange(input) {
    this.setState({
      [input.target.name]: input.target.value
    })
  }

  login = async context => {
    const userValid = await context.state.login({ email: this.state.email, password: this.state.password })
    if (userValid) {
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  passworkKeyDown(input, context) {
    if (input.key === 'Enter') {
      this.login(context)
    }
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          return !context.state.user ? (
            <Form className="form-signin bg-secondary rounded">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <FormGroup>
                <Label for="inputEmail">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  placeholder="Email address"
                  required=""
                  autoFocus=""
                  value={this.state.email}
                  onChange={e => this.onChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder="Password"
                  required=""
                  value={this.state.password}
                  onChange={e => this.onChange(e)}
                  onKeyDown={e => this.passworkKeyDown(e, context)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" value="remember-me" /> Remember me
                </Label>
              </FormGroup>
              <Button block={true} className="mt-3" color="primary" onClick={() => this.login(context)}>
                Sign in
              </Button>
              {context.state.userIsValid === false && (
                <Alert color="danger" className="mt-3">
                  User Name / Password is invalid
                </Alert>
              )}
            </Form>
          ) : (
            <div className="text-center">
              <Button onClick={() => context.state.logOut()}>
                Logout {context.state.user.firstName} {context.state.user.lastName}
              </Button>
            </div>
          )
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Login
