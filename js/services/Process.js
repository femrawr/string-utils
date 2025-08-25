window.process = [];

window.process.utilities = {
    'base-64-encode': {
        name: 'Base 64 Encode',
        process: (text) => btoa(text)
    },

    'base-64-decode': {
        name: 'Base 64 Decode',
        process: (text) => {
            const output = document.querySelector('.output-textarea');

            try {
                output.classList.remove('error');
                return atob(text);
            } catch(e) {
                output.classList.add('error');
                return 'Failed to decode base 64 - ' + e.message;
            }
        }
    },

    'md4': {
        name: 'MD4',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.md4(text);
        }
    },

    'md5': {
        name: 'MD5',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.MD5(text).toString();
        }
    },

    'sha-1': {
        name: 'SHA 1',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.SHA1(text).toString();
        }
    },

    'sha-224': {
        name: 'SHA 224',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.SHA224(text).toString();
        }
    },

    'sha-256': {
        name: 'SHA 256',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.SHA256(text).toString();
        }
    },

    'sha-384': {
        name: 'SHA 384',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.SHA384(text).toString();
        }
    },

    'sha-512': {
        name: 'SHA 512',
        process: (text) => {
            if (text.trim() == '') return '';
            return window.CryptoJS.SHA512(text).toString();
        }
    }
};
