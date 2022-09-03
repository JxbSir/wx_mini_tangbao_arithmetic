
const key = "tangbao_config_key"

const setConifgData = (data) => {
    wx.setStorageSync(key, JSON.stringify(data));
}

const getConfigData = () => {
    const string = wx.getStorageSync(key);
    if (string == null || string.length == 0) {
        return null;
    }
    return JSON.parse(string);
}

export {
    getConfigData,
    setConifgData
}