import './index.css'

const AddPasswordListItem = props => {
  const {details, buttonstate, deletelistItem} = props
  const {id, username, password, websiteurl} = details
  const {passwordvisible} = buttonstate
  const showorhidepassword = !passwordvisible ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="starimg"
      alt="stars"
    />
  ) : (
    password
  )
  const deletebuttonItem = () => {
    deletelistItem(id)
  }
  return (
    <li className="listitemcontainer">
      <div className="itemcontainer">
        <div className="detailcontainer">
          <div className="userlogocontainer">
            <p className="userlogoelement">Y</p>
          </div>
          <div>
            <p className="detailheading">{websiteurl}</p>
            <p className="detailheading">{username}</p>
            <p className="detailheading">{showorhidepassword}</p>
          </div>
        </div>
        <div>
          <button
            onClick={deletebuttonItem}
            type="button"
            data-testid="delete"
            className="listitembutton"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              className="listitembuttonimg"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AddPasswordListItem
