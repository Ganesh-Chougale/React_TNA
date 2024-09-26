You’re absolutely right! To avoid unnecessary re-renders in React, especially with nested components, here are some important considerations:

### Key Concepts

1. **React and Re-Renders**:
   - React will not re-render a component if its state or props haven’t changed.
   - If the state or props are the same (i.e., their values haven't changed), React skips rendering that component.

2. **Non-Primitive Data Types**:
   - For objects and arrays, React uses shallow comparison. This means it needs a new reference to recognize changes. Using the spread operator (`...`) to create a new copy of the object or array is a common practice to trigger updates.

3. **Optimizing Nested Components**:
   - Instead of nesting child components directly inside the parent, you can pass them as `children`. This way, the parent component can control when the child should render, based on changes in props or state.

### Implementation Example

Here’s how you can set it up in your `App.js`, `Parent.js`, and `Child.js`:

#### App.js
```javascript
import React from 'react';
import Parent from './Parent';
import Child from './Child';

function App() {
    return (
        <Parent>
            <Child />
        </Parent>
    );
}

export default App;
```

#### Parent.js
```javascript
import React, { useState } from 'react';

const Parent = ({ children }) => {
    const [count, setCount] = useState(0);

    console.log("Parent Rendered");

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(c => c + 1)}>Add 1</button>
            {children} {/* Child component rendered here */}
        </div>
    );
};

export default Parent;
```

#### Child.js
```javascript
import React from 'react';

const Child = () => {
    console.log("Child Rendered");
    return (
        <div>
            <h3>Child Component</h3>
        </div>
    );
};

export default Child;
```

### but this method is not good as React.memo()
