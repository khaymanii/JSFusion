# Shopping Cart Checkout System (React)

This project implements a simple checkout system for a shop that sells apples and oranges using React. It allows users to input items into the shopping cart and calculates the total cost based on the prices of the items. Additionally, it includes options to activate special offers such as "Buy one, get one free" on apples and "3 for the price of 2" on oranges.

## How to Use

1; Clone this repository to your local machine.

```bash
git clone https://github.com/khaymanii/shoppingcart.git
```

2; Navigate to the project directory.

```bash
cd shoppingcart
```

3; Install dependencies.

```bash
npm install
```

4; Run the application

```bash
npm start
```

5; Open your web browser and go to [http://localhost:3000](http://localhost:3000).

6; Enter the quantity of apples and oranges in the input fields.

7; Click the "Add" button to add the item to the shopping cart.

8; Repeat steps 6 and 7 for each item you want to add.

9; Click the "Calculate Total" button to see the total cost including any applicable offers.

## High-Level Explanation

The project consists of a single-page application built with React. It includes components for the input form, shopping cart display, and total cost calculation. Users can input items (apples or oranges) into the shopping cart, and the total cost is dynamically updated based on the quantity of each item and any applicable special offers.

## Reasoning Behind Technical Choices

- **React**: Chosen for its simplicity in managing state and rendering UI components efficiently.
- **React Hooks**: Used to manage component-level state without the need for class components.
- **CSS**: Basic styling is applied using CSS for a clean and user-friendly interface.

## Trade-offs

- **Simplicity over Complexity**: The implementation prioritizes simplicity to focus on core functionality. More advanced features such as user authentication, persistent cart storage, or dynamic item pricing could be added with additional development time.
- **UI Styling**: While the UI is styled to be visually appealing, it could benefit from more advanced styling and design elements for a polished look. However, this was kept minimal to focus on functionality.

## Potential Improvements

- **Error Handling**: Implement more robust error handling for invalid inputs or edge cases.
- **Testing**: Add unit tests to ensure the correctness of the calculation logic and improve code maintainability.
- **Localization**: Support multiple languages and currencies for a broader audience.
- **Responsive Design**: Enhance the UI to be more responsive and optimized for various screen sizes.
