
const key = "tangbao_config_key"
const password_key = "taobao_password_key"


const setConifgData = (data) => {
    wx.setStorageSync(key, JSON.stringify(data));
}

const setPassword = (data) => {
    wx.setStorageSync(password_key, data);
}

const getConfigData = () => {
    const string = wx.getStorageSync(key);
    if (string == null || string.length == 0) {
        return null;
    }
    return JSON.parse(string);
}

const getPassword = () => {
    const string = wx.getStorageSync(password_key);
    return string;
}

export {
    getConfigData,
    setConifgData,
    getPassword,
    setPassword
}