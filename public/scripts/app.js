class App {
  constructor() {
    this.driverType = document.getElementById("driverType").value;
    this.date = document.getElementById("date").value;
    this.passengers = document.getElementById("passengers").value;
    this.filterBtn = document.getElementById("btn-load");
    this.container = document.getElementById("cars-container");
  }

  async init() {
    CarsData.filterData(
      this.driverType,
      this.date,
      this.passengers,
      this.container,
      this.filterBtn
    );
  }
}
