"use client";

export default function TopNav(props) {
        const {isViewer, onToggleSidebar,handleToggleViewer,handleToggleMenu} = props;
    return (
        <>
        <div className="topbar">
            <div className="left">
                <button className="card-button-primary menu" onClick={onToggleSidebar} aria-label="Toggle sidebar">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            <div className="right">
                <button className="card-button-secondary">
                    <h6>Save</h6>
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <button onClick={handleToggleViewer} className="card-button-secondary">
                    {isViewer ? (
                        <>
                            <h6>Editor</h6>
                            <i className="fa-solid fa-pencil"></i>
                        </>
                    ) : (
                        <>
                            <h6>Viewer</h6>
                            <i className="fa-solid fa-check-double"></i>
                        </>
                    )}
                </button>
            </div>
        </div>
        <div className="full-line"></div>
        </>
    );
}