class CarsData {
  constructor() {
    this.listFilter = [];
  }

  filterData(driverType, date, passengers, container, filterBtn) {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((res) => res.json())
      .then((res) => {
        const car = res;
        let carsResult;
        carsResult = car.filter((car) => car.available === driverType);
        carsResult = carsResult.filter((car) => car.year === date);
        carsResult = carsResult.filter((car) => car.capacity >= passengers);

        filterBtn.onclick = this.upData();
      });
  }

  upData(container, carsResult){
    for (let index = 0; index < carsResult.length; index++) {
      const node = document.createElement("div");
      node.innerHTML = this.render(carsResult[index]);
      this.container.appendChild(node);
    }
  }

  render(carsResult) {
    return `
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <img
            src="${carsResult.image}"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body mb-2">
          <h5 class="card-title">${carsResult.manufacture} ${carsResult.model}</h5>
          <h2 class="card-price">Rp. ${carsResult.rentPerDay}</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="card-detail">
            <li><img src="assets/fi_users.png" alt="" /> ${carsResult.capacity} Orang</li>
            <li><img src="assets/fi_settings.png" alt="" /> ${carsResult.transmission}</li>
            <li><img src="assets/fi_calendar.png" alt="" /> ${carsResult.year}</li>
          </ul>
          <div class="text-center d-grid">
            <button
              href="#"
              class="btn btn-primary"
              type="button"
              style="height: 48px"
            >
              Pilih Mobil
            </button>
          </div>
        </div>
    </div> 
    `;
  }
}
