
import Header from './components/Header.jsx'
// hook for using state
import {useState} from 'react';
import {EXAMPLES} from './data.js'
import {ADDITIONAL_CONCEPTS} from './data.js'
import AdditionalConcept from './components/AdditionalConcept.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';





export default function App() {

  return (
    <div>
      <Header />

      <main>
      <CoreConcepts />

       
        <section id = 'tab-content2'>
          <h2>Additonal concepts</h2>

             {ADDITIONAL_CONCEPTS.map((conceptItem)=> <AdditionalConcept key={conceptItem.named} {...conceptItem}/>)}

        </section>
        </main>
    </div>


  );
}






