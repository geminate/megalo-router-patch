import {parseUrl} from './query';

const go = (delta) => {
    wx.navigateBack({delta});
};

const back = () => {
    wx.navigateBack();
};

const replace = (location, complete, fail, success) => {
    const url = parseUrl(location);
    wx.redirectTo({url, complete, fail, success});
};

const push = (location, complete, fail, success) => {
    const url = parseUrl(location);
    const params = {url, complete, fail, success};

    if (location.isTab) {
        wx.switchTab(params);
        return;
    }
    if (location.reLaunch) {
        wx.reLaunch(params);
        return;
    }
    wx.navigateTo(params);
};

export {go, back, push, replace};