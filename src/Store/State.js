export default class State {
  constructor(state) {
    this.state = state;
  }
  change(value) {
    this.state = value;
  }
  onchange() {
    if (this.state !== state) {
    }
  }

  makeObservable(target) {
    let handlers = Symbol("handlers");
    // 1. Создадим хранилище обработчиков
    target[handlers] = [];

    // положим туда функции-обработчики для вызовов в будущем
    target.observe = function (handler) {
      this[handlers].push(handler);
      return handler(this);
    };

    // 2. Создадим прокси для реакции на изменения
    return new Proxy(target, {
      set(target, property, value, receiver) {
        let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
        if (success) {
          // если не произошло ошибки при записи свойства
          // вызовем обработчики
          target[handlers].forEach((handler) => handler(property, value));
        }
        return success;
      },
    });
  }

  getstate() {
    return this.state;
  }
}
