/* eslint-disable react/prop-types */
/* Minha Arara — Icons.
   Wrap commonly-used Lucide-style SVGs as React components.
   All inherit color via currentColor; default stroke 1.8. */

const iconBase = {
  width: 20, height: 20, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor", strokeWidth: 1.8,
  strokeLinecap: "round", strokeLinejoin: "round",
};

function makeIcon(paths) {
  return ({ size = 20, strokeWidth = 1.8, style, ...rest }) => (
    <svg {...iconBase} {...rest} width={size} height={size} strokeWidth={strokeWidth} style={style}>
      {paths}
    </svg>
  );
}

const IconHanger = makeIcon(<>
  <path d="M3 9h18l-2 12H5L3 9z"/>
  <path d="M8 9V6a4 4 0 0 1 8 0v3"/>
</>);
const IconLooks = makeIcon(<>
  <circle cx="12" cy="12" r="9"/>
  <path d="M3 12h18"/>
  <path d="M12 3a14 14 0 0 1 0 18"/>
  <path d="M12 3a14 14 0 0 0 0 18"/>
</>);
const IconBag = makeIcon(<>
  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
  <path d="M3 6h18"/>
  <path d="M16 10a4 4 0 0 1-8 0"/>
</>);
const IconChart = makeIcon(<>
  <path d="M3 3v18h18"/>
  <path d="m7 16 4-4 4 4 6-6"/>
</>);
const IconDashboard = makeIcon(<>
  <rect x="3" y="3" width="7" height="7" rx="1"/>
  <rect x="14" y="3" width="7" height="7" rx="1"/>
  <rect x="3" y="14" width="7" height="7" rx="1"/>
  <rect x="14" y="14" width="7" height="7" rx="1"/>
</>);
const IconSearch = makeIcon(<>
  <circle cx="11" cy="11" r="7"/>
  <path d="m21 21-4.3-4.3"/>
</>);
const IconPlus = makeIcon(<><path d="M5 12h14"/><path d="M12 5v14"/></>);
const IconCheck = makeIcon(<path d="M20 6 9 17l-5-5"/>);
const IconHeart = makeIcon(<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>);
const IconStar = makeIcon(<path d="m12 2 3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z"/>);
const IconCalendar = makeIcon(<>
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
</>);
const IconLeaf = makeIcon(<>
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8 0 5.5-4.8 10-10 10z"/>
  <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
</>);
const IconUser = makeIcon(<>
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 22a8 8 0 0 1 16 0"/>
</>);
const IconCoin = makeIcon(<>
  <circle cx="12" cy="12" r="10"/>
  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
  <path d="M12 6v2"/><path d="M12 16v2"/>
</>);
const IconFilter = makeIcon(<>
  <path d="M3 6h18"/><path d="M7 12h10"/><path d="M11 18h2"/>
</>);
const IconUpload = makeIcon(<>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="17 8 12 3 7 8"/>
  <line x1="12" y1="3" x2="12" y2="15"/>
</>);
const IconCamera = makeIcon(<>
  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
  <circle cx="12" cy="13" r="3"/>
</>);
const IconBox = makeIcon(<>
  <path d="m21 16-9 5-9-5V8l9-5 9 5v8z"/>
  <path d="M3.3 7 12 12l8.7-5"/>
  <path d="M12 22V12"/>
</>);
const IconBell = makeIcon(<>
  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
</>);
const IconArrowRight = makeIcon(<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>);
const IconChevronDown = makeIcon(<path d="m6 9 6 6 6-6"/>);
const IconClose = makeIcon(<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>);
const IconMore = makeIcon(<>
  <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
</>);
const IconList = makeIcon(<>
  <line x1="8" y1="6" x2="21" y2="6"/>
  <line x1="8" y1="12" x2="21" y2="12"/>
  <line x1="8" y1="18" x2="21" y2="18"/>
  <line x1="3" y1="6" x2="3.01" y2="6"/>
  <line x1="3" y1="12" x2="3.01" y2="12"/>
  <line x1="3" y1="18" x2="3.01" y2="18"/>
</>);
const IconSettings = makeIcon(<>
  <path d="M12 2a2 2 0 0 1 2 2v.13a8 8 0 0 1 3.05 1.27l.09-.09a2 2 0 0 1 2.82 2.82l-.09.09A8 8 0 0 1 21.87 10H22a2 2 0 0 1 0 4h-.13a8 8 0 0 1-1 3.05l.09.09a2 2 0 0 1-2.82 2.82l-.09-.09A8 8 0 0 1 14 21.87V22a2 2 0 0 1-4 0v-.13a8 8 0 0 1-3.05-1.27l-.09.09a2 2 0 0 1-2.82-2.82l.09-.09A8 8 0 0 1 2.13 14H2a2 2 0 0 1 0-4h.13a8 8 0 0 1 1-3.05l-.09-.09a2.001 2.001 0 0 1 2.82-2.82l.09.09A8 8 0 0 1 10 2.13V2a2 2 0 0 1 2-2z"/>
  <circle cx="12" cy="12" r="3"/>
</>);
const IconHelp = makeIcon(<>
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <path d="M12 17h.01"/>
</>);
const IconTrend = makeIcon(<>
  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
  <polyline points="16 7 22 7 22 13"/>
</>);

Object.assign(window, {
  IconHanger, IconLooks, IconBag, IconChart, IconDashboard, IconSearch,
  IconPlus, IconCheck, IconHeart, IconStar, IconCalendar, IconLeaf, IconUser,
  IconCoin, IconFilter, IconUpload, IconCamera, IconBox, IconBell,
  IconArrowRight, IconChevronDown, IconClose, IconMore, IconList,
  IconSettings, IconHelp, IconTrend,
});
