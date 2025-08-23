class Player {
  #name;
  active;
  #symbol;

  constructor(name, active, symbol) {
    this.#name = name;
    this.active = active;
    this.#symbol = symbol;
  }

  getName() {
    const name = this.#name;
    return name;
  }

  getSymbol() {
    const symbol = this.#symbol;
    return symbol;
  }

  setName(name) {
    this.#name = name;
  }

  isActive() {
    return this.active;
  }
}

export { Player };
