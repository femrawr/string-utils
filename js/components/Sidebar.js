const groups = {
    'Encoding': [
        'base-64-encode', 'base-64-decode'
    ],
    'Hashing': [
        'md4', 'md5',
        'sha-1', 'sha-224', 'sha-256',
        'sha-384', 'sha-512'
    ]
};

class Sidebar {
    constructor(util, callback) {
        this.sidebar = window.utils.createElement('div', 'sidebar');

        this.util = util;
        this.callback = callback;
    }

    init() {
        Object.entries(groups).forEach(([title, keys]) => {
            this.sidebar.appendChild(new UtilityGroup(
                title,
                keys,
                this.util,
                this.callback
            ).init().group);
        });

        return this;
    }
}