**How to use**

___Apprach01___
1. inside end component (this case App.js), create the context.
   syntax
```javascript
export const userContext = React.createContext();
```

2. wrap the first children component within that <variable.provider value={"somevalue"}>

like this
    <userContext.Provider value={ganesh}>
    <ComponentTop/>
    </userContext.Provider>

3. now import the context variable in last children component & consume there.
    `import {userContext} from "../../../App";`

& inside that div use arrow function withing consumer tag for prop
    `      <userContext.Consumer>
        {
          user =>{
            return <div>username: {user}</div>
          }
        }
      </userContext.Consumer>`

⚠️: this seems all good until we need to chain multiple props inside each others.

<!-- adding another context at parent -->
```javascript
export const userContext = React.createContext()
export const cityContext = React.createContext()
// above component function

    <userContext.Provider value={"Ganesh"}>
    <cityContext.Provider value={"Kolhapur"}>
    <ComponentTop/>
    </cityContext.Provider>
    </userContext.Provider>
// inside return statement
```


<!-- applying another context at end childer -->
```javascript
import {userContext, cityContext} from "../../../App";
// above funcion

      <userContext.Consumer>
        {
          user =>{
            return (
              <cityContext.Consumer>
              {
                city =>{
                  return <div>username: {user}, city: {city}</div>

                }
              }

              </cityContext.Consumer>
            )
          }
        }
      </userContext.Consumer>
// inside return statement

```
⚠️: so this code is total verbose & not so readable at all.

🟢: with using useContext, we can do it much better way
    the first 2 steps of creating context & Provider will remain same
    but the Consumer part is much


___Apprach02___
1. create context
```javascript
import Layer01Sky from './Hooks/RH_useContext/Approach02/Layer01Sky';
export const userContext = React.createContext()
export const cityContext = React.createContext()
```

2. create Proveder part
```jsx
    <userContext.Provider value={"Ganesh"}>
    <cityContext.Provider value={"Kolhapur"}>
    <Layer01Sky/>
    </cityContext.Provider>
    </userContext.Provider>
```

3. At end user use this instead of consumer part

  A. import the useContext from react in end child
  `import {useContext} from 'react';`

  B. import the varible/ variables of Provider
  `import {userContext, cityContext} from "../../../App"`

  C. Assign them into variable
  ```javascript
    const user = useContext(userContext);
    const city = useContext(cityContext);
  ```

  D. use those variable directly as a props
  ```jsx
    <h1>username is {user} & he lives in {city}</h1>
  ```