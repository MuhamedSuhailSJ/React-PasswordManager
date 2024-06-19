import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddPasswordListItem from '../PasswordListItem'
import './index.css'

export default class AddPasswordForm extends Component {
  state = {
    searchItem: '',
    passwordList: [],
    websiteurl: '',
    username: '',
    password: '',
    passwordvisible: false,
  }

  websiteEventchange = event => {
    this.setState({websiteurl: event.target.value})
  }

  usernameEventchange = event => {
    this.setState({username: event.target.value})
  }

  passwordEventchange = event => {
    this.setState({password: event.target.value})
  }

  showpasswordState = () => {
    this.setState(pervstate => ({passwordvisible: !pervstate.passwordvisible}))
  }

  searchpassword = event => {
    this.setState({searchItem: event.target.value})
  }

  deletelistItem = id => {
    const {passwordList} = this.state
    const updatedlist = passwordList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordList: updatedlist})
  }

  addPasswordToList = event => {
    event.preventDefault()
    const {passwordList, websiteurl, username, password} = this.state
    if (
      websiteurl !== ' ' * websiteurl.length &&
      username !== '' &&
      password !== ''
    ) {
      const passwordobj = {
        id: uuidv4(),
        websiteurl,
        username,
        password,
      }
      this.setState({
        passwordList: [...passwordList, passwordobj],
        websiteurl: '',
        username: '',
        password: '',
      })
    }
  }

  render() {
    const {
      passwordList,
      websiteurl,
      username,
      password,
      passwordvisible,
      searchItem,
    } = this.state
    const filterdPasswordList = passwordList.filter(eachItem =>
      eachItem.websiteurl.toLowerCase().includes(searchItem.toLowerCase()),
    )
    const passwordcount = filterdPasswordList.length

    const passwordlistcontainer = () => {
      if (passwordcount === 0) {
        return (
          <div className="nopasswordcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              className="nopasswordimg"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        )
      }
      return (
        <div>
          <ul className="passwordItem-container">
            {filterdPasswordList.map(eachitem => (
              <AddPasswordListItem
                details={eachitem}
                deletelistItem={this.deletelistItem}
                buttonstate={{passwordvisible}}
                key={eachitem.id}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="container">
        <form onSubmit={this.addPasswordToList} className="FormContainer">
          <div className="formbgcontainer">
            <h1 className="formhead">Add New Password</h1>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="inputImg"
                alt="website"
              />
              <input
                placeholder="Enter Website"
                onChange={this.websiteEventchange}
                value={websiteurl}
                type="text"
                className="inputelement"
              />
            </div>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="inputImg"
                alt="username"
              />
              <input
                placeholder="Enter Username"
                onChange={this.usernameEventchange}
                value={username}
                type="text"
                className="inputelement"
              />
            </div>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="inputImg"
                alt="password"
              />
              <input
                placeholder="Enter Password"
                onChange={this.passwordEventchange}
                value={password}
                type="password"
                className="inputelement"
              />
            </div>
            <div className="formbuttoncontainer">
              <button type="submit" className="formbutton">
                Add
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="formImg-lg"
            />
          </div>
        </form>
        <div className="passwordcontainer">
          <div className="containersectionone">
            <div className="headingcontainer">
              <h1 className="heading">Your Passwords</h1>
              <div className="countcontainer">
                <p className="listcount">{passwordcount}</p>
              </div>
            </div>
            <div className="searchcontainer">
              <div className="searchimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="searchimg"
                  alt="search"
                />
              </div>
              <input
                onChange={this.searchpassword}
                type="search"
                className="searchinput"
              />
            </div>
          </div>
          <hr className="breakline" />
          <div className="PasswordListcontainer">
            <div className="passwordcheckboxcontainer">
              <input
                id="checkboxidone"
                onChange={this.showpasswordState}
                type="checkbox"
              />
              <label htmlFor="checkboxidone" className="checkboxlabel">
                Show Passwords
              </label>
            </div>
            {passwordlistcontainer()}
          </div>
        </div>
      </div>
    )
  }
}
