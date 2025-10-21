
"use client";
import { use, useState } from 'react';
import SideNav from "@/components/SideNav";
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";

export default function NotesPage()
{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isViewer,setIsViewer]=useState(true);
    const [text,setText]=useState("");
    const [showNav,setShowNav]=useState(false);


    function handleToggleViewer(){
        setIsViewer(!isViewer);
    }
    function toggleSidebar(){
        setSidebarOpen(v=>!v);
    }
    
    function handleToggleMenu(){
        setShowNav(!showNav);
    }

    return (
        <main id="notes">
            <SideNav className={sidebarOpen?"":"hidden-nav"} onToggleSidebar={toggleSidebar} showNav=
            {showNav} setShowNav={setShowNav} />

            <section className="content-area">
                {!isViewer && (
                    <Editor isViewer={isViewer} setText={setText} text={text} onToggleSidebar={toggleSidebar} handleToggleViewer={handleToggleViewer} handleToggleMenu={handleToggleMenu}/>
                )

                }
                
                {isViewer && (<MDX handleToggleViewer={handleToggleViewer}  text={text} onToggleSidebar={toggleSidebar} showNav={setShowNav} handleToggleMenu={handleToggleMenu}/>)}
            </section>

        </main>

    );
}