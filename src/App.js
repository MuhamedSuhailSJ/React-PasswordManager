import AddPasswordForm from './Components/PasswordForm'
import './App.css'

const App = () => (
  <div className="bgcontainer">
    <navbar>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        alt="app logo"
        className="applogo"
      />
    </navbar>
    <div>
      <AddPasswordForm />
    </div>
  </div>
)

export default App
