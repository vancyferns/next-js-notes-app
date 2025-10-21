export default function SideNav(props) {
  const { className = '', onToggleSidebar } = props;
  const notes=["First Note", "Second Note", "Third Note"];
  const {showNav,setShowNav}=props;
  // Prefer an explicit className prop (passed from page via sidebarOpen). If the
  // parent didn't pass className, fall back to the showNav boolean.
  const hasClassNameProp = Object.prototype.hasOwnProperty.call(props, 'className');
  const visibilityClass = hasClassNameProp ? className : (showNav ? '' : 'hidden-nav');
  // className may be 'hidden-nav' from parent on mobile
  return (
    <section className={"nav " + visibilityClass}>
      <div className="nav-header">
        <div>
          <h1 className="text-gradient">Notsify</h1>
          <h6>Easy Breezy Notes</h6>
        </div>
        {onToggleSidebar ? (
          <button aria-label="Close sidebar" className="card-button-secondary close-nav" onClick={onToggleSidebar}>
            &times;
          </button>
        ) : null}
      </div>
      <div className="full-line"></div>

      <button>
        <h6>New Notes</h6>
        <i className="fa-solid fa-plus"></i>
      </button>

      <div className="notes-list">
        {(!notes || notes.length === 0) ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note, idx) => (
            <button key={idx} className="card-button-secondary list-btn">
              <p>{note}</p>
              <small>DATETIME</small>
              <div className="delete-btn">
                 <i className="fa-solid fa-trash-can"></i>
              </div>
     
            </button>
          ))
        )}
      </div>
      <div className="full-line"></div>
       <button>
          <h6>Logout</h6>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    </section>
  );
}