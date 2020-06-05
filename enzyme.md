# Testing in React

## Technologies leveraged for testing in React
    1. Jest
    2. Enzyme

## Why do we need Enzyme?
    Jest is great for testing programmatic logic, but it's not a very practical tool for testing a rendered DOM.  It doesn't give tools to effectively test things like input fields, buttons, or the result of template expression in React.  So we need a way to render components effectively and then test the resulting component both in terms of its display and its functionality.  Enzyme gives a tool to accomplish this.

## Types of Enzyme Rendering
    Shallow - Shallow rendering renders only the provided component and does not attempt to render any child components.  This is often the preferred method of testing a component when possible as it provides the highest level of isolation to the component that is being tested. When the component highly reliant on child components to provide its behavior, this may not possible.

    Mount - The mount function will render the entire component and child components.  This is useful when you need to test all rendered content of the component. However, as a trade-off there is less isolation and the render is going to take longer.

## Usage
    Calling either of these functions will return a wrapper object. The wrapper object provides a convenient interface for interacting with the generated DOM, including finding specific elements within, simulating events, and extracting values from parts of the DOM. Through this, we can add jest tests to confirm the behavior of our component.
