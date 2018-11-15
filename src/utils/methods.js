import {parseUrl} from './query';

const go = (delta, platform = 'wechat') => {
    (platform == 'wechat') && wx.navigateBack({delta});
    (platform == 'swan') && swan.navigateBack({delta});
    (platform == 'alipay') && my.navigateBack({delta});
};

const back = (platform = 'wechat') => {
    (platform == 'wechat') && wx.navigateBack();
    (platform == 'swan') && swan.navigateBack();
    (platform == 'alipay') && my.navigateBack();
};

const replace = (location, complete, fail, success, platform = 'wechat') => {
    const url = parseUrl(location);
    (platform == 'wechat') && wx.redirectTo({url, complete, fail, success});
    (platform == 'swan') && swan.redirectTo({url, complete, fail, success});
    (platform == 'alipay') && my.redirectTo({url, complete, fail, success});
};

const push = (location, complete, fail, success, platform = 'wechat') => {
    const url = parseUrl(location);
    const params = {url, complete, fail, success};

    if (location.isTab) {
        (platform == 'wechat') && wx.switchTab(params);
        (platform == 'swan') && swan.switchTab(params);
        (platform == 'alipay') && my.switchTab(params);

        return;
    }
    if (location.reLaunch) {
        (platform == 'wechat') && wx.reLaunch(params);
        (platform == 'swan') && swan.reLaunch(params);
        (platform == 'alipay') && my.reLaunch(params);
        return;
    }
    (platform == 'wechat') && wx.navigateTo(params);
    (platform == 'swan') && swan.navigateTo(params);
    (platform == 'alipay') && my.navigateTo(params);

};

export {go, back, push, replace};