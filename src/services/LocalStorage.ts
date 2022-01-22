const MockedInstance = {
  getItem: () => {},
  setItem: () => {},
  removeItem: () => {},
  clear: () => {}
}

class LocalStorage {
  private instance

  constructor() {
    this.instance =
      typeof window !== 'undefined' ? window.localStorage : MockedInstance
  }

  get(name: string) {
    return this.instance.getItem(name)
  }

  set(name: string, value: any) {
    this.instance.setItem(name, value)
  }

  remove(name: string) {
    this.instance.removeItem(name)
  }

  clear() {
    this.instance.clear()
  }
}

export default new LocalStorage()
