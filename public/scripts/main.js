function search() {
  let driverType = document.getElementById("driverType");
  if (driverType.value === "1") {
    driverType = true;
  } else {
    driverType = false;
  }
  let date = document.getElementById("datepicker");
  date = date.value.split(" ");
  date = date[2];
  let passengers = document.getElementById("passengers");

  clear();

  filter(driverType, date, passengers);
}

function filter(driverType, date, passengers) {
  fetch(
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  )
    .then((res) => res.json())
    .then((res) => {
      const car = res;
      let carsResult;
      carsResult = car.filter((car) => car.available === driverType);
      carsResult = carsResult.filter((car) => car.year.toString() == date);
      carsResult = carsResult.filter((car) => car.capacity >= passengers);

      upData(carsResult);
    });
}

function upData(carsResult) {
  let container = document.getElementById("cars-container");
  for (let index = 0; index < carsResult.length; index++) {
    const node = document.createElement("div");
    node.className = "col-md-4";
    node.innerHTML = render(carsResult[index]);
    container.appendChild(node);
  }
}

function clear() {
  let container = document.getElementById("cars-container");
  let child = container.firstElementChild;

  while (child) {
    child.remove();
    child = container.firstElementChild;
  }
}

function render(data) {
  return `
      <div class="card">
        <div class="card-header">
          <img
            src="${data.image}"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body mb-2">
          <h5 class="card-title">${data.manufacture} ${data.model}</h5>
          <h2 class="card-price">Rp. ${data.rentPerDay}</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="card-detail">
            <li><img src="assets/fi_users.png" alt="" /> ${data.capacity} Orang</li>
            <li><img src="assets/fi_settings.png" alt="" /> ${data.transmission}</li>
            <li><img src="assets/fi_calendar.png" alt="" /> ${data.year}</li>
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
    `;
}
