import changeTitle from './../data/dinamic/title'
import state from './../lang/MODE'
export default class Router {

  constructor(routes, mode, root) {
    this.routes = routes;
    this.mode = mode;
    this.root = root;
  }
  // historyState(re) {
  //   return history.pushState(null, null, this.routes.push({ re: re }))
  // }

  config(options) {
    this.mode =
      options &&
        options.mode &&
        options.mode == "history" &&
        !!history.pushState
        ? "history"
        : "hash";
    this.root =
      options && options.root
        ? "/" + this.clearSlashes(options.root) + "/"
        : "/";
    return this;
  }

  getFragment() {
    let fragment = "";
    if (this.mode === "history") {
      fragment = this.clearSlashes(
        decodeURI(location.pathname + location.search)
      );
      fragment = fragment.replace(/\?(.*)$/, "");
      fragment = this.root != "/" ? fragment.replace(this.root, "") : fragment;
    } else {
      let match = window.location.href.match(/#(.*)$/g);
      fragment = match ? match[1] : "";
    }
    return this.clearSlashes(fragment);
  }
  getState() {
    return state.getstate()
  }

  clearSlashes(path) {
    return path
      .toString()
      .replace(/\/$/g, "")
      .replace(/^\//g, "");
  }

  add(re, handler) {
    if (typeof re == "function") {
      handler = re;
      re = "";
    }
    this.routes.push({ re: re, handler: handler });
    return this;
  }

  remove(param) {
    this.routes.forEach(router => {
      if (
        router.handler === param ||
        router.re.toString() === param.toString()
      ) {
        routes.splice(i, 1);
        return this;
      }
    });
    return this;
  }

  check(f) {
    let fragment = f || this.getFragment();
    this.routes.forEach(router => {
      let match = fragment.match(router.re);
      if (match) {
        match.shift();
        router.handler.apply({}, match);
        return this;
      }
    });
    return this;
  }
  back() {
    window.history.back()
  }
  changeTitle() {
    const fragment = this.getFragment()
    changeTitle(fragment, this.getState())
  }

  listen() {
    window.addEventListener(
      "navigate",
      e => {
        // alert('Navigate')
        this.check(this.getFragment());
        this.changeTitle()

      },
      false
    );
    window.addEventListener(
      "popstate",
      () => {
        alert('change state')
        this.check(this.getFragment());

      },
      false
    )

    return this;
  }

  navigate(path) {
    path = path ? path : "";
    if (this.mode === "history") {
      try {
        history.pushState(null, null, this.root + this.clearSlashes(path));
      } catch (error) {
        console.log(error)
      }

    } else {
      window.location.href =
        window.location.href.replace(/#.*$/g, "") + "#" + path;
    }

    const event = new CustomEvent("navigate", { detail: path });
    window.dispatchEvent(event);

    return this;
  }
}



// export const RouterBase = new Router([], 'history', '/')

// RouterBase.listen()

