
"use client";
import { use, useState } from 'react';
import SideNav from "@/components/SideNav";
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";

export default function NotesPage()
{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isViewer,setIsViewer]=useState(true);

    function handleToggleViewer(){
        setIsViewer(!isViewer);
    }
    function toggleSidebar(){
        setSidebarOpen(v=>!v);
    }

    return (
        <main id="notes">
            <SideNav className={sidebarOpen?"":"hidden-nav"} onToggleSidebar={toggleSidebar} />

            <section className="content-area">
                {!isViewer && (
                    <Editor isViewer={isViewer} onToggleSidebar={toggleSidebar} handleToggleViewer={handleToggleViewer}/>
                )

                }
                
                {isViewer && (<MDX handleToggleViewer={handleToggleViewer} onToggleSidebar={toggleSidebar} />)}
            </section>

        </main>

    );
}