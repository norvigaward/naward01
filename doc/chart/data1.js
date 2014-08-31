var colors = Highcharts.getOptions().colors,
  categories = ['APACHE', 'NGINX', 'IIS', 'Empty', 'GSE', 'others', 'LITESPEED', 'COYOTE', 'YTS'],
  data = [{
    y: 118101648,
    color: colors[0],
    drilldown: {
      name: 'APACHE',
      categories: ['APACHE others', 'APACHE 2.2.22', 'APACHE 2.2.3', 'APACHE 2.2.15', 'APACHE 2', 'APACHE 2.2.25', 'APACHE 2.2.26', 'APACHE 2.2.16',
        'APACHE 2.2.24', 'APACHE 2.2.14', 'APACHE 2.2', 'APACHE 2.2.23', 'APACHE 2.2.9', 'APACHE 2.2.17', 'APACHE 2.2.21', 'APACHE 2.4.6', 'APACHE 2.0.52',
        'APACHE 2.2.8', 'APACHE 2.0.64', 'APACHE 2.4.7', 'APACHE 1.3.41', 'APACHE 2.2.20', 'APACHE 2.0.63', 'APACHE 1.3.42', 'APACHE 2.2.11',
        'APACHE 2.2.19', 'APACHE 2.2.12', 'APACHE 1.3.29', 'APACHE 1.3.37', 'APACHE 2.2.10', 'APACHE 2.2.13', 'APACHE 2.0.54', 'APACHE 1.3.33',
        'APACHE 2.2.4', 'APACHE 2.2.0', 'APACHE 2.0.59', 'APACHE 2.2.6', 'APACHE 1.3.34', 'APACHE 2.0.46', 'APACHE 2.4.4', 'APACHE 2.4.3', 'APACHE 1.3.27',
        'APACHE 2.0.55', 'APACHE 1.3.39', 'APACHE 2.0.51', 'APACHE 1.3.26', 'APACHE 2.4.8', 'APACHE 2.0.47', 'APACHE 1.3.31', 'APACHE 2.2.2',
        'APACHE 2.0.50', 'APACHE 2.0.53', 'APACHE 1.9', 'APACHE 2.4', 'APACHE 2.2.18', 'APACHE 2.0', 'APACHE 2.4.2', 'APACHE 1.3.36', 'APACHE 2.0.58',
        'APACHE 2.0.40', 'APACHE 6.6.6', 'APACHE 2.0.49', 'APACHE 2.0.61', 'APACHE 1.3.28', 'APACHE 2.4.1', 'APACHE 1.3.22', 'APACHE 1.3.35',
        'APACHE 1.3.12', 'APACHE 1.3.19', 'APACHE 1.3.9', 'APACHE 1.3.20', 'APACHE 2.0.65', 'APACHE 1.3', 'APACHE 2.0.48', 'APACHE 2.2.', 'APACHE 2.',
        'APACHE 1.3.23', 'APACHE 1.5', 'APACHE 1.6', 'APACHE 2.3.8', 'APACHE 2.0.44', 'APACHE 1.2.5', 'APACHE 1.4.0', 'APACHE 1.8', 'APACHE 2.2.1',
        'APACHE 1.3.6', 'APACHE 1.3.14', 'APACHE 1.2.6', 'APACHE 1.3.', 'APACHE 2.0.43', 'APACHE 2.4.0', 'APACHE 1.3.32', 'APACHE 1.3.24', 'APACHE 1.3.3',
        'APACHE 1.3.404', 'APACHE 1.2.0', 'APACHE 2.0.41', 'APACHE 2.6', 'APACHE 1.1.1', 'APACHE 666', 'APACHE 2.0.39', 'APACHE 1.1.2', 'APACHE 1.33.7',
        'APACHE 1.3.4', 'APACHE 3', 'APACHE 8.0', 'APACHE 2.0.45', 'APACHE 2.0.', 'APACHE 2.1.4', 'APACHE 3.2.1', 'APACHE 1.3.17', 'APACHE 2.0.0',
        'APACHE 2.4.9', 'APACHE 1.1.3', 'APACHE 2.1.9', 'APACHE 2.0.42', 'APACHE 1.3.37.', 'APACHE 1.3.11', 'APACHE 1.3.1.1', 'APACHE 2.0.35', 'APACHE 1',
        'APACHE 1.0.5', 'APACHE 0.0', 'APACHE 1.3.3.7', 'APACHE 2.2.112', 'APACHE 4.2.0', 'APACHE 2.2.22.2', 'APACHE 2.3.5', 'APACHE 1.3.0', 'APACHE 1.2.4',
        'APACHE 2.9.0', 'APACHE 2.4.5', 'APACHE 2.5.10', 'APACHE 2.3.16', 'APACHE 2.3.14', 'APACHE 7.7.777', 'APACHE 2.3.6', 'APACHE 1.1.22', 'APACHE 1.2',
        'APACHE 5', 'APACHE 3.5.07', 'APACHE 4', 'APACHE 1.0', 'APACHE 10', 'APACHE 2.23', 'APACHE 2.18.28', 'APACHE 2.4.11', 'APACHE 1.32', 'APACHE 1.2.1',
        'APACHE 1.3.2', 'APACHE 1.0.2', 'APACHE 5.5.5', 'APACHE 2.3.0', 'APACHE 3.4.0', 'APACHE 2.3', 'APACHE 1.0.0', 'APACHE 5.2.0', 'APACHE 0.0.0',
        'APACHE 2.5.0', 'APACHE 1.1', 'APACHE 1.2.8.6', 'APACHE 1.3.7', 'APACHE 1.3.1', 'APACHE 2.6.0', 'APACHE 2.00', 'APACHE 0.8.54', 'APACHE 0.8.4',
        'APACHE 2.1.2', 'APACHE 6.0', 'APACHE 3.4.1', 'APACHE 1.1.0', 'APACHE 9.9.9', 'APACHE 0.9', 'APACHE 2.2.17.2', 'APACHE 1.0.11.0', 'APACHE 3.1.21',
        'APACHE 2.3.11', 'APACHE 3.0', 'APACHE 2.0.36', 'APACHE 4.2.7', 'APACHE 2.1.3', 'APACHE 7.0', 'APACHE 2.0.3', 'APACHE 0.6.5', 'APACHE 2000',
        'APACHE 9.9.99', 'APACHE 2.6.6', 'APACHE 2.3.15', 'APACHE 1.7.5', 'APACHE 1.2.3', 'APACHE 3.3.3', 'APACHE 2.1', 'APACHE 0.9.0', 'APACHE 1.3.8',
        'APACHE 1.0.1', 'APACHE 2.0.28', 'APACHE 2.214', 'APACHE 0.0.05', 'APACHE 2.4.15', 'APACHE 2.2.27'
      ],
      data: [65610292, 9179165, 6684794, 4802906, 3667894, 3188403, 3137643, 2973913, 2179334, 1957907, 1518089, 1464262, 1065519, 932744, 896183, 788424,
        696072, 687247, 661210, 522739, 486289, 481094, 459872, 424761, 419359, 334157, 276676, 206756, 186047, 168023, 143641, 141835, 141577, 138857,
        132148, 114980, 113572, 98685, 87972, 86662, 71843, 71049, 54007, 47180, 40200, 39211, 38932, 32712, 31306, 31208, 28044, 26772, 26357, 25516,
        25319, 23488, 21748, 19860, 16512, 16135, 15134, 14944, 14371, 10630, 8647, 6337, 6175, 5982, 5669, 5001, 4861, 4773, 4591, 4475, 3553, 3215, 2927,
        2502, 2232, 2000, 1987, 1839, 1672, 1592, 1458, 1330, 1304, 1228, 1053, 970, 953, 923, 907, 879, 750, 607, 593, 555, 458, 386, 348, 330, 330, 326,
        323, 319, 308, 300, 294, 292, 281, 259, 251, 209, 206, 168, 160, 155, 151, 143, 138, 129, 120, 102, 89, 86, 84, 82, 72, 70, 65, 62, 50, 47, 42, 41,
        40, 36, 32, 29, 28, 28, 27, 26, 24, 23, 23, 23, 20, 17, 17, 17, 16, 14, 14, 14, 14, 13, 12, 12, 10, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 3,
        3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      color: colors[0]
    }
  }, {
    y: 38331777,
    color: colors[1],
    drilldown: {
      name: 'NGINX',
      categories: ['NGINX others', 'NGINX 1.4.6', 'NGINX 1.4.4', 'NGINX 1.1.19', 'NGINX 1.0.15', 'NGINX 1.4.1', 'NGINX 1.4.2', 'NGINX 1.2.6', 'NGINX 1.2.1',
        'NGINX 0.7.67', 'NGINX 0.8.54', 'NGINX 1.4.5', 'NGINX 0.7.65', 'NGINX 1.2.4', 'NGINX 1.4.3', 'NGINX 1.2.9', 'NGINX 1.2.7', 'NGINX 1.2.3',
        'NGINX 0.8.55', 'NGINX 1.0.5', 'NGINX 1.2.5', 'NGINX 1.2.8', 'NGINX 1.5.10', 'NGINX 1.4.0', 'NGINX 1.0.14', 'NGINX 0.8.53', 'NGINX 1.0.10',
        'NGINX 1.2.0', 'NGINX 1.0.6', 'NGINX 1.0.11', 'NGINX 1.0.4', 'NGINX 1.2.2', 'NGINX 1.0.0', 'NGINX 1.5.7', 'NGINX 0.7.62', 'NGINX 0.6.32',
        'NGINX 1.0.12', 'NGINX 1.5.6', 'NGINX 1.0.8', 'NGINX 1.5.0', 'NGINX 0.6.39', 'NGINX 1.5.8', 'NGINX 1.0.13', 'NGINX 1.1.16', 'NGINX 1.5.2',
        'NGINX 0.7.64', 'NGINX 1.5.3', 'NGINX 1.5.9', 'NGINX 0.5.33', 'NGINX 0.8.35', 'NGINX 1.5.11', 'NGINX 1.3.5', 'NGINX 1.5.1', 'NGINX 1.0.9',
        'NGINX 0.9.4', 'NGINX 1.1.5', 'NGINX 1.1.1', 'NGINX 0.7.61', 'NGINX 1.0.1', 'NGINX 1.3.8', 'NGINX 0.8.52', 'NGINX 1.0.2', 'NGINX 1.5.4',
        'NGINX 1.3.0', 'NGINX 0.8.51', 'NGINX 1.3.11', 'NGINX 1.5.5', 'NGINX 1.1.17', 'NGINX 0.7.46', 'NGINX 1.1.14', 'NGINX 1.3.7', 'NGINX 1.1.0',
        'NGINX 0.6.35', 'NGINX 1.3.13', 'NGINX 0.7.63', 'NGINX 0.8.32', 'NGINX 1.0.3', 'NGINX 0.6.36', 'NGINX 1.3.15', 'NGINX 0.8.20', 'NGINX 0.5.32',
        'NGINX 1.1.13', 'NGINX 0.6.33', 'NGINX 1.3.9', 'NGINX 0.9.6', 'NGINX 1.3.6', 'NGINX 0.5.35', 'NGINX 0.8.46', 'NGINX 0.6.34', 'NGINX 0.5.34',
        'NGINX 1.3.14', 'NGINX 1.3.1', 'NGINX 0.7.59', 'NGINX 1.1.15', 'NGINX 0.8.34', 'NGINX 0.5.38', 'NGINX 0.6.37', 'NGINX 0.5.36', 'NGINX 0.8.40',
        'NGINX 0.6.16', 'NGINX 1.1.18', 'NGINX 1.3.12', 'NGINX 0.8.4', 'NGINX 1.1.12', 'NGINX 1.1.11', 'NGINX 0.8.50', 'NGINX 1.1.4', 'NGINX 0.6.31',
        'NGINX 1.1.10', 'NGINX 0.8.49', 'NGINX 1.3.3', 'NGINX 0.8.36', 'NGINX 1.3.16', 'NGINX 1.1.9', 'NGINX 1.3.4', 'NGINX 0.8.15', 'NGINX 0.9.3',
        'NGINX 1.1.8', 'NGINX 0.7.66', 'NGINX 1.3.10', 'NGINX 0.8.38', 'NGINX 0.4.13', 'NGINX 0.7.69', 'NGINX 0.7.68', 'NGINX 1.1.7', 'NGINX 0.5.26',
        'NGINX 0.8.19', 'NGINX 0.7.30', 'NGINX 0.8.44', 'NGINX 0.5.7', 'NGINX 0.7.17', 'NGINX 1.1.3', 'NGINX 0.7.51', 'NGINX 3.0', 'NGINX 0.5.31',
        'NGINX 0.8.24', 'NGINX 0.3.54', 'NGINX 0.7.60', 'NGINX 0.7.19', 'NGINX 0.8.33', 'NGINX 0.8.47', 'NGINX 0.6.25', 'NGINX 0.9.5', 'NGINX 0.8.9',
        'NGINX 0.6.29', 'NGINX 0.8.27', 'NGINX 0.8.30', 'NGINX 1.1.6', 'NGINX 0.5.17', 'NGINX 0.7.20', 'NGINX 0.6.4', 'NGINX 1.1.2', 'NGINX 1.3.2',
        'NGINX 0.5.30', 'NGINX 0.6.38', 'NGINX 0.7.53', 'NGINX 0.8.45', 'NGINX 0.8.5', 'NGINX 1.2', 'NGINX 0.8.39', 'NGINX 0.7.14', 'NGINX 0.7.52',
        'NGINX 0.5.18', 'NGINX 0.5.14', 'NGINX 0.8.41', 'NGINX 0.9.2', 'NGINX 0.7.43', 'NGINX 0.7.22', 'NGINX 0.7.38', 'NGINX 0.6.28', 'NGINX 0.5.19',
        'NGINX 0.6.13', 'NGINX 0.8.31', 'NGINX 0.8.16', 'NGINX 0.7.55', 'NGINX 0.8.10', 'NGINX 0.8.43', 'NGINX 0.8.37', 'NGINX 0.6.9', 'NGINX 0.3.30',
        'NGINX 0.8.13', 'NGINX 403', 'NGINX 1', 'NGINX 0.6.1', 'NGINX 0.5.15', 'NGINX 0.7.44', 'NGINX 1.3', 'NGINX 1.0', 'NGINX 0.7.9', 'NGINX 1.2.1.1431',
        'NGINX 1.2.1.2893', 'NGINX 0.5.8', 'NGINX 1.2.1.1345', 'NGINX 0.7.50', 'NGINX 1.2.1.2854', 'NGINX 0.5.20', 'NGINX 0.8.48', 'NGINX 0.8.17',
        'NGINX 0.7.1', 'NGINX 0.7.31', 'NGINX 0.8.21', 'NGINX 9.9.9', 'NGINX 0.8.22', 'NGINX 0.9.1', 'NGINX 0.4.2', 'NGINX 10.07', 'NGINX 0.6.30',
        'NGINX 0.8.42', 'NGINX 0.6.22', 'NGINX 0.7.58', 'NGINX 0.6.26', 'NGINX 6.6.6', 'NGINX 0.5.37', 'NGINX 0.5.4', 'NGINX 1.0.7', 'NGINX 1.4.7',
        'NGINX 0', 'NGINX 0.3.48', 'NGINX 1.', 'NGINX 0.5.12', 'NGINX 0.7.6', 'NGINX 0.8.29', 'NGINX 0.4.12', 'NGINX 0.4.5', 'NGINX 1.5.12', 'NGINX 0.5.22',
        'NGINX 0.9.7', 'NGINX 0.4.14', 'NGINX 0.5.5', 'NGINX 18', 'NGINX 0.7.56', 'NGINX 0.5.28', 'NGINX 0.7.3', 'NGINX 0.7.7', 'NGINX 0.5.23', 'NGINX 42',
        'NGINX 0.5.10', 'NGINX 0.7.21', 'NGINX 10.0.1', 'NGINX 0.0.0', 'NGINX 0.9.0', 'NGINX 10.02.3', 'NGINX 0.8.3', 'NGINX 0.4.6', 'NGINX 1.1',
        'NGINX 0.8.28', 'NGINX 0.8.7', 'NGINX 0.5.0', 'NGINX 0.8', 'NGINX 0.8.6', 'NGINX 0.8.14', 'NGINX 0.6.24', 'NGINX 0.6.3', 'NGINX 0.7',
        'NGINX 0.7.54', 'NGINX 0.7.40', 'NGINX 1.2.15', 'NGINX 0.6.14', 'NGINX 0.6.21', 'NGINX 0.7.33', 'NGINX 0.7.37', 'NGINX 0.7.39', 'NGINX 0.7.57',
        'NGINX 1.5.12.1', 'NGINX 0.5.24', 'NGINX 0.1.28', 'NGINX 0.7.32', 'NGINX 0.3.17', 'NGINX 71', 'NGINX 0.7.47', 'NGINX 0.7.42', 'NGINX 0.8.8',
        'NGINX 0.3.57', 'NGINX 1.5.6.4', 'NGINX 0.6.5', 'NGINX 0.2.12', 'NGINX 1.4.134'
      ],
      data: [23873204, 5491120, 955518, 846077, 686427, 664328, 640801, 559758, 527357, 393797, 269158, 268488, 252386, 250422, 211545, 194561, 156689,
        144339, 110311, 99353, 78307, 77950, 74076, 72959, 69863, 67727, 66917, 66610, 63056, 60244, 60102, 53777, 49150, 45795, 44162, 43857, 41971, 34563,
        34518, 27577, 26767, 24258, 21895, 21857, 21605, 19623, 19315, 18261, 17761, 16021, 15505, 14432, 14266, 13007, 12881, 12712, 12617, 11218, 10944,
        10912, 10907, 10278, 8756, 8636, 8135, 7568, 6743, 6196, 5941, 5848, 5830, 5678, 5520, 5216, 4989, 4876, 4814, 4564, 4420, 4400, 4371, 4355, 4208,
        4208, 4193, 4063, 4053, 3534, 3531, 3249, 3235, 3108, 2967, 2921, 2889, 2879, 2825, 2789, 2667, 2436, 2320, 2302, 2289, 2029, 1969, 1934, 1906,
        1899, 1874, 1852, 1849, 1780, 1714, 1696, 1664, 1617, 1337, 1308, 1227, 1187, 1143, 1142, 1123, 1077, 1049, 986, 984, 968, 954, 945, 927, 802, 770,
        749, 715, 692, 691, 638, 619, 618, 584, 582, 573, 566, 544, 539, 524, 519, 509, 477, 463, 457, 445, 420, 401, 371, 368, 343, 332, 320, 275, 275,
        252, 223, 205, 203, 191, 187, 180, 178, 174, 161, 159, 158, 155, 138, 130, 129, 129, 124, 123, 123, 119, 117, 111, 104, 102, 95, 95, 95, 87, 87, 82,
        80, 79, 79, 74, 73, 63, 53, 51, 51, 49, 47, 47, 47, 47, 43, 43, 37, 37, 34, 33, 32, 31, 30, 30, 30, 29, 28, 27, 24, 21, 18, 16, 15, 14, 14, 14, 13,
        11, 11, 10, 10, 10, 9, 9, 8, 8, 8, 7, 7, 7, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      color: colors[1]
    }
  }, {
    y: 35709161,
    color: colors[2],
    drilldown: {
      name: 'IIS',
      categories: ['IIS 7.5', 'IIS 6.0', 'IIS 7.0', 'IIS 8.0', 'IIS 5.0', 'IIS 8.5', 'IIS others', 'IIS 4.1', 'IIS 4.0', 'IIS 9.0', 'IIS 5.1', 'IIS 6.6',
        'IIS 0.0', 'IIS 1.0', 'IIS 7.7', 'IIS 6.5', 'IIS 7.1.05', 'IIS 9.2', 'IIS 8', 'IIS 7.9.9', 'IIS 2.4', 'IIS 4.3', 'IIS 3.0', 'IIS 6.1', 'IIS 5.5',
        'IIS 7.5.5', 'IIS 7', 'IIS 2.0', 'IIS 3', 'IIS 5', 'IIS 6.0.0', 'IIS 4.2', 'IIS 7.5.1.1.0.13', 'IIS 10', 'IIS 66.6', 'IIS 0.9', 'IIS 1113',
        'IIS 12.0', 'IIS 11.0', 'IIS 1.5', 'IIS 2003', 'IIS 5.2', 'IIS 6.2.8', 'IIS 6.1.404', 'IIS 10.0', 'IIS 5.0.', 'IIS 6.02', 'IIS 1089',
        'IIS 7.5.1.0.13', 'IIS 7.145.60', 'IIS 123.0', 'IIS 6.0.5', 'IIS 7.2', 'IIS 7.6', 'IIS 6.6.6', 'IIS 106', 'IIS 7.7.5'
      ],
      data: [16912897, 11784563, 4667180, 1636682, 399712, 232891, 35967, 12379, 7643, 3068, 3004, 2086, 2054, 1484, 1282, 1232, 1215, 747, 600, 535, 514,
        282, 174, 173, 173, 159, 87, 70, 61, 55, 44, 24, 21, 13, 13, 12, 10, 7, 7, 6, 5, 4, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      color: colors[2]
    }
  }, {
    y: 20414366,
    color: colors[3],
    drilldown: {
      name: 'Empty',
      categories: ['Empty N/A'],
      data: [20414366],
      color: colors[3]
    }
  }, {
    y: 19333051,
    color: colors[4],
    drilldown: {
      name: 'GSE',
      categories: ['GSE others', 'GSE 3.3'],
      data: [19333033, 18],
      color: colors[4]
    }
  }, {
    y: 12584169,
    color: colors[5],
    drilldown: {
      name: 'others',
      categories: ['others others'],
      data: [12584169],
      color: colors[5]
    }
  }, {
    y: 2630129,
    color: colors[6],
    drilldown: {
      name: 'LITESPEED',
      categories: ['LITESPEED others', 'LITESPEED 4.2.7', 'LITESPEED 4.1.13', 'LITESPEED 4.1.12', 'LITESPEED 6', 'LITESPEED 3.3.15', 'LITESPEED 4.2.6',
        'LITESPEED 4.0.14'
      ],
      data: [2618632, 7617, 1942, 1192, 700, 37, 8, 1],
      color: colors[6]
    }
  }, {
    y: 1721632,
    color: colors[7],
    drilldown: {
      name: 'COYOTE',
      categories: ['COYOTE 1.1', 'COYOTE others', 'COYOTE 1.0'],
      data: [1716417, 3789, 1426],
      color: colors[7]
    }
  }, {
    y: 1139140,
    color: colors[8],
    drilldown: {
      name: 'YTS',
      categories: ['YTS 1.20.28', 'YTS 1.19.11', 'YTS 1.20.10', 'YTS 1.19.8', 'YTS 1.20.13', 'YTS 1.20.19', 'YTS 1.18.5'],
      data: [602046, 422907, 88201, 19848, 5957, 178, 3],
      color: colors[8]
    }
  }];
