import "./reset.css";
import "./styles.css";

const HasRightScrollContext = React.createContext();
const SetHasRightScrollContext = React.createContext();
const ActiveTabContext = React.createContext();
const SetActiveTabContext = React.createContext();

const Header = () => {
    let [expanded, setExpanded] = React.useState(false);
    let [toggled, setToggled] = React.useState(false);

    const onClick = () => {
        if (!toggled) {
            setToggled(true);
        }

        setExpanded(!expanded);
    };

    return (
        <header className="header">
            <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
            <button
                className="header__menu"
                aria-expanded={expanded ? "true" : "false"}
                onClick={onClick}
            >
                <span className="header__menu-text a11y-hidden">
                    {expanded ? "Закрыть меню" : "Открыть меню"}
                </span>
            </button>
            <ul
                className={
                    "header__links" +
                    (expanded ? " header__links_opened" : "") +
                    (toggled ? " header__links-toggled" : "")
                }
            >
                <li className="header__item">
                    <a className="header__link header__link_current" href="/" aria-current="page">
                        Сводка
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="/devices">
                        Устройства
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="/scripts">
                        Сценарии
                    </a>
                </li>
            </ul>
        </header>
    );
};

const EventSubtitle = ({ subtitle }) => {
    if (!subtitle) {
        return null;
    }

    return <span className="event__subtitle">{subtitle}</span>;
};

const Event = (props) => {
    const ref = React.useRef();

    const { tabKey, onSize } = props;

    const activeTab = React.useContext(ActiveTabContext);

    React.useEffect(() => {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        if (onSize) {
            if (tabKey && tabKey === activeTab) {
                onSize({ width, height });
            }

            return () => {
                onSize({ width: -width, height: -height });
            };
        }
    }, [activeTab, onSize, tabKey]);

    return (
        <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
            <button className="event__button">
                <span
                    className={`event__icon event__icon_${props.icon}`}
                    role="img"
                    aria-label={props.iconLabel}
                ></span>
                <h4 className="event__title">{props.title}</h4>

                <EventSubtitle subtitle={props.subtitle} />
            </button>
        </li>
    );
};

const TABS = {
    all: {
        title: "Все",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Yeelight LED Smart Bulb",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "D-Link Omna 180 Cam",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "temp",
                iconLabel: "Температура",
                title: "Elgato Eve Degree Connected",
                subtitle: "Выключено до 17:00",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "LIFX Mini Day & Dusk A60 E27",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
        ],
    },
    kitchen: {
        title: "Кухня",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Yeelight LED Smart Bulb",
                subtitle: "Включено",
            },
            {
                icon: "temp",
                iconLabel: "Температура",
                title: "Elgato Eve Degree Connected",
                subtitle: "Выключено до 17:00",
            },
        ],
    },
    hall: {
        title: "Зал",
        items: [
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Выключено",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Выключено",
            },
        ],
    },
    lights: {
        title: "Лампочки",
        items: [
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "D-Link Omna 180 Cam",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "LIFX Mini Day & Dusk A60 E27",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
        ],
    },
    cameras: {
        title: "Камеры",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
        ],
    },
};
for (let i = 0; i < 6; ++i) {
    TABS.all.items = TABS.all.items.concat(TABS.all.items);
}
const TABS_KEYS = Object.keys(TABS);

const RightScrollProvider = ({ children }) => {
    const [hasRightScroll, setHasRightScroll] = React.useState(true);

    return (
        <SetHasRightScrollContext.Provider value={setHasRightScroll}>
            <HasRightScrollContext.Provider value={hasRightScroll}>
                {children}
            </HasRightScrollContext.Provider>
        </SetHasRightScrollContext.Provider>
    );
};

const RightScroll = ({ onArrowCLick }) => {
    const hasRightScroll = React.useContext(HasRightScrollContext);

    if (!hasRightScroll) {
        return null;
    }

    return <div className="section__arrow" onClick={onArrowCLick}></div>;
};

const ActiveTabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = React.useState(
        () => new URLSearchParams(location.search).get("tab") || "all"
    );

    return (
        <SetActiveTabContext.Provider value={setActiveTab}>
            <ActiveTabContext.Provider value={activeTab}>{children}</ActiveTabContext.Provider>
        </SetActiveTabContext.Provider>
    );
};

const TabPanel = ({ tabKey, forwardRef, children }) => {
    const activeTab = React.useContext(ActiveTabContext);

    return (
        <div
            ref={(e) => {
                if (tabKey === activeTab) {
                    forwardRef.current = e;
                }
            }}
            role="tabpanel"
            className={"section__panel" + (tabKey === activeTab ? "" : " section__panel_hidden")}
            aria-hidden={tabKey === activeTab ? "false" : "true"}
            id={`panel_${tabKey}`}
            aria-labelledby={`tab_${tabKey}`}
        >
            <ul className="section__panel-list">{children}</ul>
        </div>
    );
};

const SectionTab = ({ tabKey, children }) => {
    const activeTab = React.useContext(ActiveTabContext);
    const setActiveTab = React.useContext(SetActiveTabContext);

    return (
        <li
            role="tab"
            aria-selected={tabKey === activeTab ? "true" : "false"}
            tabIndex={tabKey === activeTab ? "0" : undefined}
            className={"section__tab" + (tabKey === activeTab ? " section__tab_active" : "")}
            id={`tab_${tabKey}`}
            aria-controls={`panel_${tabKey}`}
            onClick={() => setActiveTab(tabKey)}
        >
            {children}
        </li>
    );
};

const Main = () => {
    console.log("main rerender");
    const ref = React.useRef();
    const sumWidthRef = React.useRef(0);
    const setHasRightScroll = React.useContext(SetHasRightScrollContext);
    const setActiveTab = React.useContext(SetActiveTabContext);

    const onSelectInput = (event) => {
        setActiveTab(event.target.value);
    };

    const onSize = React.useCallback(
        ({ width }) => {
            sumWidthRef.current += width;

            const newHasRightScroll = sumWidthRef.current > ref.current.parentElement.offsetWidth;

            setHasRightScroll(newHasRightScroll);
        },
        [setHasRightScroll]
    );

    const onArrowCLick = React.useCallback(() => {
        const scroller = ref.current;
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <main className="main">
            <section className="section main__general">
                <h2 className="section__title section__title-header section__main-title">
                    Главное
                </h2>
                <div className="hero-dashboard">
                    <div className="hero-dashboard__primary">
                        <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                        <p className="hero-dashboard__subtitle">
                            Двери и окна закрыты, сигнализация включена.
                        </p>
                        <ul className="hero-dashboard__info">
                            <li className="hero-dashboard__item">
                                <div className="hero-dashboard__item-title">Дома</div>
                                <div className="hero-dashboard__item-details">
                                    +23
                                    <span className="a11y-hidden">°</span>
                                </div>
                            </li>
                            <li className="hero-dashboard__item">
                                <div className="hero-dashboard__item-title">За окном</div>
                                <div className="hero-dashboard__item-details">
                                    +19
                                    <span className="a11y-hidden">°</span>
                                    <div
                                        className="hero-dashboard__icon hero-dashboard__icon_rain"
                                        role="img"
                                        aria-label="Дождь"
                                    ></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="hero-dashboard__schedule">
                        <Event
                            icon="temp"
                            iconLabel="Температура"
                            title="Philips Cooler"
                            subtitle="Начнет охлаждать в 16:30"
                        />
                        <Event
                            icon="light"
                            iconLabel="Освещение"
                            title="Xiaomi Yeelight LED Smart Bulb"
                            subtitle="Включится в 17:00"
                        />
                        <Event
                            icon="light"
                            iconLabel="Освещение"
                            title="Xiaomi Yeelight LED Smart Bulb"
                            subtitle="Включится в 17:00"
                        />
                    </ul>
                </div>
            </section>

            <section className="section main__scripts">
                <h2 className="section__title section__title-header">Избранные сценарии</h2>

                <ul className="event-grid">
                    <Event
                        slim={true}
                        icon="light2"
                        iconLabel="Освещение"
                        title="Выключить весь свет в доме и во дворе"
                    />
                    <Event slim={true} icon="schedule" iconLabel="Расписание" title="Я ухожу" />
                    <Event
                        slim={true}
                        icon="light2"
                        iconLabel="Освещение"
                        title="Включить свет в коридоре"
                    />
                    <Event
                        slim={true}
                        icon="temp2"
                        iconLabel="Температура"
                        title="Набрать горячую ванну"
                        subtitle="Начнётся в 18:00"
                    />
                    <Event
                        slim={true}
                        icon="temp2"
                        iconLabel="Температура"
                        title="Сделать пол тёплым во всей квартире"
                    />
                </ul>
            </section>

            <section className="section main__devices">
                <div className="section__title">
                    <h2 className="section__title-header">Избранные устройства</h2>

                    <select className="section__select" defaultValue="all" onInput={onSelectInput}>
                        {TABS_KEYS.map((key) => (
                            <option key={key} value={key}>
                                {TABS[key].title}
                            </option>
                        ))}
                    </select>

                    <ul role="tablist" className="section__tabs">
                        {TABS_KEYS.map((key) => (
                            <SectionTab key={key} tabKey={key}>
                                {TABS[key].title}
                            </SectionTab>
                        ))}
                    </ul>
                </div>

                <div className="section__panel-wrapper">
                    {TABS_KEYS.map((key) => (
                        <TabPanel key={key} tabKey={key} forwardRef={ref}>
                            {TABS[key].items.map((item, index) => (
                                <Event key={index} tabKey={key} {...item} onSize={onSize} />
                            ))}
                        </TabPanel>
                    ))}

                    <RightScroll onArrowCLick={onArrowCLick} />
                </div>
            </section>
        </main>
    );
};

setTimeout(() => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(
        <>
            <Header />
            <RightScrollProvider>
                <ActiveTabProvider>
                    <Main />
                </ActiveTabProvider>
            </RightScrollProvider>
        </>
    );
}, 100);
