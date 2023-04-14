import { useState } from "react";
import "./Accordion.css";
import questions from "./data";

function Acc() {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(id === activeId ? null : id)
    };

    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {questions.map(({ id, title, info }) =>
                        <article className="question" key={id}>
                            <header>
                                <h4>{title} </h4>
                                <button className="btn" onClick={() => handleClick(id)}>
                                    {id === activeId ?
                                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg> 
                                    : 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"  pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg>
                                    }
                                </button>
                            </header>
                            {id === activeId && <p>{info}</p> }
                        </article>
                    )}

                </section>
            </div>
        </main>

    )

}

export default Acc