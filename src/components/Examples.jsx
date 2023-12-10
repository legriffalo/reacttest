import {EXAMPLES} from '../data';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';


export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
 
    function handleClick(selectedButton){
      setSelectedTopic(selectedButton)
    }

    return(
        <>
        <section id = 'examples'>
        <h2>Examples</h2>
        <menu>
        <TabButton isSelected={selectedTopic==='components'} onSelect={()=> handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=> handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic==='props'} onSelect={()=> handleClick('props')}>props</TabButton>
        <TabButton isSelected={selectedTopic==='state'} onSelect={()=> handleClick('state')}>State</TabButton>
        </menu>

        {!selectedTopic ? <p>select summat</p>  : null}
          
        {selectedTopic? (
          <div id = 'tab-content'>
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            
          </div>)
        : null}
        </section>
        </>
    )
}