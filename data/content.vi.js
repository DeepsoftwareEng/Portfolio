/*
 * Nội dung tiếng Việt.
 * - Trường để trống ('' hoặc []) sẽ tự ẩn trên giao diện.
 * - Đặt chữ trong `dấu backtick` để hiển thị dạng code.
 * - Mỗi turn: braking (bài toán) → apex (giải pháp, danh sách) → exit (kết quả) + chips.
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  PW.content = PW.content || {};

  PW.content.vi = {
    meta: {
      title: 'Nguyễn Phúc Hưng — Full-Stack Developer',
      description:
        'Portfolio của Nguyễn Phúc Hưng — Full-Stack Developer (.NET & Angular). Một mùa giải 6 chặng: kinh nghiệm, dự án và kỹ năng.',
    },

    ui: {
      skip: 'Bỏ qua tới nội dung',
      langLabel: 'Ngôn ngữ',
      driverEyebrow: 'Hồ sơ tay đua · Hà Nội',
      ctaFeature: 'Xem Feature Race',
      telemetry: 'Telemetry',
      season: 'Lịch mùa giải',
      seasonSub: '6 chặng · chọn một chặng để mở đường đua',
      colRound: 'Vòng',
      colRace: 'Chặng',
      colTurns: 'Turn',
      colPeriod: 'Thời gian',
      colStatus: 'Trạng thái',
      turnsUnit: 'turn',
      viewedOf: 'đã xem {n}/{total}',
      feature: 'Feature race',
      status: {
        grid: 'Trên lưới',
        live: 'Đang diễn ra',
        finished: 'Hoàn thành',
        garage: 'Garage',
      },
      back: 'Lịch mùa giải',
      roundOf: 'Round {n} / {total}',
      prevRace: 'Chặng trước',
      nextRace: 'Chặng sau',
      prevTurn: 'Turn trước',
      nextTurn: 'Turn sau',
      checkered: 'Về đích · xem lại lịch',
      trackLabel: 'Sơ đồ đường đua {name}',
      turnListLabel: 'Danh sách turn',
      turnAria: 'Turn {n}: {title}',
      lap: 'Turn',
      keyboardHint: 'Mẹo: dùng phím ← → để chuyển turn.',
      current: 'Đang xem',
      visited: 'Đã xem',
      notVisited: 'Chưa xem',
      phases: {
        braking: 'Bài toán',
        apex: 'Giải pháp',
        exit: 'Kết quả',
      },
      liveAnnounce: 'Turn {n} trên {total}: {title}',
      brief: 'Race brief',
      problem: 'Bài toán',
      solution: 'Các phân hệ',
      architecture: 'Kiến trúc hệ thống',
      results: 'Kết quả',
      links: 'Liên kết',
      redFlagTitle: 'Red flag',
      redFlagText: 'Đoạn đường này không có trên lịch đua.',
      redFlagCta: 'Về lịch mùa giải',
      introCaption: 'Lights out',
      skipIntro: 'Bỏ qua',
      footer: '© 2026 Nguyễn Phúc Hưng · Thiết kế lấy cảm hứng từ đua xe, không liên kết với bất kỳ giải đua nào.',
    },

    driver: {
      name: 'Nguyễn Phúc Hưng',
      role: 'Full-Stack Developer · .NET & Angular',
      summary:
        'Lập trình viên Full-Stack với 2 năm kinh nghiệm xây dựng phần mềm nghiệp vụ phức tạp: E-Government, số hóa hồ sơ, quản lý kho. Mạnh về ASP.NET và Angular, tối ưu SQL Server / MongoDB, và tự tay đưa hệ thống lên production.',
      email: 'deepit2507@gmail.com',
      linkedin: 'https://www.linkedin.com/in/itsdeep02',
      telemetry: [
        { value: '2+', label: 'năm kinh nghiệm Full-Stack' },
        { value: '~130', label: 'REST endpoint trong dự án freelance' },
        { value: '131', label: 'unit test cho module Hồ sơ' },
        { value: '~190', label: 'commit, làm một mình' },
      ],
    },

    races: {
      r01: {
        name: 'Driver Profile',
        short: 'Giới thiệu',
        label: 'Hồ sơ tay đua',
        period: '2024 – nay',
        summary: 'Ai đang cầm lái: vai trò, thế mạnh và cách liên hệ.',
        chips: ['ASP.NET', 'Angular', 'SQL Server', 'MongoDB'],
        turns: [
          {
            title: 'Tóm tắt',
            braking:
              'Doanh nghiệp và cơ quan nhà nước cần phần mềm bám sát nghiệp vụ và chạy ổn định trên hạ tầng của chính họ.',
            apex: [
              '2 năm làm Full-Stack với ASP.NET và Angular trên các hệ thống E-Government và số hóa hồ sơ.',
              'Đi trọn vòng đời tính năng: đọc nghiệp vụ, thiết kế CSDL, viết API, dựng giao diện, triển khai và xử lý sự cố.',
              'Song song: dự án freelance làm một mình — hệ thống quản lý kho, công việc và hồ sơ cho một doanh nghiệp ngành thép, đang vận hành thực tế.',
            ],
            exit: 'Nhận một bài toán nghiệp vụ và đưa nó tới production.',
            chips: [],
          },
          {
            title: 'Thế mạnh',
            braking:
              'Phần mềm nghiệp vụ hay hỏng ở ba chỗ: hiểu sai quy trình, truy vấn chậm khi dữ liệu lớn, và lỗi chỉ xuất hiện trên máy chủ khách hàng.',
            apex: [
              'Nghiệp vụ: chuyển tài liệu SRS và trao đổi trực tiếp với người dùng thành luồng xử lý và phân quyền rõ ràng.',
              'Dữ liệu: Stored Procedure, Index, Aggregation Pipeline cho tìm kiếm và phân trang khối lượng lớn.',
              'Vận hành: triển khai on-premise, xử lý sự cố, tinh chỉnh hiệu năng trên môi trường production.',
              'Tài liệu tự động: engine điền mẫu Word/Excel tự viết trên OpenXml và ClosedXML.',
            ],
            exit: '',
            chips: ['Phân tích nghiệp vụ', 'Tối ưu CSDL', 'Triển khai on-premise', 'Sinh tài liệu'],
          },
          {
            title: 'Liên hệ',
            braking: '',
            apex: [],
            exit: 'Sẵn sàng trao đổi về các vị trí Full-Stack / .NET / Angular.',
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
        short: 'Kinh nghiệm',
        label: 'Full-time · Công ty CP Công nghệ VSD Việt Nam',
        period: '2024 – nay',
        summary:
          'Full-Stack Developer trong các dự án phần mềm hành chính (E-Government, số hóa tài liệu) cho cơ quan nhà nước.',
        chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS', 'Angular Material', 'SQL Server', 'MongoDB'],
        turns: [
          {
            title: 'Ứng dụng & logic nghiệp vụ',
            braking:
              'Luồng nghiệp vụ hành chính nhiều bước, nhiều điều kiện, và phải khớp từng chi tiết với tài liệu đặc tả của BA.',
            apex: [
              'Viết API Backend bằng ASP.NET Framework cho các luồng nghiệp vụ hành chính phức tạp.',
              'Dựng giao diện Angular 12 kết hợp TailwindCSS và Angular Material, bám sát tài liệu SRS.',
            ],
            exit: 'Giao diện và API đi đúng quy trình nghiệp vụ đã đặc tả.',
            chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS'],
          },
          {
            title: 'Kiến trúc & tối ưu CSDL',
            braking: 'Dữ liệu hồ sơ lớn dần; tra cứu và phân trang chậm nếu để ORM tự sinh truy vấn.',
            apex: [
              'Thiết kế lược đồ CSDL và viết Stored Procedure trên SQL Server.',
              'Dựng Aggregation Pipeline trên MongoDB để truy xuất dữ liệu lớn và phân trang.',
            ],
            exit: 'Truy vấn tra cứu và thống kê chạy ổn định khi khối lượng hồ sơ tăng.',
            chips: ['SQL Server', 'Stored Procedure', 'MongoDB Aggregation'],
          },
          {
            title: 'Triển khai on-site',
            braking:
              'Hệ thống chạy trên máy chủ của khách hàng (on-premise): môi trường khác máy dev, sự cố phải xử lý tại chỗ.',
            apex: [
              'Trực tiếp triển khai hệ thống tại máy chủ khách hàng.',
              'Hỗ trợ cấu hình, xử lý sự cố và tinh chỉnh hiệu năng trên môi trường production.',
            ],
            exit: 'Hệ thống vận hành trên hạ tầng thật của khách hàng.',
            chips: ['On-premise', 'Troubleshooting', 'Performance tuning'],
          },
        ],
      },

      r03: {
        name: 'Thừa hành viên GP',
        short: 'Dự án tại VSD',
        label: 'Full-Stack Developer',
        period: '2024 – nay',
        summary:
          'Hệ thống CSDL về Tổ chức và Hoạt động của Thừa hành viên — quản lý toàn bộ vòng đời hồ sơ vi bằng và quy trình thi hành án cho cơ quan nhà nước.',
        chips: ['ASP.NET Framework', 'Angular 12', 'SQL Server'],
        turns: [
          {
            title: 'Luồng nghiệp vụ lõi',
            braking: 'Hồ sơ đi qua nhiều cấp kiểm duyệt, mỗi cấp có quy tắc riêng.',
            apex: [
              'Thiết kế UI form bằng Angular 12 và viết API ASP.NET cho các module: Quản lý hợp đồng vi bằng, Xác minh điều kiện thi hành án, Tổ chức thi hành án.',
              'Xử lý logic kiểm duyệt hồ sơ đa cấp.',
            ],
            exit: 'Các module lõi phục vụ trọn vòng đời hồ sơ.',
            chips: ['Angular 12', 'ASP.NET', 'Workflow đa cấp'],
          },
          {
            title: 'Kết xuất tài liệu',
            braking: 'Biểu mẫu hành chính phức tạp phải đúng chuẩn văn bản nhà nước, xuất ra nhiều định dạng.',
            apex: ['Binding dữ liệu động vào các biểu mẫu hành chính phức tạp.', 'Kết xuất ra Word, PDF và Excel.'],
            exit: 'Văn bản xuất ra đúng chuẩn văn bản nhà nước.',
            chips: ['Word', 'PDF', 'Excel'],
          },
          {
            title: 'Dashboard & tra cứu',
            braking: 'Dashboard thống kê thời gian thực dễ nghẽn khi tải khối lượng lớn hồ sơ.',
            apex: [
              'Bộ lọc tìm kiếm đa chiều cho các sổ theo dõi và văn bản nghiệp vụ.',
              'Tối ưu các câu truy vấn SQL Server phía sau Dashboard.',
            ],
            exit: 'Dashboard thống kê thời gian thực không bị nghẽn khi tải khối lượng lớn hồ sơ.',
            chips: ['SQL Server', 'Tối ưu truy vấn'],
          },
        ],
      },

      r04: {
        name: 'Steel GP',
        short: 'Dự án freelance',
        label: 'Solo Full-stack',
        period: '06/2024 – nay',
        summary:
          'Hệ thống web nội bộ quản lý hàng hóa, công việc và hồ sơ cho một doanh nghiệp sản xuất / gia công thép. Tự làm toàn bộ: phân tích nghiệp vụ, thiết kế CSDL, Backend, Frontend, UI/UX, kiểm thử và triển khai. Đang vận hành thực tế, dùng trên PC ở văn phòng và điện thoại ở xưởng.',
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
            'Tồn kho không theo thời gian thực; nhập/xuất ghi tay dễ sai; không cảnh báo khi hàng sắp hết.',
            'Yêu cầu, báo giá, PO, giao hàng, trả hàng nằm rải rác trong nhiều file Excel.',
            'Mỗi công trình phải soạn hàng chục văn bản Word/Excel có nội dung lặp lại, dễ lệch thông tin.',
            'Bản vẽ, PDF đính kèm phân tán, khó tra cứu.',
          ],
          modules: [
            'Hàng hóa & mã QR',
            'Nhập / xuất kho bằng quét mã',
            'Theo dõi công việc · Báo giá · Vật tư',
            'Hồ sơ: sinh văn bản tự động',
            'Quản lý tập tin',
            'Dashboard & báo cáo',
            'Thông báo realtime',
            'Quản trị & phân quyền động',
          ],
          telemetry: [
            { value: '~190', label: 'commit trên 2 repo' },
            { value: '~130', label: 'REST endpoint' },
            { value: '21', label: 'controller' },
            { value: '26', label: 'repository' },
            { value: '131', label: 'unit test (xUnit)' },
          ],
          architecture: [
            {
              name: 'Angular 14 SPA',
              items: [
                'Lazy module theo phân hệ',
                'AuthGuard + MenuGuard · directive `*appCan`',
                'SignalR client · ZXing · SheetJS · ApexCharts',
              ],
            },
            {
              link: 'REST (JWT) · WebSocket (SignalR)',
              name: 'ASP.NET Core 7 Web API',
              items: [
                '21 controller · filter `[CanAction]` · NotificationHub',
                '`TemplateEngineFactory` → Word / Excel engine',
                '26 repository · Unit of Work',
              ],
            },
            {
              link: 'EF Core · StackExchange.Redis · File I/O',
              name: 'Lưu trữ',
              items: ['SQL Server (EF Core + Stored Procedure)', 'Redis cache (fail-safe)', 'File storage (media)'],
            },
          ],
          results: [],
          links: [],
        },
        turns: [
          {
            title: 'Engine sinh hồ sơ Word/Excel',
            braking:
              'Mỗi công trình cần hàng chục văn bản nghiệm thu, thanh toán với thông tin lặp lại. Soạn tay tốn thời gian và dễ lệch thông tin giữa các văn bản.',
            apex: [
              'Người dùng upload mẫu .docx / .xlsx chứa từ khóa `#tu_khoa#`; hệ thống tự quét và gợi ý trường dữ liệu tương ứng.',
              'Word (OpenXml SDK): thay từ khóa bị Word tách thành nhiều run bằng cách xử lý trên chuỗi ghép của cả đoạn rồi ánh xạ ngược vị trí về từng phần tử Text.',
              'Danh sách người ký thay đổi số lượng → nhân bản paragraph (Word) hoặc chèn và sao chép hàng mẫu (Excel), giữ nguyên định dạng của mẫu.',
              '`#banghangmucN#` vẽ nguyên một bảng động: độ rộng cột theo %, nhóm cột cha, tiêu đề lặp khi sang trang; file ra được kiểm tra bằng `OpenXmlValidator`.',
              'Excel (ClosedXML): ghi số / ngày thật để công thức vẫn tính; xuất cả bộ hồ sơ .zip kèm danh mục, văn bản lỗi ghi vào `loi.txt`.',
            ],
            exit: 'Nhập dữ liệu một lần, sinh cả bộ hồ sơ. `ITemplateEngine` + `TemplateEngineFactory` (Strategy / Factory) để mở rộng định dạng mới.',
            chips: ['OpenXml SDK', 'ClosedXML', 'Strategy pattern', 'xUnit'],
          },
          {
            title: 'Quét QR nhập/xuất kho',
            braking: 'Nhập/xuất ghi tay dễ sai, không ai biết tồn kho thực tế, và không ai được báo khi hàng sắp hết.',
            apex: [
              'Màn nhập / xuất dùng camera điện thoại (ZXing — QR và mã vạch) hoặc máy quét cầm tay.',
              'Hai chế độ: quét từng cái (+1 / −1) hoặc lập phiếu nhiều mặt hàng kèm số lượng.',
              'Chặn xuất âm kho; tồn dưới ngưỡng `WarnAmount` → lưu thông báo và đẩy cảnh báo realtime qua SignalR tới mọi client.',
              'Sinh mã QR cho từng sản phẩm hoặc hàng loạt, in kèm tên sản phẩm (QRCoder).',
            ],
            exit: 'Thủ kho thao tác ngay tại xưởng bằng điện thoại; tồn kho và cảnh báo cập nhật tức thì.',
            chips: ['ZXing', 'QRCoder', 'SignalR'],
          },
          {
            title: 'Phân quyền động 3 tầng',
            braking:
              'Mỗi bộ phận chỉ được thấy và làm một số việc; quyền thay đổi thường xuyên mà không thể bắt người dùng đăng xuất.',
            apex: [
              'Ma trận Nhóm quyền × Menu × Mã thao tác (THEM, SUA, XOA, XUAT_EXCEL…); một tài khoản thuộc nhiều nhóm, quyền được gộp.',
              'Backend: attribute `[CanAction("XOA@/product")]` (IAsyncActionFilter) chặn API theo cặp mã@route.',
              'Frontend: `MenuGuard` chặn route, structural directive `*appCan="\'XOA\'"` ẩn / hiện từng nút; sidebar sinh từ quyền.',
              'Đổi quyền → sự kiện `MenuChanged` qua SignalR, mọi client tự tải lại menu, không cần F5.',
              'Các menu quản trị cốt lõi được khóa để quản trị viên không tự khóa hệ thống.',
            ],
            exit: 'Phân quyền đến từng nút bấm, nhất quán FE / BE, cập nhật realtime.',
            chips: ['ASP.NET Identity', 'JWT + refresh token', 'Angular directive', 'SignalR'],
          },
          {
            title: 'Import báo giá từ Excel',
            braking:
              'Mỗi khách hàng gửi báo giá Excel theo bố cục khác nhau, và mã hàng lại nằm trong ảnh QR dán vào file.',
            apex: [
              'Frontend đọc danh sách sheet bằng SheetJS cho người dùng chọn; mỗi sheet thành một báo giá.',
              '`BaoGiaExcelReader` tự dò dòng tiêu đề trong 30 dòng đầu theo tên cột đã chuẩn hóa (nhiều biến thể "Tên SP / Tên hàng", "SL / Số lượng").',
              'Trích ngày báo giá bằng regex dạng "ngày … tháng … năm …".',
              'Giải mã ảnh QR nhúng trong Excel bằng ZXing.Net để lấy mã hàng và nối đúng phiếu theo dõi công việc.',
            ],
            exit: 'Import được báo giá từ nhiều mẫu khác nhau; lỗi được báo theo từng sheet.',
            chips: ['SheetJS', 'ZXing.Net', 'Regex'],
          },
          {
            title: 'Parser công thức chi phí',
            braking: 'Người dùng tự định nghĩa công thức chi phí phát sinh. Dùng `eval` sẽ mở cửa cho injection.',
            apex: [
              'Tự viết tokenizer + recursive descent parser, không dùng `eval`.',
              'Biến `TONG` (tổng cộng), `TREN` (dòng ngay trên), `X` (giá trị nhập); hỗ trợ + − × ÷, % hậu tố, ngoặc, số âm.',
              'Giới hạn độ dài và độ sâu biểu thức, thông báo lỗi tiếng Việt; API kiểm tra công thức trước khi lưu.',
              'Xử lý số kiểu Việt Nam (`1.250.000,5`) và đọc số tiền thành chữ.',
            ],
            exit: 'Công thức linh hoạt cho người dùng mà không đánh đổi bảo mật.',
            chips: ['Recursive descent', 'Tokenizer', 'Security'],
          },
          {
            title: 'UI/UX cho xưởng',
            braking:
              'Người dùng là công nhân xưởng cơ khí: nhiều người lớn tuổi, dùng Android tầm trung, ánh sáng chói, tay dính dầu hoặc đeo găng, Wi-Fi chập chờn.',
            apex: [
              'Bộ quy chuẩn UI/UX: điểm chạm lớn, tương phản phù hợp, xác nhận thao tác nguy hiểm.',
              'Audit giao diện cũ: 5 lớp CSS chồng nhau, 159 lần `!important`, 25 cỡ chữ, 3 hệ màu xám → hợp nhất.',
              'Design System "Xưởng Dịu": xanh thép + hổ phách dịu, thang chữ 6 bậc, token CSS tiền tố `ws-`, số `tabular-nums` như phiếu kho.',
              'Desktop là bảng, mobile là card; dán dữ liệu thẳng từ Excel (parser TSV tự viết), điều hướng bàn phím trong bảng.',
            ],
            exit: 'Giao diện dùng được ngay tại xưởng; kèm tài liệu hướng dẫn sử dụng cho người dùng cuối.',
            chips: ['Design System', 'TailwindCSS', 'Angular Material'],
          },
          {
            title: 'Quy trình & kiểm thử',
            braking: 'Làm một mình trên hệ thống đang chạy thật: mọi thay đổi phải an toàn và có lý do.',
            apex: [
              'Viết tài liệu thiết kế trước khi code (module Hồ sơ ~470 dòng): yêu cầu, giả định đã xác nhận với người dùng, mô hình dữ liệu, API, trường hợp biên.',
              'Decision Log: mỗi quyết định ghi lại phương án thay thế và lý do.',
              '131 unit test (xUnit, 26 file) cho module Hồ sơ: run bị tách, bảng gộp ô, chữ ký dạng bảng, dòng tổng cộng…; repository test trên EF Core InMemory.',
              'Làm việc trực tiếp với người dùng cuối, phát triển lặp theo phản hồi.',
            ],
            exit: 'Module phức tạp nhất có lưới test bảo vệ mỗi lần thay đổi.',
            chips: ['xUnit', 'EF Core InMemory', 'Decision Log'],
          },
          {
            title: 'Hiệu năng & độ bền',
            braking: 'Tìm kiếm trên dữ liệu lớn phải nhanh, và Redis không ổn định không được kéo sập cả hệ thống.',
            apex: [
              'Stored Procedure cho tìm kiếm / phân trang (`Proc_SearchProducts`), EF Core cho CRUD.',
              'Cache chi tiết sản phẩm trên Redis, tự xóa cache khi sửa / xóa.',
              'Redis fail-safe: timeout ngắn, `AbortOnConnectFail=false`, extension `Try*` → tự rơi về truy vấn DB.',
              'Sửa lỗi file .docx / .xlsx xuất ra bị hỏng bằng cách ép `System.IO.Packaging` 8.0.1.',
            ],
            exit: 'Hệ thống vẫn phục vụ khi Redis không sẵn sàng.',
            chips: ['Redis', 'Stored Procedure', 'EF Core'],
          },
        ],
      },

      r05: {
        name: 'HaUI GP',
        short: 'Học vấn',
        label: 'Đại học Công nghiệp Hà Nội',
        period: '2020 – 2024',
        summary: 'Cử nhân Kỹ thuật phần mềm, Trường Đại học Công nghiệp Hà Nội (Hanoi University of Industry).',
        chips: ['Kỹ thuật phần mềm'],
        turns: [
          {
            title: 'Kỹ thuật phần mềm',
            braking: '',
            apex: ['Cấu trúc dữ liệu & Giải thuật.', 'Thiết kế Cơ sở dữ liệu.', 'Lập trình hướng đối tượng (OOP).'],
            exit: 'Cử nhân Kỹ thuật phần mềm (2020 – 2024).',
            chips: [],
            labels: { apex: 'Môn chuyên ngành' },
          },
          {
            title: 'Điểm danh bằng khuôn mặt',
            braking: 'Điểm danh thủ công tốn thời gian và dễ gian lận.',
            apex: [
              'Trưởng nhóm phát triển phần mềm điểm danh tự động bằng nhận diện khuôn mặt thời gian thực.',
              'Xây dựng trên C# WPF và Emgu CV.',
            ],
            exit: 'Dự án nổi bật trong quá trình học; kinh nghiệm dẫn dắt nhóm.',
            chips: ['C#', 'WPF', 'Emgu CV'],
          },
        ],
      },

      r06: {
        name: 'Pit Garage',
        short: 'Kỹ năng',
        label: 'Bộ công cụ',
        period: '',
        summary: 'Những gì có trong garage — tất cả đã dùng trong dự án thật.',
        chips: [],
        turns: [
          {
            title: 'Frontend',
            braking: '',
            apex: [
              'Angular 12 / 14 (TypeScript, RxJS): lazy loading, guard, interceptor, structural directive.',
              'TailwindCSS, Angular Material, DevExtreme.',
              'ApexCharts, SheetJS, ZXing scanner, SignalR client.',
            ],
            exit: '',
            chips: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS', 'Angular Material', 'DevExtreme'],
            labels: { apex: 'Đã dùng' },
          },
          {
            title: 'Backend',
            braking: '',
            apex: [
              'ASP.NET Framework và ASP.NET Core 7 Web API (C#).',
              'Entity Framework Core 7, ASP.NET Identity + JWT, SignalR.',
              'OpenXml SDK, ClosedXML, QRCoder, ZXing.Net.',
            ],
            exit: '',
            chips: ['C#', 'ASP.NET Core', 'EF Core', 'SignalR', 'JWT'],
            labels: { apex: 'Đã dùng' },
          },
          {
            title: 'Cơ sở dữ liệu',
            braking: '',
            apex: [
              'SQL Server: thiết kế lược đồ, Stored Procedure, Index.',
              'MongoDB: Aggregation Pipeline.',
              'Redis: cache có cơ chế fail-safe.',
            ],
            exit: '',
            chips: ['SQL Server', 'MongoDB', 'Redis'],
            labels: { apex: 'Đã dùng' },
          },
          {
            title: 'Công cụ & ngôn ngữ',
            braking: '',
            apex: [
              'Git, xUnit, Swagger / OpenAPI, Adobe Photoshop, Slack.',
              'Tiếng Việt (bản ngữ), tiếng Anh (trung cấp).',
            ],
            exit: '',
            chips: ['Git', 'xUnit', 'Swagger'],
            labels: { apex: 'Đã dùng' },
          },
        ],
      },
    },
  };
})();
