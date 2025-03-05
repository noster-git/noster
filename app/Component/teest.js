'use client'
import { useState } from "react";
export default function Overview({ experience }) {

    const [skillsRequired, setSkillsRequired] = useState([])
    
    if((experience >= 1) || (experience === 2)) {
        setSkillsRequired(() => {
            return ["Nextjs or Reactjs", "HTML", "Tailwind CSS", "CSS", "JavaScript", "Git/Github"]
        })
    } else {
        return null
    }

    return (
        <div>
            <ul>
                {skillsRequired.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )

}


