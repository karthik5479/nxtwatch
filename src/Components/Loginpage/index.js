import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  Img,
  Labels,
  Logform,
  Containers,
  Inputs,
  Loginbtn,
  Para,
  CheckBoxCon,
  Checkbox,
  StyledLabel,
} from './styledComponents'

class Loginpage extends Component {
  state = {
    username: '',
    password: '',
    errorMassage: '',
    showpassword: false,
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailed = errorMassage => {
    this.setState({showError: true, errorMassage})
  }

  onShowPaas = () => {
    this.setState(prevState => ({showpassword: !prevState.showpassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailed(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showError,
      errorMassage,
      showpassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const inputType = showpassword ? 'text' : 'password'

    return (
      <MainContainer>
        <Logform onSubmit={this.submitForm}>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Containers>
            <Labels htmlFor="username">USERNAME</Labels>
            <Inputs
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </Containers>
          <Containers>
            <Labels htmlFor="password">PASSWORD</Labels>
            <Inputs
              type={inputType}
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChangePassword}
              required
            />
            <CheckBoxCon>
              <Checkbox
                type="checkbox"
                id="checkbox"
                onChange={this.onShowPaas}
                checked={showpassword}
              />
              <StyledLabel htmlFor="checkbox">Show Password</StyledLabel>
            </CheckBoxCon>
          </Containers>

          <Loginbtn type="submit">Login</Loginbtn>

          {showError && (
            <Para className="error-msg" data-testid="errorMessage">
              *{errorMassage}
            </Para>
          )}
        </Logform>
      </MainContainer>
    )
  }
}

export default Loginpage
