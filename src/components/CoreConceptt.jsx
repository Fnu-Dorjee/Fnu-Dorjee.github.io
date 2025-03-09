
import CoreConcept from "./CoreConcepts.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConceptt(){
    return (
        <Section title={'Core Principles'} id="core-concepts">
                <ul>
                  {CORE_CONCEPTS.map((items)=><CoreConcept key={items.title} {...items}/>)}
          
                </ul>
        </Section>
    );
}