"use strict";

var _interopRequireDefault = require("D:/repos/shri2023-task/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
var _slicedToArray2 = _interopRequireDefault(require("D:/repos/shri2023-task/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
require("./reset.css");
require("./styles.css");
function Header() {
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    toggled = _React$useState4[0],
    setToggled = _React$useState4[1];
  var onClick = function onClick() {
    if (!toggled) {
      setToggled(true);
    }
    setExpanded(!expanded);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "header__logo",
    "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
  }), /*#__PURE__*/React.createElement("button", {
    className: "header__menu",
    "aria-expanded": expanded ? "true" : "false",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "header__menu-text a11y-hidden"
  }, expanded ? "Закрыть меню" : "Открыть меню")), /*#__PURE__*/React.createElement("ul", {
    className: "header__links" + (expanded ? " header__links_opened" : "") + (toggled ? " header__links-toggled" : "")
  }, /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link header__link_current",
    href: "/",
    "aria-current": "page"
  }, "\u0421\u0432\u043E\u0434\u043A\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/devices"
  }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/scripts"
  }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"))));
}
function Event(props) {
  var ref = React.useRef();
  var onSize = props.onSize;
  React.useEffect(function () {
    var width = ref.current.offsetWidth;
    var height = ref.current.offsetHeight;
    if (onSize) {
      onSize({
        width: width,
        height: height
      });
      return function () {
        onSize({
          width: -width,
          height: -height
        });
      };
    }
  });
  return /*#__PURE__*/React.createElement("li", {
    ref: ref,
    className: "event" + (props.slim ? " event_slim" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "event__button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "event__icon event__icon_".concat(props.icon),
    role: "img",
    "aria-label": props.iconLabel
  }), /*#__PURE__*/React.createElement("h4", {
    className: "event__title"
  }, props.title), props.subtitle && /*#__PURE__*/React.createElement("span", {
    className: "event__subtitle"
  }, props.subtitle)));
}
var TABS = {
  all: {
    title: "Все",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  },
  kitchen: {
    title: "Кухня",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }]
  },
  hall: {
    title: "Зал",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Выключено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Выключено"
    }]
  },
  lights: {
    title: "Лампочки",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }]
  },
  cameras: {
    title: "Камеры",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  }
};
for (var i = 0; i < 6; ++i) {
  TABS.all.items = TABS.all.items.concat(TABS.all.items);
}
var TABS_KEYS = Object.keys(TABS);
function Main() {
  var ref = React.useRef();
  var sumWidthRef = React.useRef(0);
  var _React$useState5 = React.useState(function () {
      return new URLSearchParams(location.search).get("tab") || "all";
    }),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    activeTab = _React$useState6[0],
    setActiveTab = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    hasRightScroll = _React$useState8[0],
    setHasRightScroll = _React$useState8[1];
  var onSelectInput = function onSelectInput(event) {
    setActiveTab(event.target.value);
  };
  var onSize = React.useCallback(function (_ref) {
    var width = _ref.width;
    sumWidthRef.current += width;
  }, []);
  React.useEffect(function () {
    var newHasRightScroll = sumWidthRef.current > ref.current.parentElement.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });
  var onArrowCLick = function onArrowCLick() {
    var scroller = ref.current;
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth"
      });
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section main__general"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title section__title-header section__main-title"
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__primary"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hero-dashboard__title"
  }, "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"), /*#__PURE__*/React.createElement("p", {
    className: "hero-dashboard__subtitle"
  }, "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."), /*#__PURE__*/React.createElement("ul", {
    className: "hero-dashboard__info"
  }, /*#__PURE__*/React.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0414\u043E\u043C\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+23", /*#__PURE__*/React.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"))), /*#__PURE__*/React.createElement("li", {
    className: "hero-dashboard__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-title"
  }, "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__item-details"
  }, "+19", /*#__PURE__*/React.createElement("span", {
    className: "a11y-hidden"
  }, "\xB0"), /*#__PURE__*/React.createElement("div", {
    className: "hero-dashboard__icon hero-dashboard__icon_rain",
    role: "img",
    "aria-label": "\u0414\u043E\u0436\u0434\u044C"
  }))))), /*#__PURE__*/React.createElement("ul", {
    className: "hero-dashboard__schedule"
  }, /*#__PURE__*/React.createElement(Event, {
    icon: "temp",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "Philips Cooler",
    subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
  }), /*#__PURE__*/React.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  }), /*#__PURE__*/React.createElement(Event, {
    icon: "light",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "Xiaomi Yeelight LED Smart Bulb",
    subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section main__scripts"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), /*#__PURE__*/React.createElement("ul", {
    className: "event-grid"
  }, /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "schedule",
    iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    title: "\u042F \u0443\u0445\u043E\u0436\u0443"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "light2",
    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
    title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
    subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
  }), /*#__PURE__*/React.createElement(Event, {
    slim: true,
    icon: "temp2",
    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section main__devices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement("select", {
    className: "section__select",
    defaultValue: "all",
    onInput: onSelectInput
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/React.createElement("option", {
      key: key,
      value: key
    }, TABS[key].title);
  })), /*#__PURE__*/React.createElement("ul", {
    role: "tablist",
    className: "section__tabs"
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      role: "tab",
      "aria-selected": key === activeTab ? "true" : "false",
      tabIndex: key === activeTab ? "0" : undefined,
      className: "section__tab" + (key === activeTab ? " section__tab_active" : ""),
      id: "tab_".concat(key),
      "aria-controls": "panel_".concat(key),
      onClick: function onClick() {
        return setActiveTab(key);
      }
    }, TABS[key].title);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "section__panel-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "tabpanel",
    className: "section__panel",
    "aria-hidden": "false",
    id: "panel_".concat(activeTab),
    "aria-labelledby": "tab_".concat(activeTab)
  }, /*#__PURE__*/React.createElement("ul", {
    className: "section__panel-list"
  }, TABS[activeTab].items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Event, Object.assign({
      key: index
    }, item, {
      onSize: onSize
    }));
  }))), hasRightScroll && /*#__PURE__*/React.createElement("div", {
    className: "section__arrow",
    onClick: onArrowCLick
  }))));
}
setTimeout(function () {
  var root = ReactDOM.createRoot(document.getElementById("app"));
  root.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Main, null)));
}, 100);