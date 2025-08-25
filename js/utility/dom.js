window.utils = [];

window.utils.createElement = (tag, group, set = {}) => {
    const element = document.createElement(tag);

    if (group) element.className = group;
    Object.entries(set).forEach(([k, v]) => element.setAttribute(k, v));

    return element;
};
