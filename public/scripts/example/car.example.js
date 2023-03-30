class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card mb-4">
        <div class="card-header">
          <img
            src="${this.image}"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body mb-2">
          <h5 class="card-title">${this.manufacture} ${this.model}</h5>
          <h2 class="card-price">Rp. ${this.rentPerDay}</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="card-detail">
            <li><img src="assets/fi_users.png" alt="" /> ${this.capacity} Orang</li>
            <li><img src="assets/fi_settings.png" alt="" /> ${this.transmission}</li>
            <li><img src="assets/fi_calendar.png" alt="" /> ${this.year}</li>
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
}
