class ClockClass {
    constructor({ template }) {this.template = template;}
    render = function () {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;
        let secs = date.getSeconds();
        if(secs < 10) secs = "0"+secs;
        let output = this.template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);
        console.log(output);
    }
    // timer = 0;
    stop = function() {clearInterval(this.timer);}
    start = function() {
        this.render();
        this.timer = setInterval(this.render(), 2200);
    }
}
let clockObj = new ClockClass({template: "h::m::s"});
clockObj.start();
clockObj.stop();


/**
 class ClockClass {
    // timer;
    constructor({ template }) {
        this.template = template;
        // timer;
        // this.timer;
        // this.timer = timer;
        // this.timer;
    }
    // timer;
    render = function () {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;
        let secs = date.getSeconds();
        if(secs < 10) secs = "0"+secs;
        let output = this.template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);
        // console.timeLog(output);
        console.log(output);
    }
    timer = 0;
    // stop = function() {clearInterval(timer);}
    stop = function() {clearInterval(this.timer);}
    start = function() {
        // console.log(timer, this.timer);
        this.render();
        // this.render;
        // timer = setInterval(this.render, 2200);
        this.timer = setInterval(this.render(), 2200);
    }
}
let clockObj = new ClockClass({template: "h::m::s"}, 0);
clockObj.start();
clockObj.stop();
// let clockObj = new ClockClass({template: "h::m::s"});
// clockObj.start();
// clockObj.stop();
 */