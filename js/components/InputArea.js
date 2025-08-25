class InputArea {
    constructor(callback) {
        this.section = window.utils.createElement('div', 'input-section');
        this.header = window.utils.createElement('div', 'content-header');
        this.label = window.utils.createElement('span', 'content-label');
        this.wrapper = window.utils.createElement('div', 'input-wrapper');
        this.textarea = window.utils.createElement('textarea', 'input-textarea', {
            id: 'input',
            spellcheck: false
        });

        this.copy = new CopyButton(this.textarea).init();
        this.callback = callback;
    }

    init() {
        this.header.appendChild(this.label).textContent = 'Input';

        this.textarea.addEventListener('input', () => {
            this.callback(this.textarea.value);
        });

        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.copy.button);

        this.section.appendChild(this.header);
        this.section.appendChild(this.wrapper);

        return this;
    }
}