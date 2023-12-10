export default function AdditionalConcept({named,info,eg}){
    return (
        <>
        <h3>{named}</h3>
        <p>{info}</p>
        <pre>
        <code>
        {eg}
        </code></pre>
        </>
    )

};