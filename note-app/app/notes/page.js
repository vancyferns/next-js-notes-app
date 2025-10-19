
import SideNav from "@/components/SideNav";
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";

export default function NotesPage()
{
    const isViewer=true;
    return (
        <main id="notes">
                    <SideNav/>
                    {
                        !isViewer &&( <Editor isViewer={isViewer}/>)
                    }
                    {
                        isViewer && (<MDX/>)
                    }

        </main>

    );
}