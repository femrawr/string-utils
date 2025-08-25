class App {
    constructor(root, util) {
        this.root = root;
        this.util = util;

        this.input = null;
        this.output = null;
        this.sidebar = null;
    }

    init() {
        const main = window.utils.createElement('div', 'content');

        this.input = new InputArea(this.updateText.bind(this)).init();
        this.output = new OutputArea(
            window.process.utilities[this.util].name,
            this.updateText.bind(this)
        ).init();

        this.sidebar = new Sidebar(this.util, (key, item) => {
            document.querySelectorAll('.util-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            this.util = key;
            this.output.label.textContent = 'Output - ' + window.process.utilities[key].name;
            
            this.updateText();
        }).init();

        this.root.appendChild(this.sidebar.sidebar);
        main.appendChild(this.input.section);
        main.appendChild(this.output.section);

        this.root.appendChild(main);
        this.updateText();

        this.input.textarea.focus();
        console.log('app inited');
    }

    updateText() {
        if (this.util !== 'base-64-decode') this.output.textarea.classList.remove('error');
        this.output.textarea.value = window.process.utilities[this.util].process(this.input.textarea.value);
    }
};