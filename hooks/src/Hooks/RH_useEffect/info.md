⚠️: useEffect runs after every render of the component.
🟢: we can pass the dependancy, which means useEffect will run only if the passed dependancy is rendered.

**info**
The Effect Hook lets you perform side effects in functional components
it is a close replace for componentDidMount,ComponentDidUpdate and componentWillUnMount (classbase component).


**where to use**
- fetching data from API
- Directly updating the DOM
- Timers like setTimeout, setInterval

**syntax**

- `useEffect( ()=>{}, dependancy);`

```javascript
useEffect( ()=>{
    // operation (DOM, fetch or Timers)
},  []);


