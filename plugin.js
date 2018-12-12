exports.default = {
    pre: function() {
    },
    config: function(cfg) {
        var time = new Date().getTime();
        var pattern = 'getting-started.[name].' + time + '.js';
        cfg.output.filename = pattern;
        return cfg;
    },
    post: function() {
    }
}