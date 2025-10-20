"use client";
import TopNav from "@/components/TopNav";
export default function Editor(props) {

    return (
        <section className="notes-container">
            <TopNav {...props}/>
            <textarea placeholder="Start writing your notes here..."></textarea>

        </section>
    )
}