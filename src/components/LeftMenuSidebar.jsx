import '../components/css/LeftMenuSidebar.css'

function LeftMenuSidebar(props) {

    return (
        <nav className="left-menu">

        <ul className="inbox-list">

          <li
            className={`item ${props.currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{props.unreadEmails.length}</span>
          </li>

          <li
            className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{props.starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={props.hideRead}
              onChange={e => props.setHideRead(e.target.checked)}
            />
          </li>

        </ul>

      </nav>
    )

}

export default LeftMenuSidebar