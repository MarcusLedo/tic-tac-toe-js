class Player {
  name;
  active;

  constructor(name, active) {
    this.name = name;
    this.active = active;
  }

  isActive() {
    return this.active;
  }
}
