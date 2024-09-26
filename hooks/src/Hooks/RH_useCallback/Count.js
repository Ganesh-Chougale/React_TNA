import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`);
    return <h2>{text}: {count}</h2>
}

export default React.memo(Count)
