//If you want the database to be created in config just change the folder to config
var dir = '../database/';

var fs = require('fs');

var db = exports.database = {

    exists: function(file) {
        try {

            stats = fs.lstatSync(dir + file);


            if (stats.isDirectory()) {
                return true;
            }
        } catch (e) {
            return false;
        }
    },

    getInfo: function(file, name, all) {
        if (this.exists(file) === false) return false;
        var data = fs.readFileSync(dir + file + '.csv', 'utf8')
        if (all === true) return data;
        else {
            data = data.split('\n');
            if (data.length > 0) {
                for (var i in data) {
                    var newdata = data[i].split(',');
                    if (newdata[1] === name) {
                        return newdata[2];
                    }
                }
            }
        }
    },
    create: function(filename, info) {
        var file = fs.createWriteStream(dir + filename, {
            flags: 'w+',
            encoding: null,
            fd: null,
            mode: 0666
        })
        if (info != 'undefined') file.write(info);
    }
};
