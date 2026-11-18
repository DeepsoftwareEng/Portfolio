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
        'Portfolio of Nguyễn Phúc Hưng — Full-Stack Developer (.NET & Angular). A 7-round season: experience, projects and skills.',
    },

    ui: {
      skip: 'Skip to content',
      langLabel: 'Language',
      driverEyebrow: 'Driver profile · Hanoi, Vietnam',
      ctaFeature: 'Watch the Feature Race',
      telemetry: 'Telemetry',
      season: 'Season calendar',
      seasonSub: '7 rounds · pick a round to open its circuit',
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
      garageHint: 'Tip: use the ← → keys to switch departments.',
      part: 'Department',
      partsUnit: 'parts',
      prevPart: 'Previous department',
      nextPart: 'Next department',
      partListLabel: 'Car departments',
      carLabel: '{name} car layout',
      installed: 'Installed',
      usedIn: 'Used in',
      partAnnounce: 'Department {n} of {total}: {title}',
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
        'Full-Stack Developer with 2 years of experience building complex business software: e-government, document digitisation, citizen reception and inventory management. Strong in ASP.NET and Angular, tuning SQL Server / MongoDB, and taking systems all the way to production myself.',
      email: 'deepit2507@gmail.com',
      linkedin: 'https://www.linkedin.com/in/itsdeep02',
      telemetry: [
        { value: '2+', label: 'years as a full-stack developer' },
        { value: '50%', label: 'less time to prepare a document set, thanks to automation' },
        { value: '12', label: 'real users, 6 months in production' },
        { value: '131', label: 'unit tests for the Documents module' },
      ],
    },

    races: {
      r01: {
        name: 'VSD GP',
        short: 'Experience',
        label: 'Full-time · VSD Vietnam Technology JSC',
        period: '2024 – present',
        summary:
          'Full-Stack Developer on a team building e-government and document digitisation software for government agencies. My role: the link with the BAs, owner of whole modules, and the go-to person for on-site deployment.',
        chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS', 'Angular Material', 'SQL Server', 'MongoDB', 'IIS'],
        turns: [
          {
            title: 'Working with BAs',
            braking:
              'Administrative workflows have many steps and conditions; misreading one detail of the spec means reworking the whole flow.',
            apex: [
              'Read the SRS and worked directly with BAs to pin down the business rules before writing code.',
              'Turned requirements into concrete flows, states and validation rules for both the API and the UI.',
            ],
            exit: 'Features match the specified process the first time, with little rework.',
            chips: ['Business analysis', 'SRS'],
          },
          {
            title: 'Owning whole modules',
            braking: 'A working module needs three layers — database, API and UI — and all three must fit together.',
            apex: [
              'Took modules end to end: database schema → ASP.NET API → Angular 12 UI with TailwindCSS and Angular Material.',
              'Wrote SQL Server stored procedures for search and paging; built MongoDB aggregation pipelines for large data.',
            ],
            exit: 'Each module has one owner from the data all the way to the screen.',
            chips: ['SQL Server', 'Stored procedures', 'MongoDB aggregation', 'Angular 12'],
          },
          {
            title: 'Deployment lead',
            braking:
              'The system runs on the customer’s own servers (on-premise): a different environment from dev, and incidents must be fixed on the spot.',
            apex: [
              'Deployed the system to IIS on the customer’s servers myself.',
              'Handled configuration, troubleshooting and performance tuning in production.',
            ],
            exit: 'The system runs reliably on the customer’s real infrastructure.',
            chips: ['On-premise', 'IIS', 'Troubleshooting', 'Performance tuning'],
          },
        ],
      },

      r02: {
        name: 'Bailiff Registry GP',
        short: 'Project at VSD',
        label: 'Full-Stack Developer',
        period: '2024 – present',
        summary:
          'A database on the organisation and activities of bailiffs for a government agency: create, edit, delete, search and a summary dashboard for service-of-process contracts, verification files and judgment enforcement.',
        chips: ['ASP.NET Framework', 'Angular 12', 'SQL Server'],
        turns: [
          {
            title: 'Core workflows',
            braking: 'Records pass through several levels of review, each with its own rules.',
            apex: [
              'Built create, edit, delete and search for three modules: service-of-process contracts, enforcement eligibility verification, and enforcement organisation.',
              'Designed the Angular 12 forms and the matching ASP.NET APIs.',
              'Implemented multi-level record approval logic.',
            ],
            exit: 'Three core modules covering the whole record lifecycle.',
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
            title: 'Summary dashboard & search',
            braking: 'A statistics dashboard easily chokes when loading large numbers of records.',
            apex: [
              'A summary dashboard across all three modules.',
              'Multi-dimensional search filters for registers and business documents.',
              'Optimised the SQL Server queries behind the dashboard.',
            ],
            exit: 'Dashboard and search stay fast as record volume grows.',
            chips: ['SQL Server', 'Query tuning', 'Dashboard'],
          },
        ],
      },

      r03: {
        name: 'Digitization GP',
        short: 'Project at VSD',
        label: 'Full-Stack Developer · Document digitisation platform',
        period: '2025',
        summary:
          'A platform that runs the whole paper-to-digital workflow for archives: scanning → scan QC → data entry → entry QC → data export and productivity reporting. Many digitisation projects run at once, with many staff working in parallel at each stage.',
        chips: [
          'Angular 12',
          'ASP.NET Web API',
          'MongoDB',
          'SQL Server',
          'SignalR',
          'Firebase',
          'DevExtreme',
          'EPPlus',
        ],
        turns: [
          {
            title: 'Document lifecycle',
            braking:
              'Every file and page passes through several stages handled by different people; bad scans must be rescanned, wrong entries re-entered.',
            apex: [
              'A two-axis state model: scanning (`SCAN` → `CHECKSCAN` → `SCAN_COMPLETE` / `RESCAN`) and data entry (`CHUA_PHAN_CONG` → … → `HOAN_THANH_NHAP_LIEU` / `CAN_NHAP_LAI`).',
              'Rework loops (rescan, re-enter) with a recorded reason.',
              'Every state change stores a timestamp and an activity history.',
            ],
            exit: 'We always know where each file is, and all productivity reports are computed from this data.',
            chips: ['State machine', 'MongoDB', 'Activity history'],
          },
          {
            title: 'Work queue & scan QC',
            braking:
              'With many people working in parallel, two of them can easily grab the same file, and work is spread unevenly.',
            apex: [
              'A queue-style "take files" mechanism: staff choose how many files / folders to take and get only unclaimed work.',
              'Approve or request a rescan with an error note; track how many times each file was scanned.',
              'Assign scan reviewers; users without the right see a dedicated screen.',
            ],
            exit: 'Many people work at once and nobody processes the same file twice.',
            chips: ['Work queue', 'Quality control'],
          },
          {
            title: 'File management & Excel export',
            braking:
              'Thousands of PDFs / images must follow each project’s folder structure, and every customer wants exported data in its own format.',
            apex: [
              'A folder-tree file manager (DevExtreme FileManager) stored in MongoDB: upload, PDF / image preview, search by name, date or user.',
              'Reads PDF metadata (page count, paper size) to measure workload in pages.',
              'Checks for missing or misplaced files against the project’s standard folder structure; recycle bin, activity history, large ZIP downloads.',
              'Configurable Excel export: pick columns → value sources → formulas (EPPlus / SheetJS).',
            ],
            exit: 'New export formats for a customer are configuration, not code.',
            chips: ['DevExtreme', 'iTextSharp', 'EPPlus', 'SharpZipLib'],
          },
          {
            title: 'Reports, dashboards & real time',
            braking:
              'Managers need progress, productivity and cost per person and per project without compiling it by hand.',
            apex: [
              'Dashboards for progress through each stage, completion rate, and file / page volume over time; a separate dashboard for staff.',
              'Volume, quality, progress and data-entry cost reports built on MongoDB aggregation; filter by project, user and date range; export to Excel or print.',
              'SignalR pushes real-time updates; push notifications via Firebase Cloud Messaging.',
            ],
            exit: 'Progress and productivity figures are always available and update as soon as anything changes.',
            chips: ['MongoDB aggregation', 'ApexCharts', 'SignalR', 'Firebase Cloud Messaging'],
          },
        ],
      },

      r04: {
        name: 'Citizen Desk GP',
        short: 'Project at VSD',
        label: 'Full-Stack Developer · Citizen reception & petition handling',
        period: '2025',
        summary:
          'A system that moves a government agency’s citizen reception and the handling of complaints, denunciations, petitions and feedback from paper to one central platform, with multi-level approval, dashboards and template-based reports.',
        chips: ['Angular 12', 'ASP.NET Web API', 'Entity Framework 6', 'SQL Server', 'OpenXML', 'ApexCharts'],
        turns: [
          {
            title: 'Multi-level petition workflow',
            braking:
              'A petition passes through many hands — intake officer, approving leader, handling officer, co-handlers — and on paper nobody knows where it is.',
            apex: [
              'Intake from many sources: reception sessions, post, transfers from other agencies, other channels.',
              'Workflow `DANG_NHAP` → `CHUYEN_DUYET` → leader accepts / rejects with a reason → `DANG_XU_LY` → leader approves the outcome → `HOAN_THANH`; a `CHUYEN_DON` branch transfers to another agency.',
              'Assign lead and supporting officers, handling direction and opinions; chase overdue petitions.',
              'Records who received, approved and handled each petition, with reasons at every step.',
            ],
            exit: 'Every petition has a clear status and a full history from intake to completion.',
            chips: ['Multi-level workflow', 'ASP.NET', 'Angular 12'],
          },
          {
            title: 'Reception sessions & duplicate detection',
            braking:
              'A citizen may file the same petition several times through several channels, so the same case gets handled twice.',
            apex: [
              'Records regular reception sessions and sessions chaired by leaders: content, form of reception, officer, attachments.',
              'Citizen profiles are reused when people return; petitions and sessions are grouped into a single case.',
              'Finds duplicate petitions, links them to the original and exports the duplicate list.',
              'Search by petitioner and by the person / organisation complained about.',
            ],
            exit: 'Duplicates are caught and merged into one case instead of being handled twice.',
            chips: ['Duplicate detection', 'Search', 'SQL Server'],
          },
          {
            title: 'Dashboards & template reports',
            braking: 'Leaders need quick summary figures and reports in the officially prescribed formats.',
            apex: [
              'ApexCharts dashboards: petitions by source, type and handling direction; sessions by officer, leader and position; filter by year / month.',
              'Reports on citizen reception, complaint and denunciation handling, petitions and feedback, and year-over-year comparison.',
              'Word reports generated from .docx templates with OpenXML (keyword replacement, dynamic tables); Excel export and direct printing.',
              'Moved heavy statistics and paging queries to stored procedures.',
            ],
            exit: 'Prescribed reports are a few clicks away.',
            chips: ['ApexCharts', 'OpenXML', 'Stored procedures'],
          },
        ],
      },

      r05: {
        name: 'Steel GP',
        short: 'Freelance project',
        label: 'Full-stack · built solo',
        period: '06/2024 – present',
        summary:
          'An internal web system for inventory, workflow and project documents at a steel manufacturing / fabrication company. Built entirely solo: domain analysis, database design, backend, frontend, UI/UX, testing and deployment. In production with 12 users, on office PCs and on phones in the workshop.',
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
            { value: '12', label: 'real users' },
            { value: '6', label: 'months in production' },
            { value: '200', label: 'documents generated' },
            { value: '~130', label: 'REST endpoints' },
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
          results: [
            '12 users, 6 months in production.',
            'Preparing a 19-document set: from 4 hours down to 2.',
            '200 documents generated by the system so far.',
          ],
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
            exit: 'Enter the data once, generate the whole document set — a 19-document set went from 4 hours to 2. `ITemplateEngine` + `TemplateEngineFactory` (Strategy / Factory) make new formats pluggable.',
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

      r06: {
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
              'Led a team of 4 building a real-time, automatic attendance app based on face recognition.',
              'Built with C# WPF and Emgu CV.',
            ],
            exit: '70% recognition accuracy; the project received an A grade.',
            chips: ['C#', 'WPF', 'Emgu CV'],
          },
        ],
      },

      r07: {
        name: 'Pit Garage',
        short: 'Skills',
        label: 'Car development',
        period: '',
        summary:
          'My skills, organised by car department. Each upgrade says what I built with it and in which rounds — tap a round tag to jump there.',
        chips: [],
        turns: [
          {
            part: 'aero',
            title: 'Aerodynamics',
            sub: 'Frontend',
            desc: 'What users see and touch: the interface has to be clean, fast and easy to use.',
            upgrades: [
              {
                name: 'Angular 12 / 14 · TypeScript · RxJS',
                note: 'Lazy-loaded feature modules, guards, interceptors, and a `*appCan` structural directive that shows / hides buttons by permission.',
                races: ['r01', 'r02', 'r03', 'r04', 'r05'],
              },
              {
                name: 'TailwindCSS · Angular Material',
                note: 'UIs built closely to the SRS; the "Xưởng Dịu" design system with its own CSS tokens for shop-floor users.',
                races: ['r01', 'r05'],
              },
              {
                name: 'DevExtreme',
                note: 'Folder-tree file manager and large data grids.',
                races: ['r03'],
              },
              {
                name: 'ApexCharts',
                note: 'Digitisation progress dashboards, petition statistics, stock reports.',
                races: ['r03', 'r04', 'r05'],
              },
              {
                name: 'SheetJS · ZXing',
                note: 'Read and export Excel in the browser; scan QR codes / barcodes with the phone camera.',
                races: ['r03', 'r05'],
              },
            ],
          },
          {
            part: 'chassis',
            title: 'Chassis',
            sub: 'Backend',
            desc: 'The load-bearing structure: APIs, business workflows, authentication and real time.',
            upgrades: [
              {
                name: 'ASP.NET Web API (.NET Framework)',
                note: 'APIs for multi-step administrative workflows with multi-level approval.',
                races: ['r01', 'r02', 'r03', 'r04'],
              },
              {
                name: 'ASP.NET Core 7',
                note: '21 controllers, a `[CanAction]` filter guarding APIs by action code @ route.',
                races: ['r05'],
              },
              {
                name: 'Entity Framework 6 / Core 7',
                note: 'CRUD through the ORM; repositories + Unit of Work.',
                races: ['r04', 'r05'],
              },
              {
                name: 'ASP.NET Identity · OAuth · JWT',
                note: 'Token-based sign-in, refresh tokens, permissions down to individual buttons.',
                races: ['r03', 'r04', 'r05'],
              },
              {
                name: 'SignalR · Firebase Cloud Messaging',
                note: 'Real-time stock alerts and progress updates; permission changes without F5; push notifications.',
                races: ['r03', 'r05'],
              },
              {
                name: 'OpenXml · ClosedXML · EPPlus',
                note: 'Word / Excel template engine, prescribed-format reports, configurable Excel export.',
                races: ['r03', 'r04', 'r05'],
              },
            ],
          },
          {
            part: 'power',
            title: 'Power Unit',
            sub: 'Databases & performance',
            desc: 'Where the power comes from: storage, queries, and staying fast as data grows.',
            upgrades: [
              {
                name: 'SQL Server · Stored procedures',
                note: 'Schema design; heavy search, statistics and paging moved into stored procedures.',
                races: ['r01', 'r02', 'r04', 'r05'],
              },
              {
                name: 'MongoDB · Aggregation pipelines',
                note: 'Productivity and progress reports, paging over large data.',
                races: ['r01', 'r03'],
              },
              {
                name: 'Redis',
                note: 'Fail-safe cache: if Redis misbehaves, it falls back to the database and the system keeps running.',
                races: ['r05'],
              },
              {
                name: 'Query tuning',
                note: 'Dashboards and search stay responsive as record volume grows.',
                races: ['r02', 'r04'],
              },
            ],
          },
          {
            part: 'durability',
            title: 'Durability',
            sub: 'Deployment, testing & tools',
            desc: 'Getting to the end of the race: shipping to real servers, testing, and fixing incidents.',
            upgrades: [
              {
                name: 'IIS · on-premise',
                note: 'Deployed to customer servers myself, with configuration and on-site troubleshooting.',
                races: ['r01'],
              },
              {
                name: 'Firebase Hosting',
                note: 'Web app deployment.',
                races: [],
              },
              {
                name: 'xUnit · EF Core InMemory',
                note: '131 unit tests for the Documents module; repositories tested without a real database.',
                races: ['r05'],
              },
              {
                name: 'Git · Swagger / OpenAPI',
                note: 'Source control; documenting and trying out APIs.',
                races: [],
              },
              {
                name: 'Languages',
                note: 'Vietnamese (native), English (intermediate).',
                races: [],
              },
            ],
          },
        ],
      },
    },
  };
})();
