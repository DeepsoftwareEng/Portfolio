/*
 * English content. Same structure as content.vi.js.
 * Empty fields ('' or []) are hidden in the UI. Wrap text in `backticks` to render it as code.
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  PW.content = PW.content || {};

  PW.content.en = {
    meta: {
      title: 'Nguyễn Phúc Hưng — Full-Stack Developer',
      description:
        'Portfolio of Nguyễn Phúc Hưng — Full-Stack Developer (.NET & Angular). A 6-round season: experience, projects and skills.',
    },

    ui: {
      skip: 'Skip to content',
      langLabel: 'Language',
      driverEyebrow: 'Driver profile · Hanoi, Vietnam',
      ctaFeature: 'Watch the Feature Race',
      telemetry: 'Telemetry',
      season: 'Season calendar',
      seasonSub: '6 rounds · pick a round to open its circuit',
      colRound: 'Rnd',
      colRace: 'Grand Prix',
      colTurns: 'Turns',
      colPeriod: 'Period',
      colStatus: 'Status',
      turnsUnit: 'turns',
      viewedOf: '{n}/{total} viewed',
      feature: 'Feature race',
      status: {
        grid: 'On the grid',
        live: 'Live',
        finished: 'Finished',
        garage: 'Garage',
      },
      back: 'Season calendar',
      roundOf: 'Round {n} / {total}',
      prevRace: 'Previous round',
      nextRace: 'Next round',
      prevTurn: 'Previous turn',
      nextTurn: 'Next turn',
      checkered: 'Chequered flag · back to calendar',
      trackLabel: '{name} circuit map',
      turnListLabel: 'Turns',
      turnAria: 'Turn {n}: {title}',
      lap: 'Turn',
      keyboardHint: 'Tip: use the ← → keys to change turns.',
      current: 'Current',
      visited: 'Viewed',
      notVisited: 'Not viewed',
      phases: {
        braking: 'Problem',
        apex: 'Solution',
        exit: 'Outcome',
      },
      liveAnnounce: 'Turn {n} of {total}: {title}',
      brief: 'Race brief',
      problem: 'The problem',
      solution: 'Modules',
      architecture: 'System architecture',
      results: 'Results',
      links: 'Links',
      redFlagTitle: 'Red flag',
      redFlagText: 'This stretch of track is not on the calendar.',
      redFlagCta: 'Back to the calendar',
      introCaption: 'Lights out',
      skipIntro: 'Skip',
      footer: '© 2026 Nguyễn Phúc Hưng · Motorsport-inspired design, not affiliated with any racing series.',
    },

    driver: {
      name: 'Nguyễn Phúc Hưng',
      role: 'Full-Stack Developer · .NET & Angular',
      summary:
        'Full-Stack Developer with 2 years of experience building complex business software: e-government, document digitisation and inventory management. Strong in ASP.NET and Angular, tuning SQL Server / MongoDB, and taking systems all the way to production myself.',
      email: 'deepit2507@gmail.com',
      linkedin: 'https://www.linkedin.com/in/itsdeep02',
      telemetry: [
        { value: '2+', label: 'years as a full-stack developer' },
        { value: '~130', label: 'REST endpoints in the freelance project' },
        { value: '131', label: 'unit tests for the Documents module' },
        { value: '~190', label: 'commits, built solo' },
      ],
    },

    races: {
      r01: {
        name: 'Driver Profile',
        short: 'About',
        label: 'Driver profile',
        period: '2024 – present',
        summary: "Who's behind the wheel: role, strengths and how to get in touch.",
        chips: ['ASP.NET', 'Angular', 'SQL Server', 'MongoDB'],
        turns: [
          {
            title: 'Summary',
            braking:
              'Businesses and government agencies need software that follows their real processes and runs reliably on their own infrastructure.',
            apex: [
              '2 years as a full-stack developer with ASP.NET and Angular on e-government and document digitisation systems.',
              'I cover the full feature lifecycle: understanding the domain, database design, APIs, UI, deployment and troubleshooting.',
              'Alongside: a solo freelance project — an inventory, workflow and document system for a steel manufacturer, running in production.',
            ],
            exit: 'Give me a business problem and I will take it to production.',
            chips: [],
          },
          {
            title: 'Strengths',
            braking:
              'Business software usually breaks in three places: misunderstood processes, slow queries on large data, and bugs that only appear on the customer’s server.',
            apex: [
              'Domain: turning SRS documents and direct user conversations into clear workflows and permissions.',
              'Data: stored procedures, indexes and aggregation pipelines for search and paging over large volumes.',
              'Operations: on-premise deployment, troubleshooting and performance tuning in production.',
              'Document automation: a hand-written Word/Excel template engine on top of OpenXml and ClosedXML.',
            ],
            exit: '',
            chips: ['Domain analysis', 'Database tuning', 'On-premise delivery', 'Document generation'],
          },
          {
            title: 'Contact',
            braking: '',
            apex: [],
            exit: 'Open to conversations about Full-Stack / .NET / Angular roles.',
            links: [
              { kind: 'email', label: 'deepit2507@gmail.com', href: 'mailto:deepit2507@gmail.com' },
              { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/itsdeep02' },
            ],
            labels: { exit: 'Pit radio' },
          },
        ],
      },

      r02: {
        name: 'VSD GP',
        short: 'Experience',
        label: 'Full-time · VSD Vietnam Technology JSC',
        period: '2024 – present',
        summary:
          'Full-Stack Developer on administrative software (e-government, document digitisation) for government agencies.',
        chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS', 'Angular Material', 'SQL Server', 'MongoDB'],
        turns: [
          {
            title: 'Applications & business logic',
            braking:
              'Administrative workflows have many steps and conditions, and must match the BA’s specification down to the detail.',
            apex: [
              'Built backend APIs in ASP.NET Framework for complex administrative workflows.',
              'Built Angular 12 interfaces with TailwindCSS and Angular Material, closely following the SRS.',
            ],
            exit: 'UI and APIs that follow the specified business process.',
            chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS'],
          },
          {
            title: 'Database design & tuning',
            braking: 'Case data keeps growing; search and paging get slow when the ORM generates every query.',
            apex: [
              'Designed database schemas and wrote stored procedures on SQL Server.',
              'Built MongoDB aggregation pipelines for large-volume retrieval and paging.',
            ],
            exit: 'Search and reporting queries stay stable as case volume grows.',
            chips: ['SQL Server', 'Stored procedures', 'MongoDB aggregation'],
          },
          {
            title: 'On-site deployment',
            braking:
              'The system runs on the customer’s own servers (on-premise): a different environment from dev, and incidents must be fixed on the spot.',
            apex: [
              'Deployed the system directly on customer servers.',
              'Handled configuration, troubleshooting and performance tuning in production.',
            ],
            exit: 'The system runs on the customer’s real infrastructure.',
            chips: ['On-premise', 'Troubleshooting', 'Performance tuning'],
          },
        ],
      },

      r03: {
        name: 'Bailiff Registry GP',
        short: 'Project at VSD',
        label: 'Full-Stack Developer',
        period: '2024 – present',
        summary:
          'A national database for the organisation and activities of bailiffs — managing the full lifecycle of official records (vi bằng) and the judgment-enforcement process for a government agency.',
        chips: ['ASP.NET Framework', 'Angular 12', 'SQL Server'],
        turns: [
          {
            title: 'Core workflows',
            braking: 'Records pass through several levels of review, each with its own rules.',
            apex: [
              'Designed Angular 12 forms and ASP.NET APIs for the core modules: record contract management, enforcement eligibility verification, and enforcement organisation.',
              'Implemented multi-level record approval logic.',
            ],
            exit: 'Core modules covering the whole record lifecycle.',
            chips: ['Angular 12', 'ASP.NET', 'Multi-level approval'],
          },
          {
            title: 'Document export',
            braking:
              'Complex administrative forms must match government document standards and export to several formats.',
            apex: ['Dynamic data binding into complex administrative templates.', 'Export to Word, PDF and Excel.'],
            exit: 'Exported documents match the government document standard.',
            chips: ['Word', 'PDF', 'Excel'],
          },
          {
            title: 'Dashboard & search',
            braking: 'A real-time statistics dashboard easily chokes when loading large numbers of records.',
            apex: [
              'Multi-dimensional search filters for registers and business documents.',
              'Optimised the SQL Server queries behind the dashboard.',
            ],
            exit: 'The real-time dashboard stays responsive under large record volumes.',
            chips: ['SQL Server', 'Query tuning'],
          },
        ],
      },

      r04: {
        name: 'Steel GP',
        short: 'Freelance project',
        label: 'Solo full-stack',
        period: '06/2024 – present',
        summary:
          'An internal web system for inventory, workflow and project documents at a steel manufacturing / fabrication company. Built entirely solo: domain analysis, database design, backend, frontend, UI/UX, testing and deployment. In production, used on office PCs and on phones in the workshop.',
        chips: [
          'Angular 14',
          'ASP.NET Core 7',
          'EF Core 7',
          'SQL Server',
          'Redis',
          'SignalR',
          'OpenXml',
          'ClosedXML',
          'ZXing',
        ],
        brief: {
          problem: [
            'No real-time stock levels; handwritten stock movements were error-prone; no warning before items ran out.',
            'Requests, quotes, POs, deliveries and returns were scattered across many Excel files.',
            'Every construction project needed dozens of Word/Excel documents with repeated information that drifted out of sync.',
            'Drawings and PDF attachments were scattered and hard to find.',
          ],
          modules: [
            'Products & QR codes',
            'Stock in / out by scanning',
            'Work tracking · Quotes · Materials',
            'Documents: automatic generation',
            'File management',
            'Dashboard & reports',
            'Real-time notifications',
            'Admin & dynamic permissions',
          ],
          telemetry: [
            { value: '~190', label: 'commits across 2 repos' },
            { value: '~130', label: 'REST endpoints' },
            { value: '21', label: 'controllers' },
            { value: '26', label: 'repositories' },
            { value: '131', label: 'unit tests (xUnit)' },
          ],
          architecture: [
            {
              name: 'Angular 14 SPA',
              items: [
                'Lazy-loaded module per feature area',
                'AuthGuard + MenuGuard · `*appCan` directive',
                'SignalR client · ZXing · SheetJS · ApexCharts',
              ],
            },
            {
              link: 'REST (JWT) · WebSocket (SignalR)',
              name: 'ASP.NET Core 7 Web API',
              items: [
                '21 controllers · `[CanAction]` filter · NotificationHub',
                '`TemplateEngineFactory` → Word / Excel engines',
                '26 repositories · Unit of Work',
              ],
            },
            {
              link: 'EF Core · StackExchange.Redis · File I/O',
              name: 'Storage',
              items: ['SQL Server (EF Core + stored procedures)', 'Redis cache (fail-safe)', 'File storage (media)'],
            },
          ],
          results: [],
          links: [],
        },
        turns: [
          {
            title: 'Word/Excel document engine',
            braking:
              'Each construction project needs dozens of acceptance and payment documents with repeated information. Writing them by hand is slow, and details drift between documents.',
            apex: [
              'Users upload .docx / .xlsx templates containing `#keyword#` placeholders; the system scans them and suggests the matching data fields.',
              'Word (OpenXml SDK): replaces keywords that Word has split across several runs by working on the concatenated paragraph text, then mapping positions back to each Text element.',
              'Signer lists of varying length → clone paragraphs (Word) or insert and copy template rows (Excel), keeping the template’s formatting.',
              '`#banghangmucN#` renders a whole dynamic table: percentage column widths, grouped headers, header rows repeated across pages; output is checked with `OpenXmlValidator`.',
              'Excel (ClosedXML): writes real numbers / dates so formulas still calculate; exports a full document set as .zip with an index, logging failed documents to `loi.txt`.',
            ],
            exit: 'Enter the data once, generate the whole document set. `ITemplateEngine` + `TemplateEngineFactory` (Strategy / Factory) make new formats pluggable.',
            chips: ['OpenXml SDK', 'ClosedXML', 'Strategy pattern', 'xUnit'],
          },
          {
            title: 'QR stock in / out',
            braking:
              'Handwritten stock movements were error-prone, nobody knew the real stock level, and nobody was warned when items ran low.',
            apex: [
              'Stock-in / stock-out screens use the phone camera (ZXing — QR and barcodes) or a handheld scanner.',
              'Two modes: scan one at a time (+1 / −1) or build a multi-item slip with quantities.',
              'Blocks negative stock; when stock drops below `WarnAmount`, a notification is stored and pushed in real time to every client via SignalR.',
              'Generates QR codes per product or in bulk, printed with the product name (QRCoder).',
            ],
            exit: 'Storekeepers work right on the shop floor with a phone; stock and alerts update instantly.',
            chips: ['ZXing', 'QRCoder', 'SignalR'],
          },
          {
            title: '3-layer dynamic permissions',
            braking:
              'Each department may only see and do certain things; permissions change often, and users cannot be forced to log out.',
            apex: [
              'A Group × Menu × Action-code matrix (THEM, SUA, XOA, XUAT_EXCEL…); one account can belong to several groups, with permissions merged.',
              'Backend: a `[CanAction("XOA@/product")]` attribute (IAsyncActionFilter) guards APIs by code@route.',
              'Frontend: `MenuGuard` protects routes, and a `*appCan="\'XOA\'"` structural directive shows / hides individual buttons; the sidebar is generated from permissions.',
              'When permissions change, a `MenuChanged` SignalR event makes every client reload its menu — no F5 needed.',
              'Core admin menus are locked so an administrator cannot lock themselves out.',
            ],
            exit: 'Permissions down to the button level, consistent across frontend and backend, updated in real time.',
            chips: ['ASP.NET Identity', 'JWT + refresh token', 'Angular directive', 'SignalR'],
          },
          {
            title: 'Quote import from Excel',
            braking:
              'Every customer sends quotes in a different Excel layout, and the item code is hidden inside a QR image pasted into the file.',
            apex: [
              'The frontend reads the sheet list with SheetJS so the user can choose; each sheet becomes one quote.',
              '`BaoGiaExcelReader` finds the header row within the first 30 rows using normalised column names (many variants of "Product name", "Qty").',
              'Extracts the quote date with a regex for the Vietnamese "day … month … year …" pattern.',
              'Decodes QR images embedded in the Excel file with ZXing.Net to get the item code and link it to the right work-tracking record.',
            ],
            exit: 'Quotes from many different templates import cleanly; errors are reported per sheet.',
            chips: ['SheetJS', 'ZXing.Net', 'Regex'],
          },
          {
            title: 'Cost formula parser',
            braking:
              'Users define their own formulas for additional costs. Using `eval` would open the door to injection.',
            apex: [
              'A hand-written tokenizer + recursive descent parser — no `eval`.',
              'Variables `TONG` (subtotal), `TREN` (row above), `X` (entered value); supports + − × ÷, postfix %, parentheses and negative numbers.',
              'Limits on expression length and depth, error messages in Vietnamese, and an API to validate a formula before saving.',
              'Handles Vietnamese number formatting (`1.250.000,5`) and spells out amounts in Vietnamese words.',
            ],
            exit: 'Flexible formulas for users without trading away security.',
            chips: ['Recursive descent', 'Tokenizer', 'Security'],
          },
          {
            title: 'UI/UX for the workshop',
            braking:
              'Users are machine-shop workers: many are older, on mid-range Android phones, in glare, with oily or gloved hands and patchy Wi-Fi.',
            apex: [
              'UI/UX guidelines: large touch targets, appropriate contrast, confirmation for destructive actions.',
              'Audited the old UI: 5 overlapping CSS layers, 159 `!important`s, 25 font sizes, 3 grey palettes → consolidated.',
              'The "Xưởng Dịu" (Calm Workshop) design system: steel blue + soft amber, a 6-step type scale, `ws-` CSS tokens, `tabular-nums` figures like a stock slip.',
              'Tables on desktop, cards on mobile; paste straight from Excel (hand-written TSV parser) and keyboard navigation in tables.',
            ],
            exit: 'An interface that works on the shop floor, with a user guide for end users.',
            chips: ['Design system', 'TailwindCSS', 'Angular Material'],
          },
          {
            title: 'Process & testing',
            braking: 'Working solo on a live system: every change has to be safe and justified.',
            apex: [
              'Design docs before code (the Documents module spec is ~470 lines): requirements, assumptions confirmed with users, data model, API, edge cases.',
              'A Decision Log: every decision records the alternatives and the reasoning.',
              '131 unit tests (xUnit, 26 files) for the Documents module: split runs, merged cells, table-style signatures, totals rows…; repositories tested on EF Core InMemory.',
              'Worked directly with end users, iterating on their feedback.',
            ],
            exit: 'The most complex module has a test safety net for every change.',
            chips: ['xUnit', 'EF Core InMemory', 'Decision Log'],
          },
          {
            title: 'Performance & resilience',
            braking:
              'Search over large data has to be fast, and an unstable Redis must not take the whole system down.',
            apex: [
              'Stored procedures for search / paging (`Proc_SearchProducts`), EF Core for CRUD.',
              'Product details cached in Redis, invalidated on update / delete.',
              'Fail-safe Redis: short timeouts, `AbortOnConnectFail=false`, `Try*` extensions → automatic fallback to the database.',
              'Fixed corrupted .docx / .xlsx exports by pinning `System.IO.Packaging` 8.0.1.',
            ],
            exit: 'The system keeps serving when Redis is unavailable.',
            chips: ['Redis', 'Stored procedures', 'EF Core'],
          },
        ],
      },

      r05: {
        name: 'HaUI GP',
        short: 'Education',
        label: 'Hanoi University of Industry',
        period: '2020 – 2024',
        summary: 'Bachelor of Software Engineering, Hanoi University of Industry.',
        chips: ['Software Engineering'],
        turns: [
          {
            title: 'Software Engineering',
            braking: '',
            apex: ['Data Structures & Algorithms.', 'Database Design.', 'Object-Oriented Programming (OOP).'],
            exit: 'Bachelor of Software Engineering (2020 – 2024).',
            chips: [],
            labels: { apex: 'Core courses' },
          },
          {
            title: 'Face-recognition attendance',
            braking: 'Manual attendance is slow and easy to cheat.',
            apex: [
              'Led the team building a real-time, automatic attendance app based on face recognition.',
              'Built with C# WPF and Emgu CV.',
            ],
            exit: 'Highlight project of my degree, and my first experience leading a team.',
            chips: ['C#', 'WPF', 'Emgu CV'],
          },
        ],
      },

      r06: {
        name: 'Pit Garage',
        short: 'Skills',
        label: 'Toolkit',
        period: '',
        summary: "What's in the garage — all of it used on real projects.",
        chips: [],
        turns: [
          {
            title: 'Frontend',
            braking: '',
            apex: [
              'Angular 12 / 14 (TypeScript, RxJS): lazy loading, guards, interceptors, structural directives.',
              'TailwindCSS, Angular Material, DevExtreme.',
              'ApexCharts, SheetJS, ZXing scanner, SignalR client.',
            ],
            exit: '',
            chips: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS', 'Angular Material', 'DevExtreme'],
            labels: { apex: 'In use' },
          },
          {
            title: 'Backend',
            braking: '',
            apex: [
              'ASP.NET Framework and ASP.NET Core 7 Web API (C#).',
              'Entity Framework Core 7, ASP.NET Identity + JWT, SignalR.',
              'OpenXml SDK, ClosedXML, QRCoder, ZXing.Net.',
            ],
            exit: '',
            chips: ['C#', 'ASP.NET Core', 'EF Core', 'SignalR', 'JWT'],
            labels: { apex: 'In use' },
          },
          {
            title: 'Databases',
            braking: '',
            apex: [
              'SQL Server: schema design, stored procedures, indexes.',
              'MongoDB: aggregation pipelines.',
              'Redis: caching with a fail-safe fallback.',
            ],
            exit: '',
            chips: ['SQL Server', 'MongoDB', 'Redis'],
            labels: { apex: 'In use' },
          },
          {
            title: 'Tools & languages',
            braking: '',
            apex: [
              'Git, xUnit, Swagger / OpenAPI, Adobe Photoshop, Slack.',
              'Vietnamese (native), English (intermediate).',
            ],
            exit: '',
            chips: ['Git', 'xUnit', 'Swagger'],
            labels: { apex: 'In use' },
          },
        ],
      },
    },
  };
})();
