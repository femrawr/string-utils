class UtilityGroup {
    constructor(title, key, active, callback) {
        this.group = window.utils.createElement('div', 'util-group');
        this.label = window.utils.createElement('h3');

        this.title = title;
        this.key = key;
        this.active = active;
        this.callback = callback;
    }

    init() {
        this.label.textContent = this.title;
        this.group.appendChild(this.label);

        this.key.forEach(key => {
            const item = new UtilityItem(key, key === this.active, this.callback);
            this.group.appendChild(item.init().item);
        });

        return this;
    }
}