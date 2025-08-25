class OutputArea {
    constructor(util) {
        this.section = window.utils.createElement('div', 'output-section');
        this.header = window.utils.createElement('div', 'content-header');
        this.label = window.utils.createElement('span', 'content-label');
        this.wrapper = window.utils.createElement('div', 'output-wrapper');
        this.textarea = window.utils.createElement('textarea', 'output-textarea', {
            id: 'output',
            readonly: true,
            spellcheck: false
        });

        this.copy = new CopyButton(this.textarea).init();
        this.util = util;
    }

    init() {
        this.label.id = 'output-label';
        this.label.textContent = 'Output - ' + this.util;
        this.header.appendChild(this.label);

        this.wrapper.appendChild(this.textarea);
        this.wrapper.appendChild(this.copy.button);

        this.section.appendChild(this.header);
        this.section.appendChild(this.wrapper);

        return this;
    }
}