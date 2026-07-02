import React, { useState, useEffect, useRef } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell,
} from "recharts";
import {
  Activity, LayoutGrid, Scale, FileText, TrendingUp, Landmark, Fingerprint,
  Wallet, Building2, ArrowLeftRight, Gavel, Database, ShieldCheck, ChevronLeft,
  Users, Coins, Vote,
} from "lucide-react";

// ---------- Palette ----------
const C = {
  ink: "#083A34", ink2: "#0B4A43", aqua: "#12A594", aquaLt: "#7FD1C6",
  gold: "#E0A138", coral: "#D9614B", bg: "#EDF3F1", surface: "#FFFFFF",
  mute: "#5D6F6B", line: "#DCE7E4",
};

// ---------- Illustrative data (projected, not actual) ----------
const MONTHS = [
  { m: "Jul", trade: 22, biz: 210, cit: 2200 },
  { m: "Aug", trade: 34, biz: 320, cit: 5000 },
  { m: "Sep", trade: 50, biz: 440, cit: 8700 },
  { m: "Oct", trade: 66, biz: 560, cit: 13100 },
  { m: "Nov", trade: 82, biz: 690, cit: 17900 },
  { m: "Dec", trade: 98, biz: 810, cit: 22800 },
  { m: "Jan", trade: 112, biz: 930, cit: 27500 },
  { m: "Feb", trade: 126, biz: 1030, cit: 31300 },
  { m: "Mar", trade: 138, biz: 1110, cit: 34500 },
  { m: "Apr", trade: 148, biz: 1170, cit: 37000 },
  { m: "May", trade: 155, biz: 1210, cit: 38700 },
  { m: "Jun", trade: 160, biz: 1240, cit: 40000 },
];
const POP = 40000;
const BIZ = 1240;
const GDP_PC = 150000;              // CCU per citizen, annualized
const GDP = POP * GDP_PC;           // 6.0B CCU of annualized economic activity
const CCU_CIRC = 1.2e9;             // ~20% of GDP held in the currency
const TREASURY = 112000000;         // reserve from the 100M raise plus accumulated revenue
const TRADE_CUM = MONTHS.reduce((s, d) => s + d.trade, 0); // ~1.19B (series values in M CCU)

const SERVICES = [
  {
    id: "identity", name: "Digital Identity", phase: 1, Icon: Fingerprint,
    tag: "A verified identity for every citizen and business.",
    what: "A verified, privacy respecting digital identity, the credential that makes honest voting, trusted trade, and every other service possible. It is the substrate beneath the whole union.",
    how: "Established at onboarding with anti money laundering checks built in. Citizens control what they share, and the union confirms uniqueness without exposing unnecessary personal data.",
    cost: "Included in citizenship.",
    metrics: [["Verified citizens", POP.toLocaleString()], ["Verified businesses", BIZ.toLocaleString()], ["Median verification", "8 min"]],
  },
  {
    id: "money", name: "CCU Money & Savings", phase: 1, Icon: Wallet,
    tag: "One shared currency to hold, use, and save.",
    what: "One stable regional currency held in a CDU wallet, behaving the same in every member territory, plus an optional CCU Savings account that pays a floating return from a diversified portfolio of Caribbean government securities.",
    how: "Every member gets a wallet, holds CCU, and sends, receives, and spends it free within the union. Conversion to a local currency happens only at the edges. Funds not needed day to day can earn yield in the Savings account.",
    cost: "Free within the union. 1% conversion fee only at the boundary. Savings target 3 to 4%.",
    metrics: [["CCU in circulation", (CCU_CIRC / 1e9).toFixed(2) + "B"], ["Reserve ratio", "100%"], ["Savings rate", "3.8%"]],
  },
  {
    id: "registry", name: "Business Registry", phase: 1, Icon: Building2,
    tag: "Register a business, the gateway to regional trade.",
    what: "A verifiable, tamper evident record of who a business is and its standing, and the entry point to trading across the union.",
    how: "An enterprise verifies once, receives a registry entry, and can then hold CCU, trade across the region, hire, raise capital, and use every union service.",
    cost: "100 CCU one time. Sales are subject to the 10% union VAT.",
    metrics: [["Registered businesses", BIZ.toLocaleString()], ["Registered this month", "30"], ["Median approval", "1 day"]],
  },
  {
    id: "trade", name: "Regional Trade & Settlement", phase: 1, Icon: ArrowLeftRight,
    tag: "Instant cross-border trade in one currency.",
    what: "The heart of the union: one currency and one settlement network for trade across the Caribbean, without correspondent banks, without converting through the US dollar, and without the fees and delays that make regional trade harder than it should be.",
    how: "Registered businesses invoice and settle in CCU. Payment is instant and final, documents are recorded for both sides, and VAT is computed automatically on the rails.",
    cost: "Free between businesses in CCU. 1% conversion fee only at the boundary.",
    metrics: [["Cross-border trade settled", (TRADE_CUM / 1000).toFixed(2) + "B CCU"], ["Active corridors", "5"], ["Avg settlement", "~6 sec"]],
  },
  {
    id: "dispute", name: "Dispute Resolution", phase: 2, Icon: Gavel,
    tag: "Fast, bonded, fair resolution of any claim.",
    what: "A bonded process where challenging a decision means putting money behind conviction. A jury of seven staked citizens decides, with appeal and expert arbitration for large disputes.",
    how: "A decision posts and enters a 72 hour challenge window. A challenge escalates to a jury who vote within five days. The winner takes the loser's bond.",
    cost: "Bond: greater of 25 CCU or 10% of the disputed amount.",
    metrics: [["Disputes resolved", "214"], ["Avg resolution", "2.3 days"], ["Resolved at jury stage", "96%"]],
  },
  {
    id: "data", name: "Data Services", phase: 2, Icon: Database,
    tag: "Searchable public and permissioned records.",
    what: "A searchable union database. Public information is openly searchable; sensitive information is access controlled and released only under explicit, published rules.",
    how: "Every record is classified as public or restricted under a published data policy. Restricted records require authorization, and each access is logged.",
    cost: "0.5 CCU per public query, 5 CCU per authorized restricted query.",
    metrics: [["Queries this month", "48,900"], ["Public share", "91%"], ["Avg response", "<1 sec"]],
  },
  {
    id: "capital", name: "Capital Market", phase: 3, Icon: TrendingUp,
    tag: "Raise and allocate capital regionally.",
    what: "A regional venue where enterprises raise capital, members allocate savings into regional opportunities, and the union issues bonds and provides small and medium enterprise lending.",
    how: "All activity runs through compliant structures inside the union's legal wrapper. Investment instruments are treated as securities where they are securities.",
    cost: "Service fees set at launch by vote.",
    metrics: [["Status", "Phase 3"], ["Listings (mock)", "8"], ["Index (mock)", "CUX 1,247"]],
  },
  {
    id: "insurance", name: "Insurance Access", phase: 4, Icon: ShieldCheck,
    tag: "Cover from licensed partners, paid out instantly.",
    what: "Access to insurance provided by licensed partners. The union never underwrites risk. It is the identity, distribution, and instant payout layer connecting citizens to insurers and regional catastrophe facilities that hold the risk.",
    how: "A citizen selects cover, the union collects the premium and verifies eligibility, and on a valid claim or parametric trigger the payout reaches the wallet in seconds to hours.",
    cost: "Premiums set by partners; the union charges a small distribution and payout fee.",
    metrics: [["Status", "Phase 4"], ["Model", "Distribution only"], ["Payout", "Parametric, instant"]],
  },
];

const PRINCIPLES = [
  ["One person, one vote", "Each verified human is exactly one citizen with one non transferable vote. Identity cannot be bought or split."],
  ["Quadratic voting", "On major votes, casting n votes costs n squared credits, so intensity is heard without letting any bloc dominate."],
  ["Paid participation", "Citizens are paid to govern: 2 CCU per vote, capped at 20 CCU a month, because governance is real work."],
  ["10% administrative cap", "Total administrative spend is capped at 10% of annual revenue, changeable only by a two thirds supermajority."],
  ["Exit is guaranteed", "Any citizen may leave at any time and withdraw the full balance of their own CCU. Members are never trapped."],
  ["The DAO governs, the entity is liable", "Members decide through recorded votes; a real legal entity acts and bears liability; agents execute."],
];

const PARAMS = [
  ["Conversion fee (into or out of CCU)", "1.0% per conversion (cap 2.0%)"],
  ["CCU to CCU transfers", "Free"],
  ["Union VAT", "10% on sales, never on transfers"],
  ["VAT zero rated", "Basic food and medicine"],
  ["Individual citizenship", "Free"],
  ["Enterprise registration", "100 CCU one time"],
  ["CCU value", "GDP-weighted basket of Caribbean currencies"],
  ["CCU reserve ratio", "100%, liquid"],
  ["CCU Savings rate", "Floating, ~3 to 4% target"],
  ["Proposal to ballot", "1% of citizens or 500, whichever fewer"],
  ["Voting window / quorum", "7 days / 10% of citizens"],
  ["Standard passage", "Simple majority (>50%)"],
  ["Constitutional / parameter change", "Two thirds (66.7%)"],
  ["Participation reward", "2 CCU per vote, max 20 CCU / month"],
  ["Dispute bond", "Greater of 25 CCU or 10% of amount"],
  ["Dispute jury / appeal panel", "7 / 15"],
  ["Expert arbiter threshold", "Disputes over 50,000 CCU"],
  ["Capital raise", "100 million CCU over 24 months"],
];

const WHITEPAPER = [
  ["1", "Why the Caribbean Digital Union exists", "Forty years after CARICOM, the Caribbean remains fragmented into silos inherited from colonial structures. The CDU is a new economy built from the ground up to unite the region, currency first."],
  ["2", "What the CDU is", "A single digital economy with four parts: a settlement network, a government, a capital market, and an administration run increasingly by accountable AI agents. It is governed as a DAO with a real legal entity bearing liability."],
  ["3", "The Caribbean Currency Unit and saving", "One shared currency defined by a GDP-weighted basket of Caribbean currencies rather than a US dollar peg, fully reserved and redeemable, plus an optional yield-bearing CCU Savings fund holding a diversified portfolio of regional government securities."],
  ["4", "Citizenship", "Open to Caribbean nationals and to the diaspora by descent, proven through a documentary chain. One verified person is one citizen with one non transferable vote, and exit is always guaranteed."],
  ["5", "Government and governance", "Collective, high-stakes decisions are made by quadratic vote of verified citizens, with paid participation and a hard 10% administrative cost ceiling."],
  ["6", "The most efficient tax system", "No profit tax. A single 10% VAT on sales, computed and collected automatically on the rails, with food and medicine zero-rated and transfers never taxed, plus a 1% conversion fee only at the currency boundary."],
  ["7", "Public services", "Launching with digital identity, CCU money and savings, the business registry, and cross-border trade settlement, then expanding into dispute resolution, data services, a capital market, and insurance access."],
  ["8", "Dispute resolution", "A fast bonded process: a challenge posts a bond, a jury of seven staked citizens decides within five days, with appeal and expert arbitration for large disputes."],
  ["9", "Legal structure and compliance", "Anchored by a Cayman foundation company with operating subsidiaries. The DAO governs, the entity bears liability, and anti money laundering rules apply from day one."],
  ["10", "Capital raise", "100 million CCU over 24 months through three separated channels: development capital, compliant investment capital, and free, non-investment citizenship, with pre-launch funds in audited escrow."],
  ["11", "Roadmap", "Phase 1 launches the shared currency and the foundations of a regional market. Later phases add full governance and disputes, a capital market, and insurance access."],
  ["12", "Default parameters", "Every fee, threshold, and rule is stated as a default value, changeable by citizen vote, and gathered in one table."],
  ["13", "Risks and mitigations", "Securities, monetary, liability, plutocracy, security, agent, insurance, and adoption risks are each named with a specific mitigation."],
  ["14", "Glossary", "Plain-language definitions of the CCU, the basket, the DAO, VAT, quadratic voting, the conversion fee, and more."],
];

const CUX = { level: 1247.83, chg: 0.94, pts: 11.66 };
const CUX_SPARK = [1180, 1176, 1189, 1201, 1195, 1210, 1222, 1218, 1231, 1226, 1238, 1233, 1240, 1236, 1244, 1239, 1247, 1243, 1246, 1247.83].map((v, i) => ({ i, v }));
const LISTINGS = [
  ["CSTF", "Castries FinCloud", "Fintech", 88.40, 3.2, 210],
  ["GYAG", "Guyana AgriWorks", "Agriculture", 19.72, 2.4, 142],
  ["WNDR", "Windward Renewables", "Energy", 42.15, 1.8, 128],
  ["SLMF", "St. Lucia Manufacturing", "Industrials", 15.40, 1.2, 48],
  ["NASM", "Nassau Marine", "Shipping", 27.85, 0.9, 61],
  ["BGTR", "Bridgetown Hospitality REIT", "Real Estate", 12.30, 0.3, 74],
  ["PTSL", "Port of Spain Logistics", "Logistics", 31.05, -0.7, 96],
  ["KGDT", "Kingston Digital", "Telecom", 55.60, -1.1, 165],
];
const BONDS = [
  ["CDU Union Bond 2029", 4.8, "2029"],
  ["CDU Green Infrastructure 2031", 5.3, "2031"],
];
const MKT_CAP = LISTINGS.reduce((s, l) => s + l[5], 0);

const T_REVENUE = [
  ["Conversion fees", 2450000, C.aqua],
  ["Union VAT", 1180000, C.gold],
  ["Registration & service fees", 960000, C.ink],
  ["Savings spread", 530000, C.aquaLt],
];
const T_SPEND = [
  ["Service delivery & agent operations", 1180000, C.ink],
  ["Reserve & liquidity", 960000, C.aqua],
  ["Legal & compliance", 620000, C.gold],
  ["Development & partnerships", 480000, C.aquaLt],
  ["Participation rewards", 220000, C.coral],
  ["Contingency", 100000, C.mute],
];
const T_REV_TOTAL = T_REVENUE.reduce((s, r) => s + r[1], 0);
const T_SPEND_TOTAL = T_SPEND.reduce((s, r) => s + r[1], 0);
const LEDGER = [
  ["2026-06-28", "in", "VAT receipts (batch)", 482000, "0x9f3a…c1"],
  ["2026-06-27", "in", "Conversion fees (daily)", 125400, "0x7b21…4e"],
  ["2026-06-27", "out", "Agent operations, identity verification", -68200, "0x2c88…9a"],
  ["2026-06-26", "out", "Security audit, Q2", -400000, "0x51de…02"],
  ["2026-06-25", "in", "Enterprise registrations (370)", 37000, "0x8a44…bd"],
  ["2026-06-24", "res", "CCU reserve top-up", -960000, "0xd12f…77"],
  ["2026-06-23", "out", "Participation rewards, governance", -84100, "0x3e90…aa"],
  ["2026-06-22", "in", "Development grant tranche", 1500000, "0xbb07…19"],
  ["2026-06-21", "in", "Conversion fees (daily)", 119800, "0x66c2…3f"],
  ["2026-06-20", "out", "Legal and compliance retainer", -185000, "0x40a1…e8"],
  ["2026-06-19", "in", "VAT receipts (batch)", 449000, "0x1f7b…5c"],
  ["2026-06-18", "out", "Cash-out partner settlement", -223000, "0x9d33…b0"],
];

const nf = (n) => n.toLocaleString("en-US");
const ccu = (n) => nf(n) + " CCU";

// ---------- small helpers ----------
function useCountUp(target, dur = 1200) {
  const [v, setV] = useState(0);
  const r = useRef();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) r.current = requestAnimationFrame(step);
    };
    r.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r.current);
  }, [target, dur]);
  return v;
}
function Tip({ active, payload, label, unit }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="p-tip">
      <div className="p-tip-l">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="p-tip-v" style={{ color: p.color || p.fill }}>
          {unit === "m" ? p.value.toFixed(1) + "M CCU" : nf(Math.round(p.value))}
        </div>
      ))}
    </div>
  );
}
const PhaseBadge = ({ n }) => <span className={"p-badge ph" + n}>Phase {n}</span>;

// ---------- main ----------
export default function CDUPortal() {
  const [tab, setTab] = useState("overview");
  const [svc, setSvc] = useState(null);

  const TABS = [
    ["overview", "Overview", Activity],
    ["services", "Services", LayoutGrid],
    ["constitution", "Constitution", Scale],
    ["whitepaper", "White Paper", FileText],
    ["market", "Capital Market", TrendingUp],
    ["treasury", "Treasury", Landmark],
  ];

  return (
    <div className="p-root">
      <style>{CSS}</style>
      <div className="p-texture" aria-hidden="true" />

      <header className="p-top">
        <div className="p-brand">
          <span className="p-glyph">◈</span>
          <div>
            <div className="p-name">Caribbean Digital Union</div>
            <div className="p-sub">Union Portal · prototype</div>
          </div>
        </div>
        <div className="p-live"><span className="p-dot" />Live</div>
      </header>

      <nav className="p-tabs" role="tablist">
        {TABS.map(([k, label, Icon]) => (
          <button key={k} role="tab" aria-selected={tab === k}
            className={"p-tab" + (tab === k ? " on" : "")}
            onClick={() => { setTab(k); setSvc(null); }}>
            <Icon size={15} strokeWidth={2.2} />{label}
          </button>
        ))}
      </nav>

      <main className="p-main">
        {tab === "overview" && <Overview />}
        {tab === "services" && <Services svc={svc} setSvc={setSvc} />}
        {tab === "constitution" && <Constitution />}
        {tab === "whitepaper" && <WhitePaperView />}
        {tab === "market" && <Market />}
        {tab === "treasury" && <Treasury />}
      </main>

      <footer className="p-foot">
        <span><b>Illustrative prototype.</b> All figures are projected to demonstrate the interface and are not actual union data.</span>
      </footer>
    </div>
  );
}

// ---------- Overview ----------
function Overview() {
  const gdp = useCountUp(GDP);
  const pop = useCountUp(POP);
  const pc = useCountUp(GDP_PC);
  const biz = useCountUp(BIZ);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 40); return () => clearTimeout(t); }, []);
  return (
    <div>
      <div className="p-context">
        Serving a region of roughly <b>45 million people</b> and about <b>US$700 billion</b> in combined GDP, across <b>8 currencies</b> in the CCU basket.
      </div>

      <div className="p-kpis">
        <div className="p-kpi hero"><div className="p-kpi-label"><Users size={13} /> Population (verified citizens)</div><div className="p-kpi-val">{nf(Math.round(pop))}</div><div className="p-kpi-sub">one person, one citizen</div></div>
        <div className="p-kpi hero"><div className="p-kpi-label"><Activity size={13} /> Union GDP (annualized)</div><div className="p-kpi-val" style={{ color: C.aqua }}>{(gdp / 1e9).toFixed(1)}B</div><div className="p-kpi-sub">CCU of economic activity</div></div>
        <div className="p-kpi hero"><div className="p-kpi-label"><Coins size={13} /> GDP per capita</div><div className="p-kpi-val">{nf(Math.round(pc))}</div><div className="p-kpi-sub">CCU per citizen, annualized</div></div>
        <div className="p-kpi hero"><div className="p-kpi-label"><Building2 size={13} /> Registered businesses</div><div className="p-kpi-val" style={{ color: C.gold }}>{nf(Math.round(biz))}</div><div className="p-kpi-sub">trading across the union</div></div>
      </div>

      <div className="p-kpis sec">
        <div className="p-kpi"><div className="p-kpi-label">CCU in circulation</div><div className="p-kpi-val sm">{(CCU_CIRC / 1e9).toFixed(2)}B</div><div className="p-kpi-sub">100% reserved</div></div>
        <div className="p-kpi"><div className="p-kpi-label">Cross-border trade settled</div><div className="p-kpi-val sm">{(TRADE_CUM / 1000).toFixed(2)}B</div><div className="p-kpi-sub">cumulative CCU</div></div>
        <div className="p-kpi"><div className="p-kpi-label">Governance participation</div><div className="p-kpi-val sm" style={{ color: C.aqua }}>41%</div><div className="p-kpi-sub">DAO average ≈ 17%</div></div>
        <div className="p-kpi"><div className="p-kpi-label">Treasury</div><div className="p-kpi-val sm">{(TREASURY / 1e6).toFixed(2)}M</div><div className="p-kpi-sub">CCU, fully auditable</div></div>
      </div>

      <div className="p-grid2">
        <div className="p-card">
          <div className="p-card-h"><span>Cross-border trade settled</span><span className="p-hs">monthly, M CCU</span></div>
          <ResponsiveContainer width="100%" height={190}>
            <AreaChart data={MONTHS} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.aqua} stopOpacity={0.35} /><stop offset="100%" stopColor={C.aqua} stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid stroke={C.line} vertical={false} />
              <XAxis dataKey="m" tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} width={38} tickFormatter={(v) => "$" + v + "M"} />
              <Tooltip content={<Tip unit="m" />} cursor={{ stroke: C.aquaLt }} />
              <Area type="monotone" dataKey="trade" stroke={C.aqua} strokeWidth={2.4} fill="url(#gT)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-card">
          <div className="p-card-h"><span>Registered businesses</span><span className="p-hs">cumulative</span></div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={MONTHS} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid stroke={C.line} vertical={false} />
              <XAxis dataKey="m" tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} width={38} />
              <Tooltip content={<Tip />} cursor={{ fill: "rgba(224,161,56,.10)" }} />
              <Bar dataKey="biz" fill={C.gold} radius={[4, 4, 0, 0]} maxBarSize={26} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-card p-wide">
          <div className="p-card-h"><span>Citizens onboarded</span><span className="p-hs">cumulative</span></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={MONTHS} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid stroke={C.line} vertical={false} />
              <XAxis dataKey="m" tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} width={44} tickFormatter={(v) => (v / 1000) + "k"} />
              <Tooltip content={<Tip />} cursor={{ stroke: C.aquaLt }} />
              <Line type="monotone" dataKey="cit" stroke={C.ink} strokeWidth={2.6} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ---------- Services ----------
function Services({ svc, setSvc }) {
  if (svc != null) {
    const s = SERVICES[svc];
    const Icon = s.Icon;
    return (
      <div>
        <button className="p-back" onClick={() => setSvc(null)}><ChevronLeft size={16} /> All services</button>
        <div className="p-card p-detail">
          <div className="p-detail-head">
            <span className="p-svc-icon big"><Icon size={26} strokeWidth={2} /></span>
            <div>
              <div className="p-detail-name">{s.name} <PhaseBadge n={s.phase} /></div>
              <div className="p-detail-tag">{s.tag}</div>
            </div>
          </div>
          <div className="p-detail-metrics">
            {s.metrics.map(([l, v], i) => (
              <div key={i} className="p-dm"><div className="p-dm-v">{v}</div><div className="p-dm-l">{l}</div></div>
            ))}
          </div>
          <div className="p-detail-body">
            <div className="p-db"><div className="p-db-h">What it is</div><p>{s.what}</p></div>
            <div className="p-db"><div className="p-db-h">How it works</div><p>{s.how}</p></div>
            <div className="p-db"><div className="p-db-h">What it costs</div><p>{s.cost}</p></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="p-lead">The union's public services, delivered increasingly by accountable AI agents under human supervision. Select any service to drill in.</div>
      <div className="p-svc-grid">
        {SERVICES.map((s, i) => {
          const Icon = s.Icon;
          return (
            <button key={s.id} className="p-svc-card" onClick={() => setSvc(i)}>
              <div className="p-svc-top"><span className="p-svc-icon"><Icon size={20} strokeWidth={2} /></span><PhaseBadge n={s.phase} /></div>
              <div className="p-svc-name">{s.name}</div>
              <div className="p-svc-tag">{s.tag}</div>
              <div className="p-svc-more">Open →</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Constitution ----------
function Constitution() {
  return (
    <div>
      <div className="p-lead">The rules the union runs on. Every value is a default that citizens can change by vote.</div>
      <div className="p-card-h solo"><span>Founding principles</span></div>
      <div className="p-principles">
        {PRINCIPLES.map(([t, b], i) => (
          <div key={i} className="p-principle"><div className="p-pr-t">{t}</div><div className="p-pr-b">{b}</div></div>
        ))}
      </div>

      <div className="p-card-h solo top"><span>Parameters at a glance</span><span className="p-hs">changeable by vote</span></div>
      <div className="p-card">
        <table className="p-table">
          <thead><tr><th>Parameter</th><th>Default value</th></tr></thead>
          <tbody>
            {PARAMS.map(([p, v], i) => (<tr key={i}><td>{p}</td><td className="p-mono">{v}</td></tr>))}
          </tbody>
        </table>
      </div>

      <div className="p-grid2 top">
        <div className="p-card">
          <div className="p-card-h"><span>How a vote works</span></div>
          <ol className="p-steps">
            <li>Any citizen drafts a proposal.</li>
            <li>It reaches the ballot with 1% of citizens, or 500, whichever is fewer.</li>
            <li>A 7 day window; citizens vote quadratically.</li>
            <li>Valid at 10% quorum. Passes on a majority, or two thirds for constitutional and parameter changes.</li>
            <li>The legal entity and its agents execute the result.</li>
          </ol>
        </div>
        <div className="p-card">
          <div className="p-card-h"><span>How a dispute works</span></div>
          <ol className="p-steps">
            <li>A decision posts and opens a 72 hour challenge window.</li>
            <li>To challenge, post a bond: greater of 25 CCU or 10% of the amount.</li>
            <li>A jury of 7 staked citizens votes within 5 days.</li>
            <li>One appeal to a panel of 15; disputes over 50,000 CCU get an expert arbiter.</li>
            <li>The winner takes the loser's bond.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

// ---------- White Paper ----------
function WhitePaperView() {
  const [open, setOpen] = useState("1");
  return (
    <div>
      <div className="p-wp-hero">
        <div className="p-wp-eyebrow">Founding document · v1.1</div>
        <div className="p-wp-title">The Caribbean Digital Union</div>
        <p className="p-wp-lede">The digital infrastructure for a new Caribbean economy: the first, and most efficient, fully digital economy administered by accountable AI agents. At its centre is one shared currency for the region, the Caribbean Currency Unit, set by a weighted basket of Caribbean currencies rather than a peg to the US dollar.</p>
      </div>
      <div className="p-wp-grid">
        <div className="p-wp-toc">
          {WHITEPAPER.map(([n, t]) => (
            <button key={n} className={"p-wp-tocitem" + (open === n ? " on" : "")} onClick={() => setOpen(n)}>
              <span className="p-wp-num">{n}</span>{t}
            </button>
          ))}
        </div>
        <div className="p-card p-wp-body">
          {WHITEPAPER.filter(([n]) => n === open).map(([n, t, b]) => (
            <div key={n}>
              <div className="p-wp-sectionnum">Section {n}</div>
              <h3 className="p-wp-h">{t}</h3>
              <p className="p-wp-p">{b}</p>
              <div className="p-wp-note">This is a condensed view of the section. The full white paper is the authoritative text.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Capital Market ----------
function Market() {
  return (
    <div>
      <div className="p-lead">Caribbean Capital Market, the union's unified regional exchange. Mockup, illustrative listings and prices.</div>
      <div className="p-grid2">
        <div className="p-card p-idx">
          <div className="p-card-h"><span>Caribbean Union Index (CUX)</span><span className="p-hs">mock</span></div>
          <div className="p-idx-row">
            <div className="p-idx-val">{CUX.level.toLocaleString()}</div>
            <div className="p-idx-chg up">▲ {CUX.pts} ({CUX.chg}%)</div>
          </div>
          <ResponsiveContainer width="100%" height={110}>
            <LineChart data={CUX_SPARK} margin={{ top: 6, right: 4, left: 4, bottom: 0 }}>
              <Line type="monotone" dataKey="v" stroke={C.aqua} strokeWidth={2.2} dot={false} />
              <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
              <Tooltip content={<Tip />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-card">
          <div className="p-card-h"><span>Market at a glance</span><span className="p-hs">mock</span></div>
          <div className="p-mkt-stats">
            <div><div className="p-ms-v">{MKT_CAP}M</div><div className="p-ms-l">Total market cap, CCU</div></div>
            <div><div className="p-ms-v">{LISTINGS.length}</div><div className="p-ms-l">Listed companies</div></div>
            <div><div className="p-ms-v">3.7M</div><div className="p-ms-l">Day volume, CCU</div></div>
            <div><div className="p-ms-v">{BONDS.length}</div><div className="p-ms-l">Union bonds</div></div>
          </div>
          <div className="p-bonds">
            {BONDS.map(([n, y, m], i) => (
              <div key={i} className="p-bond"><span>{n}</span><span className="p-mono" style={{ color: C.gold }}>{y}% · {m}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-card top">
        <div className="p-card-h"><span>Listings</span><span className="p-hs">price in CCU · mock</span></div>
        <table className="p-table">
          <thead><tr><th>Ticker</th><th>Company</th><th>Sector</th><th className="r">Price</th><th className="r">Change</th><th className="r">Mkt cap</th></tr></thead>
          <tbody>
            {LISTINGS.map(([t, n, s, p, c, mc], i) => (
              <tr key={i}>
                <td className="p-mono b">{t}</td><td>{n}</td><td className="p-muted">{s}</td>
                <td className="r p-mono">{p.toFixed(2)}</td>
                <td className={"r p-mono " + (c >= 0 ? "up" : "down")}>{c >= 0 ? "+" : ""}{c.toFixed(1)}%</td>
                <td className="r p-mono">{mc}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------- Treasury ----------
function Treasury() {
  const bal = useCountUp(TREASURY);
  return (
    <div>
      <div className="p-treasury-hero">
        <div>
          <div className="p-th-label">Union treasury balance</div>
          <div className="p-th-val">{nf(Math.round(bal))} <span>CCU</span></div>
          <div className="p-th-sub">Every flow recorded on chain and auditable by any citizen. Administrative spend held under the 10% cap.</div>
        </div>
        <div className="p-th-side">
          <div><div className="p-th-k">This quarter revenue</div><div className="p-th-v up">+{nf(T_REV_TOTAL)}</div></div>
          <div><div className="p-th-k">This quarter spend</div><div className="p-th-v">−{nf(T_SPEND_TOTAL)}</div></div>
          <div><div className="p-th-k">Admin cost ratio</div><div className="p-th-v" style={{ color: C.aqua }}>6.8% / 10%</div></div>
        </div>
      </div>

      <div className="p-grid2">
        <div className="p-card">
          <div className="p-card-h"><span>Revenue by source</span><span className="p-hs">this quarter</span></div>
          <div className="p-budget">
            <ResponsiveContainer width="45%" height={150}>
              <PieChart><Pie data={T_REVENUE} dataKey="1" nameKey="0" cx="50%" cy="50%" innerRadius={38} outerRadius={62} paddingAngle={2} stroke="none">
                {T_REVENUE.map((r, i) => <Cell key={i} fill={r[2]} />)}
              </Pie><Tooltip content={<Tip />} /></PieChart>
            </ResponsiveContainer>
            <div className="p-legend">
              {T_REVENUE.map((r, i) => (
                <div key={i} className="p-lg"><span className="p-sw" style={{ background: r[2] }} /><span className="p-lg-n">{r[0]}</span><span className="p-lg-v p-mono">{nf(r[1])}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-card">
          <div className="p-card-h"><span>Expenditure by category</span><span className="p-hs">this quarter</span></div>
          <div className="p-bars">
            {T_SPEND.map((r, i) => (
              <div key={i} className="p-barrow">
                <span className="p-bar-n">{r[0]}</span>
                <div className="p-bar-track"><div className="p-bar-fill" style={{ width: (r[1] / T_SPEND[0][1] * 100) + "%", background: r[2] }} /></div>
                <span className="p-bar-v p-mono">{nf(r[1])}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-card top">
        <div className="p-card-h"><span>Auditable treasury ledger</span><span className="p-hs">most recent entries</span></div>
        <table className="p-table">
          <thead><tr><th>Date</th><th>Type</th><th>Description</th><th className="r">Amount (CCU)</th><th>Reference</th></tr></thead>
          <tbody>
            {LEDGER.map(([d, ty, desc, amt, ref], i) => (
              <tr key={i}>
                <td className="p-mono p-muted">{d}</td>
                <td><span className={"p-tag " + ty}>{ty === "in" ? "Inflow" : ty === "out" ? "Outflow" : "Reserve"}</span></td>
                <td>{desc}</td>
                <td className={"r p-mono " + (amt >= 0 ? "up" : "down")}>{amt >= 0 ? "+" : ""}{nf(amt)}</td>
                <td className="p-mono p-muted">{ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

.p-root{position:relative;font-family:'IBM Plex Sans',system-ui,sans-serif;background:${C.bg};color:${C.ink};padding:24px;min-height:100%;border-radius:14px;overflow:hidden}
.p-texture{position:absolute;inset:0;pointer-events:none;opacity:.5;background-image:radial-gradient(circle at 85% -10%, rgba(18,165,148,.10), transparent 42%),repeating-radial-gradient(circle at 90% 2%, transparent 0 22px, rgba(8,58,52,.035) 22px 23px)}
.p-root *{box-sizing:border-box}

.p-top{position:relative;display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px;flex-wrap:wrap}
.p-brand{display:flex;align-items:center;gap:12px}
.p-glyph{font-size:26px;color:${C.aqua};line-height:1}
.p-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:19px;letter-spacing:-.02em}
.p-sub{font-size:11.5px;color:${C.mute};letter-spacing:.14em;text-transform:uppercase;margin-top:2px}
.p-live{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600}
.p-dot{width:8px;height:8px;border-radius:50%;background:${C.aqua};animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(18,165,148,.5)}70%{box-shadow:0 0 0 7px rgba(18,165,148,0)}100%{box-shadow:0 0 0 0 rgba(18,165,148,0)}}

.p-tabs{position:relative;display:flex;gap:4px;flex-wrap:wrap;border-bottom:1px solid ${C.line};margin-bottom:20px}
.p-tab{display:inline-flex;align-items:center;gap:7px;font-family:'IBM Plex Sans';font-size:13.5px;font-weight:600;padding:10px 14px;border:0;background:transparent;color:${C.mute};cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px}
.p-tab:hover{color:${C.ink}}
.p-tab.on{color:${C.ink};border-bottom-color:${C.gold}}
.p-tab:focus-visible{outline:2px solid ${C.gold};outline-offset:2px;border-radius:4px}

.p-main{position:relative;min-height:400px;animation:fade .4s ease both}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

.p-context{background:linear-gradient(135deg,${C.ink} 0%,${C.ink2} 100%);color:#CFE7E2;border-radius:12px;padding:14px 18px;font-size:13.5px;margin-bottom:16px}
.p-context b{color:${C.gold};font-weight:600}
.p-lead,.p-treasury-hero .p-th-sub{font-size:13.5px;color:${C.mute};margin-bottom:16px;line-height:1.5;max-width:70ch}

.p-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:12px}
.p-kpis.sec{margin-bottom:18px}
.p-kpi{background:${C.surface};border:1px solid ${C.line};border-radius:12px;padding:15px 16px;box-shadow:0 1px 2px rgba(8,58,52,.04)}
.p-kpi.hero{padding:17px 18px}
.p-kpi-label{display:flex;align-items:center;gap:6px;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:${C.mute}}
.p-kpi-val{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:30px;letter-spacing:-.02em;margin-top:8px;line-height:1}
.p-kpi-val.sm{font-size:24px}
.p-kpi-sub{font-size:12px;color:${C.mute};margin-top:5px}

.p-grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.p-grid2.top,.p-card-h.solo.top,.p-card.top{margin-top:16px}
.p-wide{grid-column:span 2}
.p-card{background:${C.surface};border:1px solid ${C.line};border-radius:12px;padding:16px 17px;box-shadow:0 1px 2px rgba(8,58,52,.04)}
.p-card-h{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px}
.p-card-h span:first-child{font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:14.5px}
.p-card-h.solo{margin-bottom:12px}
.p-hs{font-size:11px;color:${C.mute};letter-spacing:.04em}

/* tooltip */
.p-tip{background:${C.ink};color:#fff;border-radius:8px;padding:7px 10px;box-shadow:0 8px 20px -8px rgba(0,0,0,.4)}
.p-tip-l{font-size:11px;color:${C.aquaLt};margin-bottom:2px}
.p-tip-v{font-family:'IBM Plex Mono';font-size:13px;font-weight:600}

/* badges */
.p-badge{font-family:'IBM Plex Mono';font-size:10.5px;font-weight:600;padding:3px 8px;border-radius:20px;white-space:nowrap}
.p-badge.ph1{background:rgba(18,165,148,.14);color:${C.ink}}
.p-badge.ph2{background:rgba(224,161,56,.18);color:#8a5a12}
.p-badge.ph3{background:rgba(8,58,52,.10);color:${C.ink}}
.p-badge.ph4{background:rgba(93,111,107,.14);color:${C.mute}}

/* services */
.p-svc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.p-svc-card{text-align:left;background:${C.surface};border:1px solid ${C.line};border-radius:12px;padding:16px;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease;box-shadow:0 1px 2px rgba(8,58,52,.04)}
.p-svc-card:hover{transform:translateY(-2px);box-shadow:0 10px 24px -14px rgba(8,58,52,.4);border-color:${C.aquaLt}}
.p-svc-card:focus-visible{outline:2px solid ${C.gold};outline-offset:2px}
.p-svc-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.p-svc-icon{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:rgba(18,165,148,.12);color:${C.ink}}
.p-svc-icon.big{width:52px;height:52px;border-radius:14px}
.p-svc-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:15px}
.p-svc-tag{font-size:12.5px;color:${C.mute};margin-top:5px;line-height:1.4;min-height:34px}
.p-svc-more{font-size:12px;font-weight:600;color:${C.aqua};margin-top:10px}

.p-back{display:inline-flex;align-items:center;gap:4px;background:none;border:0;color:${C.mute};font-family:'IBM Plex Sans';font-size:13px;font-weight:600;cursor:pointer;padding:6px 0;margin-bottom:8px}
.p-back:hover{color:${C.ink}}
.p-detail-head{display:flex;align-items:center;gap:16px;margin-bottom:16px}
.p-detail-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:21px;display:flex;align-items:center;gap:10px}
.p-detail-tag{font-size:13.5px;color:${C.mute};margin-top:3px}
.p-detail-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:14px 0;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};margin-bottom:16px}
.p-dm-v{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:20px;color:${C.aqua}}
.p-dm-l{font-size:11.5px;color:${C.mute};margin-top:3px}
.p-detail-body{display:grid;gap:14px}
.p-db-h{font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:${C.gold};font-weight:600;margin-bottom:4px}
.p-db p{margin:0;font-size:13.5px;line-height:1.6;color:${C.ink}}

/* principles + tables */
.p-principles{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:6px}
.p-principle{background:${C.surface};border:1px solid ${C.line};border-radius:12px;padding:15px 16px}
.p-pr-t{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:14.5px;color:${C.ink}}
.p-pr-b{font-size:12.5px;color:${C.mute};margin-top:6px;line-height:1.5}
.p-table{width:100%;border-collapse:collapse;font-size:13px}
.p-table th{text-align:left;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:${C.mute};font-weight:600;padding:8px 10px;border-bottom:1px solid ${C.line}}
.p-table th.r,.p-table td.r{text-align:right}
.p-table td{padding:9px 10px;border-bottom:1px solid ${C.line}}
.p-table tr:last-child td{border-bottom:0}
.p-mono{font-family:'IBM Plex Mono';font-size:12.5px}
.p-mono.b{font-weight:600}
.p-muted{color:${C.mute}}
.up{color:${C.aqua}}
.down{color:${C.coral}}
.p-steps{margin:0;padding-left:20px;font-size:13px;line-height:1.7;color:${C.ink}}
.p-steps li{margin-bottom:4px}

/* white paper */
.p-wp-hero{background:linear-gradient(135deg,${C.ink} 0%,${C.ink2} 100%);color:#fff;border-radius:14px;padding:24px 26px;margin-bottom:16px;box-shadow:0 16px 36px -22px rgba(8,58,52,.6)}
.p-wp-eyebrow{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${C.aquaLt}}
.p-wp-title{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:30px;letter-spacing:-.02em;margin:8px 0 10px}
.p-wp-lede{font-size:14px;line-height:1.65;color:#C5DED9;max-width:64ch;margin:0}
.p-wp-grid{display:grid;grid-template-columns:260px 1fr;gap:14px}
.p-wp-toc{display:flex;flex-direction:column;gap:2px;max-height:520px;overflow:auto}
.p-wp-tocitem{display:flex;gap:9px;align-items:baseline;text-align:left;background:none;border:0;border-radius:8px;padding:9px 10px;font-family:'IBM Plex Sans';font-size:12.5px;color:${C.mute};cursor:pointer;line-height:1.35}
.p-wp-tocitem:hover{background:rgba(8,58,52,.05);color:${C.ink}}
.p-wp-tocitem.on{background:${C.ink};color:#fff}
.p-wp-num{font-family:'IBM Plex Mono';font-size:11px;opacity:.7}
.p-wp-body{min-height:300px}
.p-wp-sectionnum{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${C.gold};font-weight:600}
.p-wp-h{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:22px;margin:6px 0 12px;letter-spacing:-.01em}
.p-wp-p{font-size:14px;line-height:1.7;color:${C.ink};margin:0 0 16px}
.p-wp-note{font-size:12px;color:${C.mute};padding-top:12px;border-top:1px solid ${C.line}}

/* market */
.p-idx-row{display:flex;align-items:baseline;gap:14px;margin-bottom:6px}
.p-idx-val{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:34px;letter-spacing:-.02em}
.p-idx-chg{font-family:'IBM Plex Mono';font-size:13px;font-weight:600}
.p-mkt-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.p-ms-v{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:20px}
.p-ms-l{font-size:11.5px;color:${C.mute};margin-top:2px}
.p-bonds{border-top:1px solid ${C.line};padding-top:10px;display:grid;gap:7px}
.p-bond{display:flex;justify-content:space-between;font-size:12.5px}

/* treasury */
.p-treasury-hero{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;background:linear-gradient(135deg,${C.ink} 0%,${C.ink2} 100%);color:#fff;border-radius:14px;padding:22px 24px;margin-bottom:16px;box-shadow:0 16px 36px -22px rgba(8,58,52,.6)}
.p-th-label{font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:${C.aquaLt}}
.p-th-val{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5vw,46px);letter-spacing:-.03em;margin:6px 0}
.p-th-val span{font-size:20px;color:${C.aquaLt};font-weight:600}
.p-treasury-hero .p-th-sub{color:#B7D2CD;margin:0;max-width:52ch}
.p-th-side{display:flex;flex-direction:column;gap:12px;justify-content:center;min-width:180px}
.p-th-k{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8FB0AB}
.p-th-v{font-family:'IBM Plex Mono';font-weight:600;font-size:18px;color:#fff}
.p-budget{display:flex;align-items:center;gap:8px}
.p-legend{flex:1;display:flex;flex-direction:column;gap:8px}
.p-lg{display:flex;align-items:center;gap:8px;font-size:12.5px}
.p-sw{width:11px;height:11px;border-radius:3px;flex-shrink:0}
.p-lg-n{flex:1;color:${C.ink}}
.p-lg-v{color:${C.mute}}
.p-bars{display:flex;flex-direction:column;gap:11px}
.p-barrow{display:grid;grid-template-columns:1fr 90px 70px;align-items:center;gap:10px}
.p-bar-n{font-size:12.5px;color:${C.ink}}
.p-bar-track{height:8px;background:${C.line};border-radius:5px;overflow:hidden}
.p-bar-fill{height:100%;border-radius:5px}
.p-bar-v{text-align:right;color:${C.mute}}
.p-tag{font-family:'IBM Plex Mono';font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px}
.p-tag.in{background:rgba(18,165,148,.14);color:#0a6b60}
.p-tag.out{background:rgba(217,97,75,.14);color:#a63c28}
.p-tag.res{background:rgba(8,58,52,.10);color:${C.ink}}

.p-foot{position:relative;margin-top:20px;padding-top:14px;border-top:1px solid ${C.line};font-size:11.5px;color:${C.mute}}
.p-foot b{color:${C.ink}}

@media (max-width:860px){
  .p-kpis,.p-svc-grid,.p-principles{grid-template-columns:repeat(2,1fr)}
  .p-grid2{grid-template-columns:1fr}
  .p-wide{grid-column:span 1}
  .p-wp-grid{grid-template-columns:1fr}
  .p-wp-toc{flex-direction:row;flex-wrap:wrap;max-height:none}
  .p-detail-metrics{grid-template-columns:1fr}
}
@media (max-width:480px){
  .p-kpis,.p-svc-grid,.p-principles{grid-template-columns:1fr}
  .p-barrow{grid-template-columns:1fr 60px 60px}
}
@media (prefers-reduced-motion:reduce){.p-main,.p-dot,.p-svc-card{animation:none;transition:none}}
`;
