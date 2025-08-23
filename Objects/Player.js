class Player {
  name;
  #active;
  #symbol;

  constructor(name, active, symbol) {
    this.name = name;
    this.#active = active;
    this.#symbol = symbol;
  }

  isActive() {
    return this.active;
  }
}
