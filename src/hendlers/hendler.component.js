const setHendler = (element, action, defaultPrevent, func, func2) => {
  console.log(element);
  element.addEventListener(action, function (event) {
    if (defaultPrevent === false) {
      event.preventDefault();
    }
    func();

    // if (func2 !== null || undefined) {
    //   func2()
    // }
  });
};

export default setHendler;
