/*
 * Hình học các đường đua (không chứa chữ — chữ nằm trong content.vi.js / content.en.js).
 *
 * - points : các góc của đường đua trong khung 1000 × 600, theo chiều chạy xe.
 *            Đường đua là một vòng kín; vạch xuất phát nằm giữa điểm cuối và điểm đầu.
 * - radius : bán kính bo cua (tự giới hạn theo độ dài cạnh).
 * - turns  : chỉ số các góc được đánh dấu là turn, theo thứ tự T1, T2, ...
 *            Số phần tử PHẢI bằng số turn trong content của chặng (có test kiểm tra).
 * - status : 'grid' | 'live' | 'finished' | 'garage' — nhãn trạng thái trên lịch mùa giải.
 * - feature: true → chặng chính (Feature Race).
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});

  PW.tracks = [
    {
      id: 'r01',
      status: 'grid',
      radius: 90,
      points: [
        [160, 460],
        [300, 150],
        [840, 140],
        [860, 460],
      ],
      turns: [0, 1, 2],
    },
    {
      id: 'r02',
      status: 'live',
      radius: 80,
      points: [
        [140, 450],
        [180, 160],
        [560, 110],
        [860, 240],
        [800, 470],
      ],
      turns: [1, 2, 3],
    },
    {
      id: 'r03',
      status: 'finished',
      radius: 70,
      points: [
        [120, 330],
        [260, 120],
        [520, 250],
        [860, 120],
        [870, 470],
        [210, 490],
      ],
      turns: [1, 2, 3],
    },
    {
      id: 'r04',
      status: 'live',
      feature: true,
      radius: 55,
      points: [
        [110, 470],
        [90, 250],
        [230, 110],
        [420, 180],
        [520, 90],
        [760, 90],
        [900, 220],
        [780, 330],
        [900, 470],
        [560, 500],
        [400, 380],
        [260, 500],
      ],
      turns: [1, 2, 3, 4, 6, 7, 8, 10],
    },
    {
      id: 'r05',
      status: 'finished',
      radius: 130,
      points: [
        [170, 440],
        [200, 160],
        [800, 150],
        [830, 440],
      ],
      turns: [1, 2],
    },
    {
      id: 'r06',
      status: 'garage',
      radius: 70,
      points: [
        [130, 420],
        [160, 150],
        [480, 240],
        [840, 130],
        [870, 460],
        [480, 390],
      ],
      turns: [1, 2, 3, 4],
    },
  ];
})();
