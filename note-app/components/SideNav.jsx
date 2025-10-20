export default function SideNav(props) {
  const { className = '', onToggleSidebar } = props;
  const notes=["First Note", "Second Note", "Third Note"];
  // className may be 'hidden-nav' from parent on mobile
  return (
    <section className={"nav " + className}>
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