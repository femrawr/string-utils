class CopyButton {
    constructor(target) {
        this.button = window.utils.createElement('div', 'copy-button');
        this.target = target;
    }

    init() {
        this.button.addEventListener('click', () => {
            navigator.clipboard.writeText(this.target.value)
        });

        this.button.innerHTML = `
            <img src="assets/copy-button.svg" alt="Copy" class="copy-icon">
        `;

        return this;
    }
};
