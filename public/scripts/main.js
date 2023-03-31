function search() {
  let driverType = document.getElementById("driverType");
  if (driverType.value === "1") {
    driverType = true;
  } else if (driverType.value === "2") {
    driverType = false;
  } else {
    driverType = null;
  }
  let date = document.getElementById("datepicker");
  if (date.value == "") {
    date = null;
  } else {
    date = date.value.split(" ");
    date = date[2];
  }
  let passengers = document.getElementById("passengers");

  clear();

  if (driverType == null && date == null && passengers == null) {
    alert("noParam");
  } else {
    filter(driverType, date, passengers);
  }
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
      carsResult = carsResult.filter((car) => car.year.toString() === date);
      console.log(carsResult);
      carsResult = carsResult.filter((car) => car.capacity > passengers);
      console.log(carsResult);

      upData(carsResult);
    });
}

function upData(carsResult) {
  let container = document.getElementById("cars-container");
  if (carsResult.length === 0) {
    alert("noData");
  }
  for (let index = 0; index < carsResult.length; index++) {
    const node = document.createElement("div");
    node.className = "col-md-4";
    node.innerHTML = render(carsResult[index]);
    container.appendChild(node);
  }
}

function alert(message) {
  let container = document.getElementById("cars-container");
  if (message === "noParam") {
    container.innerHTML = noParam();
  } else if (message === "noData") {
    container.innerHTML = noData();
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

function noParam() {
  return `
          <div class="col-md-5">
            <div class="alert alert-danger mt-5 text-center" role="alert">
              <h1><i class="bi bi-exclamation-diamond"></i></h1>
              <h4 class="alert-heading text-bold">Mobil Tidak Bisa Dicari</h4>
              <hr />
              <h5 class="mb-0">Silahkan Isi Kolom Untuk Menemukan Mobil Yang Dicari</h5>
            </div>
          </div>
  `;
}

function noData() {
  return `
          <div class="col-md-5">
            <div class="alert alert-danger mt-5 text-center" role="alert">
              <h4 class="alert-heading text-bold">Mohon Maaf</h4>
              <hr />
              <h5 class="mb-0">Tidak Ada Mobil Yang Tersedia</h5>
            </div>
          </div>
  `;
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
