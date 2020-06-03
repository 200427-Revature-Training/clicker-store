# Redux

Redux is an implementation of the Flux design pattern. Redux is a very small implementation - Flux isn't very complicated so Redux when removing unnecessary (tests, etc) is less than a 100 lines of code. To work with redux within our React app we will have design structures that facilitate Redux's core workflow.  We will define actions that can take place in our application. We will define dispatchers - functions that can be used to call these actions. We will define reducers which process these actions and define how they affect the state, and we define the state itself at a high level independent of components.

When designing components, we will wrap the component definition in higher-order component functions which will provide any state or actions that the component needs.

Forewarning: Implementations of Redux require quite a bit of initial setup which might be error prone at first. Redux might not be the right choice for a small application that has relatively simple state.  Redux really shines in larger applications with many components and a complicated state.

## Implementing Redux
    A. Application Level
        1. Define state store (mostly the same in every application)
        2. State index file (Aggregation of all state in the app - should be updated with new state)
        3. Define a Provider component at a high level that manages the Redux state
                (similar to how Router (HashRouter, BrowserRouter) manage routing state)
    B. Per state category
        1. Reducer - Processes actions to affect state
        2. Actions - The actions that can produced
        3. Dispatcher - Functions to invoke actions
        4. Update state index file with new state data
    C. Per stateful component
        1. Wrap the component in higher order functions to provide action dispatchers and dependent state.

## Dependencies
    1. react-redux
    2. redux-thunk
    3. redux
    4. (dev) @types/react-redux

## Application State vs Component State
Application state is any state that has an impact on the application as a whole.  This means that it is currently or may affect the view or behavior of more than one component.  Component state in a Redux application is any state which is temporary and only needs to be used by a single component. There is no compelling reason to include this in our Redux state store, although you still could.