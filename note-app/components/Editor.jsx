"use client";
import TopNav from "@/components/TopNav";
export default function Editor(props) {
   const {text,setText}=props;
    return (
        <section className="notes-container">
            <TopNav {...props}/>
            <textarea value={text} onChange={(e)=>{
                setText(e.target.value);
            }} placeholder="Start writing your notes here..."></textarea>

        </section>
    )
}