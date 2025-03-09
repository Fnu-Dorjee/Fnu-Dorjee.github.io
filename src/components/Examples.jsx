
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples(){
     const [selectedTopic, setSelectedTopic] = useState();
    
      function handleSelect(selectedbtn){
        setSelectedTopic(selectedbtn)
      }
    
      let tabCotent = 'please select a topic';
      if(selectedTopic){
        tabCotent = (<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)
      }
    return (
        <Section title={'Tibetan Schools Of Thoughts'} id="examples">
            <Tabs BtnContainer='menu'  buttons={
                <>
                <TabButton 
                  isSelected={selectedTopic==='nyinma'} 
                  onClick={()=>handleSelect('nyinma')}>
                    Nyinma
                </TabButton>
                <TabButton isSelected={selectedTopic === 'kagyu'} onClick={()=> handleSelect('kagyu')}>Kagyu</TabButton>
                <TabButton isSelected={selectedTopic === 'galuk'}onClick = {()=> handleSelect('galuk')}>Galuk</TabButton>
                <TabButton isSelected={selectedTopic == 'sakya'} onClick = {()=> handleSelect('sakya')}>Sakya</TabButton>
                </>
            }>
            {tabCotent}
            </Tabs>
          
        </Section>
    );
}