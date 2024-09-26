### 1. `useState`

#### RH_useState
- **RH_useState_01**: Simple `useState`
- **RH_useState_02**: Ideal way to use `useState`
- **RH_useState_03**: `useState` for Object
- **RH_useState_04**: `useState` for Array

  In the case of Object & Array, always use the **spread** operator.

---

### 2. `useEffect`

#### RH_useEffect
- **RH_useEffect_01**: Runs on every render
- **RH_useEffect_02**: Runs only on specified dependencies
- **RH_useEffect_03**: Runs only once with empty `[]` dependency array
- **RH_useEffect_04**: Preventing memory leaks with `useEffect`
- **RH_useEffect_05**: Importance of specifying dependencies correctly

#### Fetch API using `useEffect`
- **DataFetching_01**: How to fetch API using `axios`
- **DataFetching_02**: Fetch targeted data using ID and a button

---

### 3. `useContext`

#### RH_useContext
- **Approach01**: Consumer part is verbose
  - ComponentTop.js
  - ComponentMid.js
  - ComponentBot.js

- **Approach02**: Consumer part is simplified
  - Layer01Sky.js
  - Layer02Land.js
  - Layer03Underground.js

---

### 4. `useReducer`

#### RH_useReducer
- **RH_useReducer01.js**: Single `useReducer` example
- **RH_useReducer02.js**: Multiple `useReducer` example
- **RH_useReducer03.js**: Multiple `useReducer` with an easy example

---

### 5. `useReducer` + `useContext`

#### RH_Reducer_Context

---

### 6. `useReducer` Data Fetching

#### RH_DataFetching
- **DataFetching01.js**: Fetching online dummy data without `useReducer`
- **DataFetching02.js**: Fetching online dummy data using `useReducer`
- **FileHandling.js**: Fetching the same data from a local JSON file

---

**`useState` vs `useReducer`**
![useState vs useReducer](./Images/useState%20vs%20useReducer.png)


### 7. `useCallback`

#### RH_useCallback
- **ParentComponent.js**: why we need useCcallback & React.memo()
- **RH_useCallback.js**: using `useCcallback` & `React.memo()`

### 8. `useMemo`

#### RH_useMemo
- **Counter.js** : deliberately created a situation which slow downs UI
- **UseMemo01.js** : using `useMemo` excluded other components from being slow

- `useCallBack` : caches the function(call) itself
- `useMemo` : caches the function result only

### 9. `useRef`

#### RH_useRef
- **FocusInput.js** : on button click focus on input tag
- **HookTimer.js** : 
