document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const groceryList = document.getElementById('grocery-list');

    const addItem = () => {
        const itemText = input.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', () => {
                groceryList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            groceryList.appendChild(listItem);

            input.value = '';
            input.focus();
        }
    };

    addButton.addEventListener('click', addItem);

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
