function extensibleObject () {
    let proto = {};
    let copyObj = Object.create(proto);

    copyObj.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if(typeof value === 'function') {
                proto[key] = value;
            } else {
                copyObj[key] = value;
            }
        })
    }

    return copyObj;
}