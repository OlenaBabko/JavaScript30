const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]');
    const item = {
        text: text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    this.reset();
}

function populateList(wishes = [], wishesList) {
    wishesList.innerHTML = wishes.map((wish, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${wish.done ? 'checked' : ''} />
                <label for="item${i}">${wish.text}</label>
            </li>
            <li></li>
        `;
    }).join('');

}
addItems.addEventListener('submit', addItem);