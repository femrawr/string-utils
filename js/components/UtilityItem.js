class UtilityItem {
    constructor(key, active, callback) {
        this.item = window.utils.createElement('div', 'util-item');

        this.key = key;
        this.active = active;
        this.callback = callback;
    }

    init() {
        this.item.textContent = window.process.utilities[this.key].name;

        if (this.active) this.item.classList.add('active');
        this.item.addEventListener('click', () => this.callback(this.key, this.item));

        return this;
    }
}