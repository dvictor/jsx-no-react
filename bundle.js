(() => {
  // jsx.ts
  var JSX = {
    el: function(name, attrs, ...content) {
      let d = name === JSX.frag ? document.createDocumentFragment() : document.createElement(name);
      attrs && Object.keys(attrs).forEach((k) => {
        if (k.startsWith("on"))
          d[k] = attrs[k];
        else
          d.setAttribute(k, attrs[k]);
      });
      content.forEach((c) => {
        if (Array.isArray(c))
          d.append(...c);
        else if (!(c === null || c === false))
          d.append(c);
      });
      return d;
    },
    frag: Symbol("frag")
  };

  // index.tsx
  var init = async () => {
    const data = [
      {
        id: 3,
        name: "John Doe",
        location: "Chicago"
      },
      {
        id: 4,
        name: "Jane Smith",
        location: "Baltimore"
      },
      {
        id: 33,
        name: "Linda Foo",
        location: "New York"
      }
    ];
    const showDetails = (id) => {
      const dest = document.getElementById("details");
      dest.replaceChildren();
      dest.appendChild(/* @__PURE__ */ JSX.el(JSX.frag, null, /* @__PURE__ */ JSX.el("h3", null, "Details"), /* @__PURE__ */ JSX.el("div", null, "Customer ", id, " details...")));
    };
    return /* @__PURE__ */ JSX.el("div", {
      class: "hello"
    }, /* @__PURE__ */ JSX.el("table", null, /* @__PURE__ */ JSX.el("tbody", null, /* @__PURE__ */ JSX.el("tr", null, /* @__PURE__ */ JSX.el("th", null, "ID"), /* @__PURE__ */ JSX.el("th", null, "Name"), /* @__PURE__ */ JSX.el("th", null, "Location")), data.map((row) => /* @__PURE__ */ JSX.el("tr", null, /* @__PURE__ */ JSX.el("td", null, row.id), /* @__PURE__ */ JSX.el("td", null, row.name), /* @__PURE__ */ JSX.el("td", null, row.location), /* @__PURE__ */ JSX.el("td", null, /* @__PURE__ */ JSX.el("input", {
      type: "button",
      value: "Details",
      onclick: () => showDetails(row.id)
    })))))), /* @__PURE__ */ JSX.el("div", {
      id: "details"
    }));
  };
  var main = (() => {
    return init().then((el) => document.body.append(el));
  })();
})();
