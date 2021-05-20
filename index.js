function getTime() {
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    
    document.getElementById("big-clock").innerHTML = formatTime(hrs, mins, secs);
    setTimeout(getTime, 500);
}

function formatTime(hrs, mins, secs) {
    end = " AM"
    if (hrs > 12) {
        end = " PM"
        hrs -= 12
    };
    if (hrs < 10) {hrs = "0" + hrs};
    if (mins < 10) {mins = "0" + mins};
    if (secs < 10) {secs = "0" + secs};
    return hrs + ":" + mins + ":" + secs + end
}

function func () {
    document.getElementById("stpClock").innerHTML = time[0] + ":" + time[1] + ":" + time[2] + " <span class='milli-sec'>" + time[3] + "</span>"
}

class StopWatch {
    constructor () {
        this.hrs = 0;
        this.mins = 0;
        this.secs = 0;
        this.msecs = 0;
    }

    format () {
        hrs = this.hrs;
        mins = this.mins;
        secs = this.secs;
        msecs = this.msecs;
        if (hrs < 10) {hrs = "0" + hrs};
        if (mins < 10) {mins = "0" + mins};
        if (secs < 10) {secs = "0" + secs};
        if (msecs < 10) {
            msecs = "00" + msecs;
        }
        else if (msecs < 100) {
            msecs = "0" +msecs;
        }
        return [hrs, mins, secs, msecs];
    }

    start () {
        console.log("Started")
        this.stpWatch = setTimeout(this.timeoutFunc, 1)
    }
    
    timeoutFunc () {
        this.msecs += 1
        if (this.msecs >= 1000) {
            this.secs += 1
        }
        if (this.secs >= 60) {
            this.mins += 1
        }
        if (this.mins >= 60) {
            this.hrs += 1
        }
        if (this.hrs >= 24) {
            clearTimeout(this.stpWatch)
        }
        time = this.format()
        document.getElementById("stpClock").innerHTML = time[0] + ":" + time[1] + ":" + time[2] + " <span class='milli-sec'>" + time[3] + "</span>"
    }
    
    pause () {
        console.log("paused")
        clearTimeout(this.stpWatch)
    }

    reset () {
        console.log("Reset")
        this.hrs = 0;
        this.mins = 0;
        this.secs = 0;
        this.msecs = 0;
    }
}

stpClock = new StopWatch()
document.getElementById("stp-start").addEventListener("click", stpClock.start)
document.getElementById("stp-pause").addEventListener("click", stpClock.pause)
document.getElementById("stp-reset").addEventListener("click", stpClock.reset)