/*
 * 项目公共方法
 */
export default {
    type: function(obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
    },

    isFunction: function(func) {
        return this.type(func) === "Function";
    },

    isArray: function(list) {
        return this.type(list) === 'Array';
    },
    //获取环境变量
    getEnv: () => {
        var host = location.host;
        if (host.match(/localhost|127\.0|\.fat\d*\.qa\.nt\.ctripcorp\.com|ctriptravel\.com/i)) {
            return "fat";
        } else if (host.match(/\.uat\.qa\.nt\.ctripcorp\.com/i)) {
            return "uat";
        } else {
            return "pro";
        }
    },
    //检测ack
    checkAck: (responseStatus) => {
        if (responseStatus && responseStatus.Ack.toLowerCase() == "success") {
            return true;
        }
        return false;
    }
};