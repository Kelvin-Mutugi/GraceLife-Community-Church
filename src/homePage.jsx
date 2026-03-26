import { useState } from "react";

/* ─── Image sources (Unsplash – free to use) ─── */
const IMAGES = {
  hero:       "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&q=80",
  about:      "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80",
  aboutSmall: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=80",
  pastor:     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  sermon1:    "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
  sermon2:    "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=600&q=80",
  sermon3:    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
  ministry1:  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80",
  ministry2:  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80",
  ministry3:  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80",
  ministry4:  "https://images.unsplash.com/photo-1593113630400-ea4288922559?w=500&q=80",
};

/* ─── Data ─── */
const NAV = ["Home", "About", "Ministries", "Sermons", "Events", "Contact"];

const SERVICES = [
  { day: "Sunday",    time: "9:00 AM – 11:30 AM", label: "Main Worship Service" },
  { day: "Wednesday", time: "6:00 PM – 7:30 PM",  label: "Midweek Bible Study" },
  { day: "Friday",    time: "5:00 PM – 7:00 PM",  label: "Youth Fellowship" },
];

const MINISTRIES = [
  { img: IMAGES.ministry1, name: "Youth Ministry",      desc: "Helping young people grow in faith through mentorship, events, and Bible study." },
  { img: IMAGES.ministry2, name: "Children's Ministry", desc: "A safe, joyful environment where children discover the love of God." },
  { img: IMAGES.ministry3, name: "Worship Team",        desc: "Leading the congregation in powerful, uplifting worship every week." },
  { img: IMAGES.ministry4, name: "Outreach Ministry",   desc: "Serving Nairobi through charity work, food drives, and community support." },
];

const SERMONS = [
  { img: IMAGES.sermon1, title: "Walking by Faith, Not by Sight", date: "March 16, 2025" },
  { img: IMAGES.sermon2, title: "The Power of Prayer",             date: "March 9, 2025" },
  { img: IMAGES.sermon3, title: "Living a Purpose-Driven Life",    date: "February 23, 2025" },
];

const EVENTS = [
  { month: "APR", day: "12", title: "Community Outreach Day", desc: "Join us as we serve the greater Nairobi community with love and practical care." },
  { month: "APR", day: "25", title: "Worship Night",          desc: "An intimate evening of praise, prayer, and God's presence." },
  { month: "MAY", day: "5",  title: "Youth Camp 2025",        desc: "Three days of fellowship, adventure, and faith. May 5–7." },
];

const TESTIMONIALS = [
  { text: "This church changed my life. I found purpose and family here. The community welcomed me with open arms from day one.", author: "Mary W.", role: "Member since 2018" },
  { text: "The teachings are practical and inspiring. Every Sunday I leave with something new to apply in my daily walk with God.", author: "James K.", role: "Member since 2020" },
];

/* ─── SVG Icons ─── */
const CrossIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="10" y="2" width="4" height="20" rx="1"/>
    <rect x="2" y="8" width="20" height="4" rx="1"/>
  </svg>
);

const SparkleIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

/* ─── Tailwind color tokens (used as arbitrary values) ─── */
const C = {
  cream:   "#f5ede8",
  burg:    "#7c2d3e",
  burgLt:  "#a84455",
  dark:    "#1a1a1a",
  muted:   "#c4a098",
};

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function GraceLifeChurch() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: C.cream, fontFamily: "'Lato', sans-serif", color: C.dark }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* ══ NAV ══ */}
      <nav
        style={{ background: `${C.cream}f2`, borderBottom: `1px solid ${C.burg}18` }}
        className="sticky top-0 z-50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: C.burg }}
            >
              <CrossIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-base leading-none">
                GraceLife
              </p>
              <p style={{ color: C.burg }} className="text-[0.58rem] tracking-[0.16em] uppercase font-bold hidden sm:block">
                Community Church
              </p>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item, i) => (
              <li key={item} className="flex items-center">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm tracking-wide transition-colors duration-200 hover:opacity-60"
                  style={{ color: C.dark }}
                >
                  {item}
                </a>
                {i < NAV.length - 2 && (
                  <span style={{ color: C.muted }} className="text-xs">•</span>
                )}
              </li>
            ))}
            <li className="ml-4">
              <a
                href="#contact"
                className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200"
                style={{ border: `1.5px solid ${C.dark}`, color: C.dark }}
                onMouseEnter={e => { e.target.style.background = C.burg; e.target.style.color = "#fff"; e.target.style.borderColor = C.burg; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = C.dark; e.target.style.borderColor = C.dark; }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: C.dark }} />
            <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}      style={{ background: C.dark }} />
            <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: C.dark }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: C.cream, borderTop: `1px solid ${C.burg}18` }} className="lg:hidden px-6 py-4 flex flex-col gap-3">
            {[...NAV, "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm py-2 border-b"
                style={{ color: C.dark, borderColor: `${C.burg}12` }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center min-h-[88vh] py-16 lg:py-24">

          {/* Decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <span style={{ color: C.muted }} className="absolute top-10 left-12 text-sm tracking-widest opacity-50">+++</span>
            <span style={{ color: C.muted }} className="absolute top-10 right-16 text-sm tracking-widest opacity-50 hidden lg:block">+++</span>
            <SparkleIcon className="absolute top-24 left-[42%] w-3.5 h-3.5 opacity-30" style={{ color: C.burg }} />
            <SparkleIcon className="absolute top-40 right-[28%] w-3 h-3 opacity-25" style={{ color: C.burg }} />
            <SparkleIcon className="absolute bottom-36 right-[20%] w-4 h-4 opacity-30" style={{ color: C.burg }} />
            <SparkleIcon className="absolute bottom-24 left-[44%] w-3 h-3 opacity-20" style={{ color: C.burg }} />
            <div className="absolute top-12 left-[37%] w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${C.burg}10` }}>
              <CrossIcon className="w-4 h-4 opacity-20" style={{ color: C.burg }} />
            </div>
            <div className="absolute top-12 right-[12%] w-10 h-10 rounded-full items-center justify-center hidden lg:flex" style={{ background: `${C.burg}10` }}>
              <CrossIcon className="w-4 h-4 opacity-20" style={{ color: C.burg }} />
            </div>
            <div className="absolute bottom-20 left-6 w-16 h-5 rounded-full" style={{ background: `${C.muted}30` }} />
            <div className="absolute bottom-32 right-[32%] w-12 h-4 rounded-full" style={{ background: `${C.muted}25` }} />
          </div>

          {/* Left */}
          <div className="relative z-10">
            <div className="inline-block px-4 pb-2 pt-1 mb-1" style={{ background: C.burg }}>
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }} className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none">
                GRACELIFE
              </span>
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-5xl sm:text-6xl lg:text-7xl leading-tight">
              COMMUNITY<br />CHURCH
            </div>
            <p className="mt-6 text-sm leading-relaxed max-w-md font-light" style={{ color: "#555" }}>
              Growing in Faith. Serving with Love. Impacting Our Community.
              Join us every Sunday for an uplifting worship experience in Nairobi, Kenya.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{ background: C.burg, color: "#fff" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.burgLt; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.burg; }}
              >
                Join Us Sunday
              </a>
              <a
                href="#sermons"
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{ border: `1.5px solid ${C.dark}`, color: C.dark }}
                onMouseEnter={e => { e.currentTarget.style.background = C.dark; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.dark; }}
              >
                Watch Online
              </a>
            </div>
          </div>

          {/* Right – circle image */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full" style={{ border: `2px solid ${C.burg}` }} />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img src={IMAGES.hero} alt="Worship gathering" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `${C.burg}20` }} />
              </div>
              <div
                className="absolute bottom-6 -left-3 w-14 h-14 flex items-center justify-center"
                style={{ background: C.burg }}
              >
                <CrossIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES BAR ══ */}
      <div style={{ background: C.burg }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1, borderColor: 'rgba(255,255,255,0.15)' }}>
          {SERVICES.map(s => (
            <div key={s.day} className="px-6 lg:px-10 py-7" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <p className="text-[0.62rem] tracking-[0.18em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.day}</p>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-white font-bold text-xl">{s.time}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* Stacked images */}
          <div className="relative h-80 md:h-[420px]">
            <div className="absolute top-0 right-0 w-4/5 h-5/6 rounded overflow-hidden shadow-xl">
              <img src={IMAGES.about} alt="Open Bible" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `${C.burg}12` }} />
            </div>
            <div className="absolute bottom-0 left-0 w-[52%] h-[52%] rounded overflow-hidden shadow-lg" style={{ border: `4px solid ${C.cream}` }}>
              <img src={IMAGES.aboutSmall} alt="Church congregation" className="w-full h-full object-cover" />
            </div>
            {/* Year badge */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg"
              style={{ background: "#fff", border: `3px solid ${C.burg}` }}
            >
              <span className="text-[0.48rem] tracking-widest uppercase" style={{ color: C.burg }}>Since</span>
              <span style={{ fontFamily: "'Playfair Display', serif", color: C.burg }} className="font-black text-xl leading-none">2012</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>About Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-3xl md:text-4xl leading-tight mb-5">
              A Welcoming Home<br />for Faith &amp; Community
            </h2>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: "#555" }}>
              GraceLife Community Church is a vibrant, Christ-centered church dedicated to helping people grow spiritually, build meaningful relationships, and make a positive impact in the community.
            </p>
            <p className="text-sm leading-relaxed font-light mb-8" style={{ color: "#555" }}>
              Founded in 2012, we have become a welcoming home for individuals and families across Nairobi seeking purpose, faith, and genuine connection.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Biblical Teaching", "Authentic Worship", "Community Outreach", "Empowering Youth"].map(b => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: C.burg }} />
                  <span className="text-sm" style={{ color: "#444" }}>{b}</span>
                </div>
              ))}
            </div>
            <a
              href="#ministries"
              className="inline-block px-7 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: C.burg, color: "#fff" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.burgLt; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.burg; }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ══ MINISTRIES ══ */}
      <section id="ministries" className="py-20 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>Our Ministries</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-3xl md:text-4xl leading-tight">
              Serving Every Season of Life
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MINISTRIES.map(m => (
              <div
                key={m.name}
                className="group rounded-md overflow-hidden transition-all duration-250 cursor-default"
                style={{ border: `1px solid ${C.burg}18` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.burg; e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,45,62,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.burg}18`; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="h-44 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-bold text-base mb-2">{m.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VISION / MISSION ══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid md:grid-cols-2 gap-6">
          {[
            { label: "Our Vision", title: "Rooted in Faith,\nEmpowered by Love", body: "To raise a generation rooted in faith, empowered by love, and committed to transforming lives across Kenya and beyond." },
            { label: "Our Mission", title: "Growing Together\nin God", body: "To lead people into a growing relationship with God through worship, discipleship, and practical service to our community." },
          ].map(card => (
            <div
              key={card.label}
              className="rounded-md p-8 lg:p-10"
              style={{ background: "#fff", border: `1px solid ${C.burg}12` }}
            >
              <p className="text-[0.62rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>{card.label}</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-2xl leading-snug mb-4 whitespace-pre-line">{card.title}</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: "#555" }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERMONS ══ */}
      <section id="sermons" className="py-20 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>Latest Sermons</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-3xl md:text-4xl leading-tight mb-14">
            Messages That<br />Transform Lives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERMONS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-md overflow-hidden cursor-pointer transition-all duration-200"
                style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.06)"; }}
              >
                <div className="h-44 relative overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "rgba(26,26,26,0.52)" }} />
                  <span className="absolute top-3 left-3 text-white text-[0.6rem] tracking-widest px-3 py-1 rounded-full uppercase" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}>
                    Sermon {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.5)" }}>
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <div className="p-5" style={{ background: "#fff" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-bold text-base mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs tracking-wide" style={{ color: C.muted }}>Pastor Daniel Mwangi · {s.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EVENTS ══ */}
      <section id="events" className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>Upcoming Events</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-3xl md:text-4xl leading-tight">
              Join Us for These<br />Special Occasions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {EVENTS.map(e => (
              <div
                key={e.title}
                className="flex items-center gap-6 p-5 lg:p-6 rounded-md transition-colors duration-200"
                style={{ background: "#fff", border: `1px solid ${C.burg}14` }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = C.burg; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = `${C.burg}14`; }}
              >
                <div className="text-white rounded-md px-4 py-3 text-center flex-shrink-0 min-w-[60px]" style={{ background: C.burg }}>
                  <p className="text-[0.55rem] tracking-widest uppercase" style={{ opacity: 0.75 }}>{e.month}</p>
                  <p style={{ fontFamily: "'Playfair Display', serif" }} className="font-black text-2xl leading-none">{e.day}</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-bold text-base mb-1">{e.title}</h4>
                  <p className="text-sm" style={{ color: "#777" }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 lg:py-28" style={{ background: C.burg }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.muted }}>Testimonials</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white font-black text-3xl md:text-4xl leading-tight">
              Lives Changed<br />by God's Grace
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.author} className="rounded-md p-8" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl leading-none mb-3" style={{ color: "rgba(255,255,255,0.22)" }}>"</p>
                <p className="text-sm leading-relaxed font-light italic mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>{t.text}</p>
                <p className="text-sm font-bold" style={{ color: C.muted }}>{t.author}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP ══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden flex-shrink-0 shadow-lg" style={{ border: `4px solid ${C.muted}` }}>
              <img src={IMAGES.pastor} alt="Pastor Daniel Mwangi" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[0.62rem] tracking-[0.18em] uppercase font-bold mb-2" style={{ color: C.burg }}>Senior Pastor</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-2xl md:text-3xl mb-4">
                Pastor Daniel Mwangi
              </h2>
              <p className="text-sm leading-relaxed font-light" style={{ color: "#555" }}>
                With over 15 years of ministry experience, Pastor Daniel is passionate about Biblical teaching, mentoring the next generation, and seeing lives transformed through the Gospel. His practical and spirit-led messages have touched thousands across Nairobi and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-20 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase font-bold mb-3" style={{ color: C.burg }}>Contact Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.dark }} className="font-black text-3xl md:text-4xl leading-tight mb-14">
            We'd Love to<br />Hear from You
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact info */}
            <div>
              <div className="flex flex-col gap-7 mb-10">
                {[
                  { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
                  { icon: "📞", label: "Phone",    value: "+254 712 345 678" },
                  { icon: "✉",  label: "Email",    value: "info@gracelifechurch.org" },
                  { icon: "🌐", label: "Website",  value: "www.gracelifechurch.org" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-base" style={{ background: `${C.burg}10` }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[0.62rem] tracking-widest uppercase mb-0.5" style={{ color: C.muted }}>{c.label}</p>
                      <p className="text-sm" style={{ color: C.dark }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {["Facebook", "Instagram", "YouTube"].map(s => (
                  <button
                    key={s}
                    className="px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
                    style={{ border: `1.5px solid ${C.burg}30`, color: C.burg }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.burg; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = C.burg; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.burg; e.currentTarget.style.borderColor = `${C.burg}30`; }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              {[
                { key: "name",    type: "text",  placeholder: "Your Name" },
                { key: "email",   type: "email", placeholder: "Your Email" },
                { key: "subject", type: "text",  placeholder: "Subject" },
              ].map(f => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-md text-sm outline-none transition-colors duration-200"
                  style={{ background: C.cream, border: `1.5px solid ${C.burg}18`, color: C.dark, fontFamily: "'Lato', sans-serif" }}
                  onFocus={e => { e.target.style.borderColor = C.burg; }}
                  onBlur={e => { e.target.style.borderColor = `${C.burg}18`; }}
                />
              ))}
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-md text-sm outline-none resize-vertical transition-colors duration-200"
                style={{ background: C.cream, border: `1.5px solid ${C.burg}18`, color: C.dark, fontFamily: "'Lato', sans-serif" }}
                onFocus={e => { e.target.style.borderColor = C.burg; }}
                onBlur={e => { e.target.style.borderColor = `${C.burg}18`; }}
              />
              <button
                className="self-start px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{ background: C.burg, color: "#fff" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.burgLt; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.burg; }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="py-8" style={{ background: C.dark }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: C.burg }}>
              <CrossIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-sm font-bold">GraceLife Community Church</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>© 2025 GraceLife Community Church · Nairobi, Kenya</p>
          <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.45)" }}>Growing in Faith. Serving with Love.</p>
        </div>
      </footer>
    </div>
  );
}