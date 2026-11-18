/*
 * Nội dung tiếng Việt.
 * - Trường để trống ('' hoặc []) sẽ tự ẩn trên giao diện.
 * - Đặt chữ trong `dấu backtick` để hiển thị dạng code.
 * - Mỗi turn: braking (bài toán) → apex (giải pháp, danh sách) → exit (kết quả) + chips.
 * - Quy ước chữ: giữ tiếng Anh cho thuật ngữ F1 và IT, phần còn lại viết tiếng Việt.
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  PW.content = PW.content || {};

  PW.content.vi = {
    meta: {
      title: 'Nguyễn Phúc Hưng — Full-Stack Developer',
      description:
        'Portfolio của Nguyễn Phúc Hưng — Full-Stack Developer (.NET & Angular). Một mùa giải 7 chặng: kinh nghiệm, dự án và kỹ năng.',
    },

    ui: {
      skip: 'Bỏ qua tới nội dung',
      langLabel: 'Ngôn ngữ',
      driverEyebrow: 'Hồ sơ tay đua · Hà Nội',
      ctaFeature: 'Xem Feature Race',
      telemetry: 'Telemetry',
      season: 'Lịch mùa giải',
      seasonSub: '7 chặng · chọn một chặng để mở đường đua',
      colRound: 'Vòng',
      colRace: 'Chặng',
      colTurns: 'Turn',
      colPeriod: 'Thời gian',
      colStatus: 'Trạng thái',
      turnsUnit: 'turn',
      viewedOf: 'đã xem {n}/{total}',
      feature: 'Feature race',
      status: {
        grid: 'Trên vạch xuất phát',
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
      garageHint: 'Mẹo: dùng phím ← → để chuyển bộ phận.',
      part: 'Bộ phận',
      partsUnit: 'bộ phận',
      prevPart: 'Bộ phận trước',
      nextPart: 'Bộ phận sau',
      partListLabel: 'Các bộ phận của xe',
      carLabel: 'Sơ đồ xe {name}',
      installed: 'Đã lắp',
      usedIn: 'Dùng ở',
      partAnnounce: 'Bộ phận {n} trên {total}: {title}',
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
        'Lập trình viên Full-Stack với 2 năm kinh nghiệm làm phần mềm nghiệp vụ phức tạp: hành chính công, số hoá tài liệu, tiếp công dân, quản lý kho. Mạnh về ASP.NET và Angular, tối ưu SQL Server / MongoDB, và tự tay đưa hệ thống vào vận hành thật.',
      email: 'deepit2507@gmail.com',
      linkedin: 'https://www.linkedin.com/in/itsdeep02',
      telemetry: [
        { value: '2+', label: 'năm kinh nghiệm Full-Stack' },
        { value: '50%', label: 'thời gian soạn bộ hồ sơ giảm nhờ hệ thống tự làm' },
        { value: '12', label: 'người dùng thực tế, vận hành 6 tháng' },
        { value: '131', label: 'unit test cho module Hồ sơ' },
      ],
    },

    races: {
      r01: {
        name: 'VSD GP',
        short: 'Kinh nghiệm',
        label: 'Full-time · Công ty CP Công nghệ VSD Việt Nam',
        period: '2024 – nay',
        summary:
          'Full-Stack Developer trong đội làm phần mềm hành chính công và số hoá tài liệu cho cơ quan nhà nước. Vai trò: cầu nối với BA, phụ trách trọn từng module và là đầu mối triển khai tại chỗ.',
        chips: ['ASP.NET Framework', 'Angular 12', 'TailwindCSS', 'Angular Material', 'SQL Server', 'MongoDB', 'IIS'],
        turns: [
          {
            title: 'Làm việc với BA',
            braking:
              'Quy trình hành chính nhiều bước, nhiều điều kiện; hiểu sai một chi tiết trong đặc tả là phải làm lại cả luồng.',
            apex: [
              'Đọc tài liệu SRS và trao đổi trực tiếp với BA để làm rõ nghiệp vụ trước khi viết code.',
              'Chuyển yêu cầu thành luồng xử lý, trạng thái và quy tắc kiểm tra cụ thể cho cả API lẫn giao diện.',
            ],
            exit: 'Tính năng làm ra khớp với quy trình đã đặc tả ngay từ lần đầu, ít phải sửa ngược.',
            chips: ['Phân tích nghiệp vụ', 'SRS'],
          },
          {
            title: 'Phụ trách trọn module',
            braking: 'Một module chạy được cần đủ ba lớp: CSDL, API và giao diện, và cả ba phải ăn khớp với nhau.',
            apex: [
              'Nhận module từ đầu tới cuối: thiết kế lược đồ CSDL → viết API ASP.NET → dựng giao diện Angular 12 với TailwindCSS và Angular Material.',
              'Viết Stored Procedure trên SQL Server cho tra cứu và phân trang; dựng Aggregation Pipeline trên MongoDB cho dữ liệu lớn.',
            ],
            exit: 'Mỗi module có một người chịu trách nhiệm từ dữ liệu tới màn hình.',
            chips: ['SQL Server', 'Stored Procedure', 'MongoDB Aggregation', 'Angular 12'],
          },
          {
            title: 'Đầu mối triển khai',
            braking:
              'Hệ thống chạy trên máy chủ của khách hàng (on-premise): môi trường khác máy phát triển, sự cố phải xử lý tại chỗ.',
            apex: [
              'Trực tiếp triển khai hệ thống lên IIS tại máy chủ khách hàng.',
              'Cấu hình, xử lý sự cố và tinh chỉnh hiệu năng trên môi trường vận hành thật.',
            ],
            exit: 'Hệ thống chạy ổn định trên hạ tầng thật của khách hàng.',
            chips: ['On-premise', 'IIS', 'Xử lý sự cố', 'Tinh chỉnh hiệu năng'],
          },
        ],
      },

      r02: {
        name: 'Thừa hành viên GP',
        short: 'Dự án tại VSD',
        label: 'Full-Stack Developer',
        period: '2024 – nay',
        summary:
          'Hệ thống CSDL về Tổ chức và Hoạt động của Thừa hành viên cho cơ quan nhà nước: thêm, sửa, xoá, tra cứu và dashboard tổng hợp cho hợp đồng tống đạt, hồ sơ xác minh và tổ chức thi hành án.',
        chips: ['ASP.NET Framework', 'Angular 12', 'SQL Server'],
        turns: [
          {
            title: 'Luồng nghiệp vụ lõi',
            braking: 'Hồ sơ đi qua nhiều cấp kiểm duyệt, mỗi cấp có quy tắc riêng.',
            apex: [
              'Làm chức năng thêm, sửa, xoá và tra cứu cho ba phân hệ: Hợp đồng tống đạt, Hồ sơ xác minh điều kiện thi hành án, Tổ chức thi hành án.',
              'Dựng biểu mẫu bằng Angular 12 và viết API ASP.NET đi kèm.',
              'Xử lý logic kiểm duyệt hồ sơ nhiều cấp.',
            ],
            exit: 'Ba phân hệ lõi phục vụ trọn vòng đời hồ sơ.',
            chips: ['Angular 12', 'ASP.NET', 'Workflow nhiều cấp'],
          },
          {
            title: 'Kết xuất tài liệu',
            braking: 'Biểu mẫu hành chính phức tạp phải đúng chuẩn văn bản nhà nước, xuất ra nhiều định dạng.',
            apex: ['Gắn dữ liệu động vào các biểu mẫu hành chính phức tạp.', 'Kết xuất ra Word, PDF và Excel.'],
            exit: 'Văn bản xuất ra đúng chuẩn văn bản nhà nước.',
            chips: ['Word', 'PDF', 'Excel'],
          },
          {
            title: 'Dashboard tổng hợp & tra cứu',
            braking: 'Dashboard thống kê dễ nghẽn khi tải khối lượng lớn hồ sơ.',
            apex: [
              'Dashboard tổng hợp số liệu cho cả ba phân hệ.',
              'Bộ lọc tra cứu nhiều chiều cho các sổ theo dõi và văn bản nghiệp vụ.',
              'Tối ưu các câu truy vấn SQL Server phía sau dashboard.',
            ],
            exit: 'Dashboard và tra cứu vẫn nhanh khi khối lượng hồ sơ tăng.',
            chips: ['SQL Server', 'Tối ưu truy vấn', 'Dashboard'],
          },
        ],
      },

      r03: {
        name: 'Số hoá GP',
        short: 'Dự án tại VSD',
        label: 'Full-Stack Developer · Hệ thống số hoá tài liệu',
        period: '2025',
        summary:
          'Hệ thống quản lý quy trình số hoá hồ sơ giấy cho các đơn vị lưu trữ: scan → kiểm tra scan → nhập liệu → kiểm tra nhập liệu → xuất dữ liệu và báo cáo năng suất. Nhiều dự án số hoá chạy cùng lúc, nhiều nhân sự làm song song theo từng công đoạn.',
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
            title: 'Vòng đời tài liệu',
            braking:
              'Mỗi file, mỗi trang đi qua nhiều công đoạn do nhiều người làm; file scan lỗi phải quét lại, dữ liệu nhập sai phải nhập lại.',
            apex: [
              'Mô hình trạng thái theo hai trục: scan (`SCAN` → `CHECKSCAN` → `SCAN_COMPLETE` / `RESCAN`) và nhập liệu (`CHUA_PHAN_CONG` → … → `HOAN_THANH_NHAP_LIEU` / `CAN_NHAP_LAI`).',
              'Có vòng lặp làm lại (quét lại, nhập lại) kèm ghi chú lý do.',
              'Mỗi lần chuyển trạng thái đều ghi mốc thời gian và lịch sử thao tác.',
            ],
            exit: 'Biết chính xác từng file đang ở đâu; toàn bộ báo cáo năng suất tính từ chính dữ liệu này.',
            chips: ['Máy trạng thái', 'MongoDB', 'Lịch sử thao tác'],
          },
          {
            title: 'Hàng đợi nhận việc & kiểm tra scan',
            braking: 'Nhiều nhân viên làm song song dễ xử lý trùng một file, và việc chia không đều.',
            apex: [
              'Cơ chế "nhận file" kiểu hàng đợi: nhân viên chọn số lượng file / bìa cần nhận, hệ thống giao phần chưa ai nhận.',
              'Duyệt hoàn thành hoặc yêu cầu quét lại kèm ghi chú lỗi; theo dõi số lần scan của từng file.',
              'Phân công người kiểm tra scan; người chưa được giao quyền thấy màn hình riêng.',
            ],
            exit: 'Nhiều người làm cùng lúc mà không ai xử lý trùng file.',
            chips: ['Hàng đợi', 'Kiểm soát chất lượng'],
          },
          {
            title: 'Quản lý file & xuất Excel',
            braking:
              'Hàng nghìn file PDF / ảnh phải đúng cấu trúc thư mục của từng dự án, và mỗi khách hàng muốn dữ liệu xuất ra theo mẫu riêng.',
            apex: [
              'Trình quản lý file dạng cây thư mục (DevExtreme FileManager) lưu trên MongoDB: tải lên, xem trước PDF / ảnh, tìm theo tên, ngày, người thực hiện.',
              'Đọc metadata PDF (số trang, khổ giấy) để tính khối lượng công việc theo số trang.',
              'Kiểm tra file thiếu hoặc sai cấu trúc thư mục chuẩn của dự án; thùng rác, lịch sử thao tác, đóng gói ZIP dung lượng lớn để tải về.',
              'Xuất Excel cấu hình được: chọn cột → nguồn giá trị → công thức tính (EPPlus / SheetJS).',
            ],
            exit: 'Thêm mẫu xuất mới cho khách hàng bằng cấu hình, không phải sửa code.',
            chips: ['DevExtreme', 'iTextSharp', 'EPPlus', 'SharpZipLib'],
          },
          {
            title: 'Báo cáo, dashboard & realtime',
            braking:
              'Quản lý cần nắm tiến độ, năng suất và chi phí của từng người, từng dự án mà không phải tổng hợp tay.',
            apex: [
              'Dashboard tiến độ qua từng công đoạn, tỉ lệ hoàn thành, khối lượng file / trang theo thời gian; dashboard riêng cho nhân viên.',
              'Báo cáo khối lượng, chất lượng, tiến độ và chi phí nhập liệu dựng trên MongoDB Aggregation; lọc theo dự án, người dùng, khoảng thời gian; xuất Excel hoặc in.',
              'SignalR đẩy cập nhật realtime; thông báo đẩy qua Firebase Cloud Messaging.',
            ],
            exit: 'Số liệu tiến độ và năng suất luôn sẵn, cập nhật ngay khi có thay đổi.',
            chips: ['MongoDB Aggregation', 'ApexCharts', 'SignalR', 'Firebase Cloud Messaging'],
          },
        ],
      },

      r04: {
        name: 'Tiếp dân GP',
        short: 'Dự án tại VSD',
        label: 'Full-Stack Developer · Hệ thống tiếp công dân & xử lý đơn thư',
        period: '2025',
        summary:
          'Hệ thống giúp cơ quan nhà nước chuyển công tác tiếp công dân và xử lý đơn khiếu nại, tố cáo, kiến nghị, phản ánh từ giấy tờ sang một nền tảng tập trung, có duyệt nhiều cấp, dashboard và báo cáo theo biểu mẫu.',
        chips: ['Angular 12', 'ASP.NET Web API', 'Entity Framework 6', 'SQL Server', 'OpenXML', 'ApexCharts'],
        turns: [
          {
            title: 'Luồng xử lý đơn thư nhiều cấp',
            braking:
              'Một đơn thư đi qua nhiều người: cán bộ tiếp nhận, lãnh đạo duyệt, cán bộ xử lý, cán bộ phối hợp; làm trên giấy thì khó biết đơn đang ở đâu.',
            apex: [
              'Tiếp nhận đơn từ nhiều nguồn: phiên tiếp dân, bưu chính, đơn vị khác chuyển đến, nguồn khác.',
              'Workflow `DANG_NHAP` → `CHUYEN_DUYET` → lãnh đạo duyệt tiếp nhận / từ chối kèm lý do → `DANG_XU_LY` → lãnh đạo duyệt kết quả → `HOAN_THANH`; nhánh `CHUYEN_DON` sang đơn vị khác.',
              'Phân công cán bộ xử lý chính và phối hợp, hướng xử lý, ý kiến xử lý; đôn đốc đơn chậm.',
              'Lưu vết người tiếp nhận, người duyệt, người xử lý và lý do ở từng bước.',
            ],
            exit: 'Mỗi đơn thư có trạng thái rõ ràng và lịch sử đầy đủ từ lúc nhận tới lúc hoàn thành.',
            chips: ['Workflow nhiều cấp', 'ASP.NET', 'Angular 12'],
          },
          {
            title: 'Phiên tiếp dân & phát hiện trùng đơn',
            braking: 'Một công dân có thể gửi trùng đơn nhiều lần, qua nhiều kênh, khiến cùng một việc bị xử lý lặp.',
            apex: [
              'Ghi nhận phiên tiếp dân thường xuyên và phiên do lãnh đạo chủ trì: nội dung, hình thức tiếp, cán bộ tiếp, tệp đính kèm.',
              'Hồ sơ công dân dùng lại khi công dân quay lại; gom nhiều đơn và phiên tiếp vào cùng một vụ việc.',
              'Tìm đơn trùng, liên kết với đơn gốc và xuất danh sách đơn trùng.',
              'Tra cứu theo người nộp đơn và theo cá nhân / tổ chức bị khiếu nại, tố cáo.',
            ],
            exit: 'Đơn trùng được phát hiện và gom về một mối, tránh xử lý lặp.',
            chips: ['Phát hiện trùng', 'Tra cứu', 'SQL Server'],
          },
          {
            title: 'Dashboard & báo cáo theo biểu mẫu',
            braking: 'Lãnh đạo cần số liệu tổng hợp nhanh và báo cáo đúng biểu mẫu quy định.',
            apex: [
              'Dashboard ApexCharts: phân loại đơn theo nguồn, loại đơn, hướng xử lý; phiên tiếp theo cán bộ, lãnh đạo, chức vụ; lọc theo năm / tháng.',
              'Báo cáo kết quả tiếp công dân, xử lý đơn khiếu nại, tố cáo, kiến nghị, phản ánh và so sánh qua từng năm.',
              'Sinh báo cáo Word từ template bằng OpenXML (thay từ khoá, sinh bảng động); xuất Excel và in trực tiếp.',
              'Chuyển các truy vấn thống kê và phân trang nặng sang Stored Procedure.',
            ],
            exit: 'Báo cáo theo mẫu quy định chỉ cần vài cú bấm.',
            chips: ['ApexCharts', 'OpenXML', 'Stored Procedure'],
          },
        ],
      },

      r05: {
        name: 'Steel GP',
        short: 'Dự án freelance',
        label: 'Full-Stack · làm một mình',
        period: '06/2024 – nay',
        summary:
          'Hệ thống web nội bộ quản lý hàng hoá, công việc và hồ sơ cho một doanh nghiệp sản xuất / gia công thép. Tự làm toàn bộ: phân tích nghiệp vụ, thiết kế CSDL, Backend, Frontend, UI/UX, kiểm thử và triển khai. Đang vận hành thật với 12 người dùng, trên máy tính ở văn phòng và điện thoại ở xưởng.',
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
            'Tồn kho không theo thời gian thực; nhập / xuất ghi tay dễ sai; không cảnh báo khi hàng sắp hết.',
            'Yêu cầu, báo giá, đơn đặt hàng, giao hàng, trả hàng nằm rải rác trong nhiều file Excel.',
            'Mỗi công trình phải soạn hàng chục văn bản Word / Excel có nội dung lặp lại, dễ lệch thông tin.',
            'Bản vẽ, PDF đính kèm nằm rải rác, khó tra cứu.',
          ],
          modules: [
            'Hàng hoá & mã QR',
            'Nhập / xuất kho bằng quét mã',
            'Theo dõi công việc · Báo giá · Vật tư',
            'Hồ sơ: sinh văn bản tự động',
            'Quản lý tập tin',
            'Dashboard & báo cáo',
            'Thông báo realtime',
            'Quản trị & phân quyền động',
          ],
          telemetry: [
            { value: '12', label: 'người dùng thực tế' },
            { value: '6', label: 'tháng vận hành' },
            { value: '200', label: 'văn bản đã sinh' },
            { value: '~130', label: 'REST endpoint' },
            { value: '131', label: 'unit test (xUnit)' },
          ],
          architecture: [
            {
              name: 'Angular 14 SPA',
              items: [
                'Module tải lười theo phân hệ',
                'AuthGuard + MenuGuard · directive `*appCan`',
                'SignalR client · ZXing · SheetJS · ApexCharts',
              ],
            },
            {
              link: 'REST (JWT) · WebSocket (SignalR)',
              name: 'ASP.NET Core 7 Web API',
              items: [
                '21 controller · filter `[CanAction]` · NotificationHub',
                '`TemplateEngineFactory` → engine Word / Excel',
                '26 repository · Unit of Work',
              ],
            },
            {
              link: 'EF Core · StackExchange.Redis · File I/O',
              name: 'Lưu trữ',
              items: ['SQL Server (EF Core + Stored Procedure)', 'Redis cache (fail-safe)', 'Lưu trữ tệp (media)'],
            },
          ],
          results: [
            '12 người dùng, vận hành thật 6 tháng.',
            'Soạn một bộ hồ sơ 19 văn bản: từ 4 tiếng xuống còn 2 tiếng.',
            'Đã sinh 200 văn bản từ hệ thống.',
          ],
          links: [],
        },
        turns: [
          {
            title: 'Engine sinh hồ sơ Word/Excel',
            braking:
              'Mỗi công trình cần hàng chục văn bản nghiệm thu, thanh toán với thông tin lặp lại. Soạn tay tốn thời gian và dễ lệch thông tin giữa các văn bản.',
            apex: [
              'Người dùng tải lên mẫu .docx / .xlsx chứa từ khoá `#tu_khoa#`; hệ thống tự quét và gợi ý trường dữ liệu tương ứng.',
              'Word (OpenXml SDK): thay từ khoá bị Word tách thành nhiều run bằng cách xử lý trên chuỗi ghép của cả đoạn rồi ánh xạ ngược vị trí về từng phần tử Text.',
              'Danh sách người ký thay đổi số lượng → nhân bản đoạn văn (Word) hoặc chèn và sao chép hàng mẫu (Excel), giữ nguyên định dạng của mẫu.',
              '`#banghangmucN#` vẽ nguyên một bảng động: độ rộng cột theo %, nhóm cột cha, tiêu đề lặp khi sang trang; file ra được kiểm tra bằng `OpenXmlValidator`.',
              'Excel (ClosedXML): ghi số / ngày thật để công thức vẫn tính; xuất cả bộ hồ sơ .zip kèm danh mục, văn bản lỗi ghi vào `loi.txt`.',
            ],
            exit: 'Nhập dữ liệu một lần, sinh cả bộ hồ sơ: bộ 19 văn bản từ 4 tiếng xuống 2 tiếng. `ITemplateEngine` + `TemplateEngineFactory` (Strategy / Factory) để mở rộng định dạng mới.',
            chips: ['OpenXml SDK', 'ClosedXML', 'Strategy pattern', 'xUnit'],
          },
          {
            title: 'Quét QR nhập/xuất kho',
            braking:
              'Nhập / xuất ghi tay dễ sai, không ai biết tồn kho thực tế, và không ai được báo khi hàng sắp hết.',
            apex: [
              'Màn nhập / xuất dùng camera điện thoại (ZXing — QR và mã vạch) hoặc máy quét cầm tay.',
              'Hai chế độ: quét từng cái (+1 / −1) hoặc lập phiếu nhiều mặt hàng kèm số lượng.',
              'Chặn xuất âm kho; tồn dưới ngưỡng `WarnAmount` → lưu thông báo và đẩy cảnh báo realtime qua SignalR tới mọi máy đang mở.',
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
              'Frontend: `MenuGuard` chặn route, structural directive `*appCan="\'XOA\'"` ẩn / hiện từng nút; thanh menu bên sinh từ quyền.',
              'Đổi quyền → sự kiện `MenuChanged` qua SignalR, mọi máy đang mở tự tải lại menu, không cần F5.',
              'Các menu quản trị cốt lõi được khoá để quản trị viên không tự khoá hệ thống.',
            ],
            exit: 'Phân quyền đến từng nút bấm, nhất quán giữa giao diện và API, cập nhật realtime.',
            chips: ['ASP.NET Identity', 'JWT + refresh token', 'Angular directive', 'SignalR'],
          },
          {
            title: 'Nhập báo giá từ Excel',
            braking:
              'Mỗi khách hàng gửi báo giá Excel theo bố cục khác nhau, và mã hàng lại nằm trong ảnh QR dán vào file.',
            apex: [
              'Giao diện đọc danh sách sheet bằng SheetJS cho người dùng chọn; mỗi sheet thành một báo giá.',
              '`BaoGiaExcelReader` tự dò dòng tiêu đề trong 30 dòng đầu theo tên cột đã chuẩn hoá (nhiều biến thể "Tên SP / Tên hàng", "SL / Số lượng").',
              'Lấy ngày báo giá bằng regex dạng "ngày … tháng … năm …".',
              'Giải mã ảnh QR nhúng trong Excel bằng ZXing.Net để lấy mã hàng và nối đúng phiếu theo dõi công việc.',
            ],
            exit: 'Nhập được báo giá từ nhiều mẫu khác nhau; lỗi được báo theo từng sheet.',
            chips: ['SheetJS', 'ZXing.Net', 'Regex'],
          },
          {
            title: 'Bộ phân tích công thức chi phí',
            braking: 'Người dùng tự định nghĩa công thức chi phí phát sinh. Dùng `eval` sẽ mở cửa cho injection.',
            apex: [
              'Tự viết tokenizer + parser đệ quy xuống (recursive descent), không dùng `eval`.',
              'Biến `TONG` (tổng cộng), `TREN` (dòng ngay trên), `X` (giá trị nhập); hỗ trợ + − × ÷, % hậu tố, ngoặc, số âm.',
              'Giới hạn độ dài và độ sâu biểu thức, báo lỗi bằng tiếng Việt; API kiểm tra công thức trước khi lưu.',
              'Xử lý số kiểu Việt Nam (`1.250.000,5`) và đọc số tiền thành chữ.',
            ],
            exit: 'Công thức linh hoạt cho người dùng mà không đánh đổi bảo mật.',
            chips: ['Recursive descent', 'Tokenizer', 'Bảo mật'],
          },
          {
            title: 'Giao diện cho xưởng',
            braking:
              'Người dùng là công nhân xưởng cơ khí: nhiều người lớn tuổi, dùng điện thoại Android tầm trung, ánh sáng chói, tay dính dầu hoặc đeo găng, Wi-Fi chập chờn.',
            apex: [
              'Bộ quy chuẩn giao diện: điểm chạm lớn, độ tương phản phù hợp, xác nhận thao tác nguy hiểm.',
              'Rà soát giao diện cũ: 5 lớp CSS chồng nhau, 159 lần `!important`, 25 cỡ chữ, 3 hệ màu xám → hợp nhất.',
              'Design System "Xưởng Dịu": xanh thép + hổ phách dịu, thang chữ 6 bậc, token CSS tiền tố `ws-`, số `tabular-nums` như phiếu kho.',
              'Máy tính hiện dạng bảng, điện thoại hiện dạng thẻ; dán dữ liệu thẳng từ Excel (tự viết bộ đọc TSV), di chuyển bằng bàn phím trong bảng.',
            ],
            exit: 'Giao diện dùng được ngay tại xưởng; kèm tài liệu hướng dẫn sử dụng cho người dùng cuối.',
            chips: ['Design System', 'TailwindCSS', 'Angular Material'],
          },
          {
            title: 'Quy trình & kiểm thử',
            braking: 'Làm một mình trên hệ thống đang chạy thật: mọi thay đổi phải an toàn và có lý do.',
            apex: [
              'Viết tài liệu thiết kế trước khi code (module Hồ sơ ~470 dòng): yêu cầu, giả định đã xác nhận với người dùng, mô hình dữ liệu, API, trường hợp biên.',
              'Nhật ký quyết định: mỗi quyết định ghi lại phương án thay thế và lý do chọn.',
              '131 unit test (xUnit, 26 file) cho module Hồ sơ: run bị tách, bảng gộp ô, chữ ký dạng bảng, dòng tổng cộng…; kiểm thử repository trên EF Core InMemory.',
              'Làm việc trực tiếp với người dùng cuối, làm từng vòng theo phản hồi.',
            ],
            exit: 'Module phức tạp nhất có lưới test bảo vệ mỗi lần thay đổi.',
            chips: ['xUnit', 'EF Core InMemory', 'Nhật ký quyết định'],
          },
          {
            title: 'Hiệu năng & độ bền',
            braking: 'Tìm kiếm trên dữ liệu lớn phải nhanh, và Redis trục trặc không được kéo sập cả hệ thống.',
            apex: [
              'Stored Procedure cho tìm kiếm / phân trang (`Proc_SearchProducts`), EF Core cho thêm, sửa, xoá.',
              'Cache chi tiết sản phẩm trên Redis, tự xoá cache khi sửa / xoá.',
              'Redis fail-safe: timeout ngắn, `AbortOnConnectFail=false`, extension `Try*` → tự quay về truy vấn CSDL.',
              'Sửa lỗi file .docx / .xlsx xuất ra bị hỏng bằng cách ép `System.IO.Packaging` 8.0.1.',
            ],
            exit: 'Hệ thống vẫn phục vụ khi Redis không sẵn sàng.',
            chips: ['Redis', 'Stored Procedure', 'EF Core'],
          },
        ],
      },

      r06: {
        name: 'HaUI GP',
        short: 'Học vấn',
        label: 'Đại học Công nghiệp Hà Nội',
        period: '2020 – 2024',
        summary: 'Cử nhân Kỹ thuật phần mềm, Trường Đại học Công nghiệp Hà Nội.',
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
              'Trưởng nhóm 4 người phát triển phần mềm điểm danh tự động bằng nhận diện khuôn mặt thời gian thực.',
              'Xây dựng trên C# WPF và Emgu CV.',
            ],
            exit: 'Độ chính xác nhận diện 70%; đồ án đạt điểm A.',
            chips: ['C#', 'WPF', 'Emgu CV'],
          },
        ],
      },

      r07: {
        name: 'Pit Garage',
        short: 'Kỹ năng',
        label: 'Phát triển xe',
        period: '',
        summary:
          'Bộ kỹ năng chia theo bộ phận của xe. Mỗi nâng cấp ghi rõ đã dùng vào việc gì và ở chặng nào — bấm nhãn chặng để xem.',
        chips: [],
        turns: [
          {
            part: 'aero',
            title: 'Aerodynamics',
            sub: 'Frontend',
            desc: 'Phần người dùng nhìn thấy và chạm vào: giao diện phải gọn, nhanh và dễ dùng.',
            upgrades: [
              {
                name: 'Angular 12 / 14 · TypeScript · RxJS',
                note: 'Module tải lười theo phân hệ, guard, interceptor, structural directive `*appCan` ẩn / hiện từng nút theo quyền.',
                races: ['r01', 'r02', 'r03', 'r04', 'r05'],
              },
              {
                name: 'TailwindCSS · Angular Material',
                note: 'Dựng giao diện bám sát SRS; Design System "Xưởng Dịu" với token CSS riêng cho người dùng ở xưởng.',
                races: ['r01', 'r05'],
              },
              {
                name: 'DevExtreme',
                note: 'Trình quản lý file dạng cây thư mục và bảng dữ liệu lớn.',
                races: ['r03'],
              },
              {
                name: 'ApexCharts',
                note: 'Dashboard tiến độ số hoá, thống kê đơn thư, báo cáo kho.',
                races: ['r03', 'r04', 'r05'],
              },
              {
                name: 'SheetJS · ZXing',
                note: 'Đọc và xuất Excel ngay trên trình duyệt; quét QR / mã vạch bằng camera điện thoại.',
                races: ['r03', 'r05'],
              },
            ],
          },
          {
            part: 'chassis',
            title: 'Chassis',
            sub: 'Backend',
            desc: 'Khung chịu lực của hệ thống: API, luồng nghiệp vụ, xác thực và realtime.',
            upgrades: [
              {
                name: 'ASP.NET Web API (.NET Framework)',
                note: 'API cho các luồng nghiệp vụ hành chính nhiều bước, duyệt nhiều cấp.',
                races: ['r01', 'r02', 'r03', 'r04'],
              },
              {
                name: 'ASP.NET Core 7',
                note: '21 controller, filter `[CanAction]` chặn API theo cặp mã thao tác @ route.',
                races: ['r05'],
              },
              {
                name: 'Entity Framework 6 / Core 7',
                note: 'Thêm, sửa, xoá qua ORM; repository + Unit of Work.',
                races: ['r04', 'r05'],
              },
              {
                name: 'ASP.NET Identity · OAuth · JWT',
                note: 'Đăng nhập bằng token, refresh token, phân quyền đến từng nút bấm.',
                races: ['r03', 'r04', 'r05'],
              },
              {
                name: 'SignalR · Firebase Cloud Messaging',
                note: 'Đẩy cảnh báo tồn kho và cập nhật tiến độ realtime; đổi quyền không cần F5; thông báo đẩy.',
                races: ['r03', 'r05'],
              },
              {
                name: 'OpenXml · ClosedXML · EPPlus',
                note: 'Engine sinh văn bản Word / Excel từ mẫu, báo cáo theo biểu mẫu, xuất Excel cấu hình được.',
                races: ['r03', 'r04', 'r05'],
              },
            ],
          },
          {
            part: 'power',
            title: 'Power Unit',
            sub: 'Cơ sở dữ liệu & hiệu năng',
            desc: 'Nguồn sức mạnh: lưu trữ, truy vấn và giữ tốc độ khi dữ liệu lớn dần.',
            upgrades: [
              {
                name: 'SQL Server · Stored Procedure',
                note: 'Thiết kế lược đồ; chuyển tra cứu, thống kê và phân trang nặng sang Stored Procedure.',
                races: ['r01', 'r02', 'r04', 'r05'],
              },
              {
                name: 'MongoDB · Aggregation Pipeline',
                note: 'Báo cáo năng suất, tiến độ và phân trang trên dữ liệu lớn.',
                races: ['r01', 'r03'],
              },
              {
                name: 'Redis',
                note: 'Cache fail-safe: Redis trục trặc thì tự quay về truy vấn CSDL, hệ thống vẫn chạy.',
                races: ['r05'],
              },
              {
                name: 'Tối ưu truy vấn',
                note: 'Dashboard và tra cứu không nghẽn khi khối lượng hồ sơ tăng.',
                races: ['r02', 'r04'],
              },
            ],
          },
          {
            part: 'durability',
            title: 'Durability',
            sub: 'Triển khai, kiểm thử & công cụ',
            desc: 'Giữ xe chạy hết chặng: đưa hệ thống lên máy chủ thật, kiểm thử và xử lý sự cố.',
            upgrades: [
              {
                name: 'IIS · on-premise',
                note: 'Tự triển khai lên máy chủ của khách hàng, cấu hình và xử lý sự cố tại chỗ.',
                races: ['r01'],
              },
              {
                name: 'Firebase Hosting',
                note: 'Triển khai ứng dụng web.',
                races: [],
              },
              {
                name: 'xUnit · EF Core InMemory',
                note: '131 unit test cho module Hồ sơ, kiểm thử repository không cần CSDL thật.',
                races: ['r05'],
              },
              {
                name: 'Git · Swagger / OpenAPI',
                note: 'Quản lý mã nguồn, mô tả và thử API.',
                races: [],
              },
              {
                name: 'Ngôn ngữ',
                note: 'Tiếng Việt (bản ngữ), tiếng Anh (trung cấp).',
                races: [],
              },
            ],
          },
        ],
      },
    },
  };
})();
