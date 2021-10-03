class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.isActive = false;
    this.intervalId = null;

    this.start();
  }

  start() {
    if (this.isActive) return;

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      const values = [days, hours, mins, secs];

      for (let i = 0; i < values.length; i++) {
        doms[i].textContent = values[i];
      }

      // console.log(days, hours, mins, secs);

      time -= 1000;
      if ((this.time = 0)) {
        isActive = false;
      }
    }, 1000);
  }
}

const doms = document.querySelectorAll(".value");

let time = Date.now() - new Date("Jul 17, 2019");

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
