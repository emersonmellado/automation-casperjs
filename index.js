var casper = require('casper').create({
    pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },    
    verbose: true,
    logLevel: "debug"
});

casper.start('https://google.ca', function() {
    this.echo(this.getTitle());
});

casper.run();