
const error_questions_key = "error_questions_key"

const insertErrorQa = (left: String, right: String, symbol: String) => {
    var list = getErrorList();
    if (list == null) {
        list = []
    } else {
        var exit = false;
        list.forEach(item => {
            if (Number(item.left) == Number(left) && Number(item.right) == Number(right) && String(item.symbol) == String(symbol)) {
                exit = true;
            }
        });
        if (exit) {
            return;
        }
    }

    const qa = {
        left: left,
        right: right,
        symbol: symbol
    }
    list.push(qa);
    wx.setStorageSync(error_questions_key, JSON.stringify(list));
}

const getErrorList = () => {
    const string = wx.getStorageSync(error_questions_key);
    if (string == null || string.length == 0) {
        return null;
    }
    return JSON.parse(string);
}

export {
    insertErrorQa,
    getErrorList
}