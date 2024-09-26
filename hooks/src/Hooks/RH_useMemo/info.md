`useMemo` hook is used for performance optimization. just like a `useCallback`

`useCallBack` : caches the function itself
`useMemo` : caches the function result only


Syntax:

```javascript
    const functionName = useMemo( ()=>{
        // operation
    } , [changing variable value / dependancy])
```
