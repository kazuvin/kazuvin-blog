import { SVGProps } from "react";

export default function ChaosGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 1422 800"
      {...props}
    >
      <defs>
        <filter
          id="uuunion-blur"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="22 22"
            result="blur"
          ></feGaussianBlur>
          <feDropShadow
            stdDeviation="9.846153846153847"
            in="blur"
            dx="8"
            dy="8"
            floodColor="hsl(167, 52%, 78%)"
            floodOpacity="0.19"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          ></feDropShadow>
        </filter>
        <filter
          id="uuunion-blur2"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="22 22"
            result="blur"
          ></feGaussianBlur>
          <feDropShadow
            stdDeviation="9.846153846153847"
            in="blur"
            dx="-8"
            dy="-8"
            floodColor="hsl(167, 52%, 78%)"
            floodOpacity="0.19"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          ></feDropShadow>
        </filter>
        <linearGradient
          gradientTransform="rotate(0, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="uuunion-grad"
        >
          <stop stopColor="hsl(1.4, 100%, 67%)" offset="10%"></stop>
          <stop stopColor="hsl(167, 52%, 78%)" offset="90%"></stop>
        </linearGradient>
        <linearGradient
          gradientTransform="rotate(135, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="uuunion-grad2"
        >
          <stop stopColor="hsl(1.4, 100%, 67%)" offset="25%"></stop>
          <stop stopColor="hsl(167, 52%, 78%)" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          gradientTransform="rotate(343, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="uuunion-grad3"
        >
          <stop stopColor="hsl(1.4, 100%, 67%)" offset="0%"></stop>
          <stop stopColor="hsl(167, 52%, 78%)" offset="75%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M-140.75 -89.23Q-127.47 -88.56 -114.18 -87.21 -100.9 -85.27 -87.62 -82.92 -74.33 -80.33 -61.05 -77.72 -47.77 -75.29 -34.48 -73.23 -21.2 -71.71 -7.91 -70.86 5.36 -70.74 18.64 -71.35 31.93 -72.66 45.21 -74.55 58.49 -76.88 71.78 -79.46 85.06 -82.08 98.34 -84.53 111.63 -86.62 124.91 -88.18 138.2 -89.09 151.48 -89.27 164.76 -88.71 178.05 -87.45 191.33 -85.6 204.61 -83.3 217.9 -80.73 231.18 -78.11 244.47 -75.64 257.75 -73.51 271.03 -71.9 284.32 -70.94 297.6 -70.71 310.88 -71.21 324.17 -72.42 337.45 -74.23 350.74 -76.51 364.02 -79.06 377.3 -81.68 390.59 -84.18 403.87 -86.33 417.16 -87.99 430.44 -89 443.72 -89.29 457.01 -88.84 470.29 -87.68 483.57 -85.91 496.86 -83.67 510.14 -81.13 523.43 -78.5 536.71 -75.99 549.99 -73.8 563.28 -72.11 576.56 -71.04 589.84 -70.7 603.13 -71.09 616.41 -72.19 629.7 -73.92 642.98 -76.14 656.26 -78.66 669.55 -81.29 682.83 -83.81 696.11 -86.04 709.4 -87.77 722.68 -88.89 735.97 -89.29 749.25 -88.96 762.53 -87.9 775.82 -86.22 789.1 -84.03 802.38 -81.53 815.67 -78.9 828.95 -76.36 842.24 -74.11 855.52 -72.33 868.8 -71.16 882.09 -70.7 895.37 -70.98 908.66 -71.98 921.94 -73.63 935.22 -75.78 948.51 -78.27 961.79 -80.89 975.07 -83.45 988.36 -85.73 1001.64 -87.55 1014.93 -88.76 1028.21 -89.28 1041.49 -89.06 1054.78 -88.11 1068.06 -86.51 1081.35 -84.39 1094.63 -81.92 1107.91 -79.3 1121.2 -76.73 1134.48 -74.42 1147.76 -72.56 1161.05 -71.3 1174.33 -70.72 1187.62 -70.89 1200.9 -71.79 1214.18 -73.34 1227.47 -75.42 1240.75 -77.87 1254.04 -80.49 1267.32 -83.07 1280.6 -85.4 1293.89 -87.31 1307.17 -88.62 1320.45 -89.25 1333.74 -89.14 1347.02 -88.29 1360.31 -86.79 1373.59 -84.74 1386.87 -82.31 1400.16 -79.7 1413.44 -77.11 1426.73 -74.75 1440.01 -72.81 1453.29 -71.44 1466.58 -70.76 1479.86 -70.82 1493.14 -71.61 1506.43 -73.07 1519.71 -75.08 1533 -77.49 1546.51 -73.91 1539.15 -52.77 1539.11 -37.81 1546.61 -22.84 1559.4 -7.88 1573.63 7.07 1585.02 22.03 1590.16 36.99 1587.48 51.96 1577.8 66.92 1564.02 81.88 1550.3 96.84 1540.76 111.8 1538.27 126.77 1543.57 141.73 1555.08 156.69 1569.33 171.65 1582.03 186.61 1589.37 201.58 1589.14 216.54 1581.4 231.5 1568.49 246.46 1554.28 261.42 1543.06 276.39 1538.19 291.35 1541.15 306.31 1551.03 321.27 1564.88 336.23 1578.52 351.2 1587.85 366.16 1590.06 381.12 1584.5 396.08 1572.83 411.04 1558.56 426.01 1545.99 440.97 1538.89 455.93 1539.4 470.89 1547.38 485.85 1560.41 500.81 1574.58 515.78 1585.62 530.74 1590.23 545.7 1587 560.66 1576.91 575.62 1563 590.59 1549.45 605.55 1540.33 620.51 1538.39 635.47 1544.22 650.43 1556.05 665.4 1570.33 680.36 1582.77 695.32 1589.62 710.28 1588.82 725.24 1580.62 740.21 1567.48 755.17 1553.34 770.13 1542.48 785.09 1538.14 800.05 1541.64 815.02 1551.93 829.98 1565.9 844.94 1579.36 859.9 1588.26 874.86 1574.68 879.81 1561.11 884.77 1547.53 889.35 1533.95 893.18 1520.37 895.96 1506.8 897.46 1493.22 897.57 1479.64 896.27 1466.06 893.67 1452.49 889.98 1438.91 885.49 1425.33 880.56 1411.75 875.59 1398.18 870.97 1384.6 867.07 1371.02 864.2 1357.44 862.6 1343.87 862.38 1330.29 863.58 1316.71 866.08 1303.13 869.7 1289.56 874.14 1275.98 879.05 1262.4 884.03 1248.83 888.69 1235.25 892.66 1221.67 895.61 1208.09 897.32 1194.52 897.64 1180.94 896.55 1167.36 894.14 1153.78 890.6 1140.21 886.21 1126.63 881.32 1113.05 876.33 1099.47 871.63 1085.9 867.6 1072.32 864.56 1058.74 862.75 1045.16 862.32 1031.59 863.31 1018.01 865.62 1004.43 869.09 990.85 873.43 977.28 878.29 963.7 883.29 950.12 888.02 936.55 892.12 922.97 895.24 909.39 897.15 895.81 897.68 882.24 896.81 868.66 894.59 855.08 891.2 841.5 886.92 827.93 882.08 814.35 877.08 800.77 872.31 787.19 868.15 773.62 864.95 760.04 862.94 746.46 862.3 732.88 863.07 719.31 865.19 705.73 868.5 692.15 872.72 678.58 877.53 665 882.54 651.42 887.34 637.84 891.55 624.27 894.84 610.69 896.94 597.11 897.69 583.53 897.03 569.96 895 556.38 891.78 542.8 887.61 529.22 882.84 515.65 877.83 502.07 873 488.49 868.73 474.92 865.36 461.34 863.16 447.76 862.3 434.18 862.86 420.61 864.79 407.03 867.93 393.45 872.04 379.87 876.78 366.3 881.78 352.72 886.64 339.14 890.96 325.56 894.41 311.99 896.71 298.41 897.67 284.83 897.22 271.26 895.39 257.68 892.34 244.1 888.29 230.52 883.58 216.95 878.59 203.37 873.71 189.79 869.33 176.21 865.8 162.64 863.41 149.06 862.34 135.48 862.69 121.91 864.41 108.33 867.38 94.75 871.36 81.17 876.03 67.6 881.02 54.02 885.92 40.44 890.35 26.86 893.96 13.29 896.44 -0.28 897.62 -13.86 897.38 -27.44 895.76 -41.01 892.87 -54.59 888.96 -68.17 884.33 -81.74 879.35 -95.32 874.43 -108.9 869.95 -122.48 866.27 -136.05 863.69 -149.63 862.41 -146.88 847.54 -142.71 832.68 -138.39 817.81 -135.21 802.94 -134.12 788.07 -135.47 773.2 -138.83 758.33 -143.2 743.46 -147.27 728.59 -149.8 713.72 -150.05 698.85 -147.93 683.98 -144.08 669.11 -139.66 654.24 -136 639.37 -134.2 624.5 -134.8 609.63 -137.62 594.76 -141.82 579.89 -146.12 565.02 -149.24 550.15 -150.24 535.28 -148.82 520.41 -145.4 505.54 -141.01 490.67 -136.98 475.8 -134.52 460.93 -134.36 446.06 -136.55 431.2 -140.44 416.33 -144.86 401.46 -148.47 386.59 -150.19 371.72 -149.5 356.85 -146.62 341.98 -142.4 327.11 -138.11 312.24 -135.05 297.37 -134.14 282.5 -135.65 267.63 -139.12 252.76 -143.51 237.89 -147.51 223.02 -149.9 208.15 -149.97 193.28 -147.7 178.41 -143.77 163.54 -139.37 148.67 -135.8 133.8 -134.16 118.93 -134.93 104.06 -137.89 89.19 -142.13 74.32 -146.39 59.45 -149.39 44.58 -150.22 29.71 -148.63 14.85 -145.1 -0.01 -140.7 -14.88 -136.74 -29.75 -134.42 -44.62 -134.44 -59.49 -136.78 -74.36 -140.75 -89.23"
        fill="url(#uuunion-grad)"
      ></path>
      <path
        d="M-140.76 -89.23Q-136.79 -74.36 -134.45 -59.49 -134.43 -44.62 -136.75 -29.75 -140.71 -14.88 -145.11 -0.01 -148.64 14.84 -150.23 29.71 -149.4 44.58 -146.4 59.45 -142.14 74.32 -137.9 89.19 -134.94 104.06 -134.17 118.93 -135.81 133.8 -139.37 148.67 -143.78 163.54 -147.71 178.41 -149.99 193.28 -149.91 208.15 -147.52 223.02 -143.52 237.89 -139.13 252.76 -135.66 267.63 -134.15 282.5 -135.06 297.37 -138.12 312.24 -142.41 327.11 -146.63 341.98 -149.51 356.85 -150.2 371.72 -148.48 386.59 -139.45 387.12 -130.43 388.11 -121.4 389.53 -112.37 391.32 -103.35 393.41 -94.32 395.75 -85.3 398.23 -76.27 400.78 -67.24 403.3 -58.22 405.7 -49.19 407.9 -40.17 409.81 -31.14 411.38 -22.11 412.54 -5.05 413.43 -2.04 413.48 8.88 409.82 19.9 405.45 31 400.43 42.17 394.88 53.4 388.93 64.7 382.74 76.05 376.48 87.43 370.32 98.85 364.43 110.3 358.97 121.75 354.05 133.2 349.79 144.65 346.23 156.08 343.4 167.48 341.28 178.86 339.82 190.19 338.9 201.48 338.42 212.72 338.23 223.91 338.15 235.05 338.03 246.14 337.69 257.17 336.98 268.16 335.77 279.11 333.95 290.02 331.47 300.89 328.27 311.75 324.38 322.58 319.83 333.41 314.71 344.24 309.12 355.08 303.22 365.94 297.15 376.83 291.08 387.75 285.17 398.72 279.57 409.74 274.42 420.83 269.83 431.97 265.88 443.19 262.61 454.48 260.03 465.84 258.1 477.27 256.75 488.77 255.88 500.34 255.38 511.97 255.08 523.65 254.83 535.39 254.48 547.16 253.86 558.96 252.85 570.78 251.32 582.6 249.2 594.41 246.42 606.2 242.97 617.96 238.88 629.67 234.19 641.31 229.01 652.88 223.44 664.36 217.61 675.74 211.7 687.02 205.83 698.18 200.18 709.21 194.87 720.12 190.03 730.9 185.75 741.55 182.09 752.06 179.08 762.45 176.71 772.71 174.93 782.86 173.66 792.91 172.81 802.86 172.24 812.74 171.81 822.55 171.37 832.32 170.77 842.06 169.87 851.79 168.56 861.53 166.73 871.3 164.31 881.13 161.27 891.03 157.61 901.02 153.35 911.13 148.57 921.37 143.36 931.75 137.83 942.3 132.12 953.03 126.38 963.94 120.74 975.05 115.36 986.36 110.34 997.88 105.8 1009.6 101.81 1021.51 98.41 1033.63 95.63 1045.93 93.42 1058.4 91.75 1071.03 90.53 1083.8 89.65 1096.69 88.99 1109.68 88.4 1122.75 87.75 1135.86 86.9 1148.99 85.73 1162.11 84.12 1175.19 82 1188.21 79.32 1201.14 76.05 1213.94 72.2 1226.59 67.82 1239.06 62.98 1251.34 57.77 1263.39 52.32 1275.21 46.75 1286.77 41.2 1298.07 35.81 1309.09 30.69 1319.83 25.96 1330.29 21.7 1340.47 17.98 1350.38 14.82 1360.03 12.22 1369.44 10.16 1378.62 8.56 1387.59 7.35 1404.97 5.63 1422 3.98 1407.98 -13.57 1399.64 -31.13 1400.38 -48.69 1409.88 -66.25 1424.29 -83.81 1437.78 -101.37 1444.86 -118.93 1442.67 -136.5 1430.14 -138.7 1417.6 -140.99 1405.07 -143.21 1392.54 -145.22 1380.01 -146.87 1367.48 -148.05 1354.95 -148.68 1342.41 -148.71 1329.88 -148.15 1317.35 -147.04 1304.82 -145.45 1292.29 -143.48 1279.76 -141.27 1267.22 -138.98 1254.69 -136.76 1242.16 -134.76 1229.63 -133.11 1217.1 -131.94 1204.56 -131.31 1192.03 -131.28 1179.5 -131.84 1166.97 -132.96 1154.44 -134.56 1141.91 -136.53 1129.37 -138.73 1116.84 -141.03 1104.31 -143.25 1091.78 -145.25 1079.25 -146.89 1066.72 -148.06 1054.18 -148.68 1041.65 -148.71 1029.12 -148.14 1016.59 -147.02 1004.06 -145.42 991.53 -143.45 978.99 -141.24 966.46 -138.95 953.93 -136.73 941.4 -134.73 928.87 -133.09 916.33 -131.92 903.8 -131.31 891.27 -131.28 878.74 -131.86 866.21 -132.98 853.68 -134.59 841.14 -136.56 828.61 -138.77 816.08 -141.06 803.55 -143.28 791.02 -145.28 778.49 -146.91 765.95 -148.07 753.42 -148.69 740.89 -148.7 728.36 -148.13 715.83 -147 703.3 -145.39 690.76 -143.41 678.23 -141.2 665.7 -138.91 653.17 -136.69 640.64 -134.7 628.1 -133.07 615.57 -131.91 603.04 -131.3 590.51 -131.29 577.98 -131.87 565.45 -133 552.91 -134.61 540.38 -136.59 527.85 -138.8 515.32 -141.1 502.79 -143.31 490.26 -145.3 477.72 -146.93 465.19 -148.09 452.66 -148.69 440.13 -148.7 427.6 -148.11 415.07 -146.98 402.53 -145.36 390 -143.38 377.47 -141.17 364.94 -138.88 352.41 -136.66 339.87 -134.67 327.34 -133.05 314.81 -131.9 302.28 -131.3 289.75 -131.29 277.22 -131.88 264.68 -133.02 252.15 -134.64 239.62 -136.63 227.09 -138.84 214.56 -141.13 202.03 -143.35 189.49 -145.33 176.96 -146.95 164.43 -148.1 151.9 -148.69 139.37 -148.69 126.84 -148.1 114.3 -146.95 101.77 -145.33 89.24 -143.35 76.71 -141.13 64.18 -138.84 51.65 -136.63 39.11 -134.64 26.58 -133.02 14.05 -131.88 1.52 -131.29 -11 -131.3 -23.54 -131.9 -36.07 -133.05 -48.6 -134.67 -61.13 -136.66 -73.66 -138.88 -86.19 -141.17 -98.73 -143.38 -111.26 -145.36 -123.79 -146.98 -136.32 -148.11 -154.06 -141.29 -154.67 -119.03 -148.13 -104.15 -140.76 -89.23"
        fill="url(#uuunion-grad2)"
        filter="url(#uuunion-blur)"
      ></path>
      <path
        d="M1406.78 325.1Q1415.55 327.21 1424.32 329.07 1433.09 330.61 1441.86 331.76 1450.64 332.5 1459.41 332.79 1468.18 332.63 1476.95 332.01 1485.72 330.97 1494.49 329.53 1503.26 327.76 1512.03 325.7 1520.8 323.45 1529.57 321.07 1538.35 318.65 1547.12 316.28 1562.47 333.74 1578.52 351.2 1588.76 368.65 1589.04 386.11 1579.24 403.56 1563.34 421.02 1547.79 438.47 1538.89 455.93 1540.25 473.38 1551.33 490.84 1567.62 508.3 1582.53 525.75 1589.99 543.21 1587 560.66 1574.75 578.12 1558.23 595.57 1544.12 613.03 1538.16 630.49 1542.75 647.94 1556.05 665.4 1572.65 682.85 1585.82 700.31 1590.22 717.76 1584.06 735.22 1569.85 752.67 1553.34 770.13 1541.24 787.59 1538.44 805.04 1546.09 822.5 1561.08 839.95 1577.34 857.41 1588.26 874.86 1575.81 879.39 1563.35 883.96 1550.9 888.27 1538.44 892.02 1525.99 894.95 1513.54 896.88 1501.08 897.68 1488.63 897.28 1476.18 895.72 1463.72 893.1 1451.27 889.6 1438.81 885.46 1426.36 880.94 1413.91 876.36 1401.45 872.03 1389 868.23 1376.54 865.22 1364.09 863.21 1351.64 862.33 1339.18 862.64 1326.73 864.11 1314.27 866.66 1301.82 870.1 1289.37 874.21 1276.91 878.7 1264.46 883.29 1252 887.65 1239.55 891.5 1227.1 894.57 1214.64 896.66 1202.19 897.63 1189.73 897.42 1177.28 896.03 1164.83 893.56 1152.37 890.18 1139.92 886.11 1127.47 881.63 1115.01 877.04 1102.56 872.65 1090.1 868.76 1077.65 865.62 1065.2 863.44 1052.74 862.39 1040.29 862.52 1027.83 863.82 1015.38 866.21 1002.93 869.53 990.47 873.56 978.02 878.02 965.56 882.61 953.11 887.02 940.66 890.97 928.2 894.17 915.75 896.42 903.29 897.56 890.84 897.53 878.39 896.31 865.93 893.99 853.48 890.73 841.02 886.75 828.57 882.32 816.12 877.72 803.66 873.29 791.21 869.3 778.75 866.03 766.3 863.7 753.85 862.47 741.39 862.42 728.94 863.55 716.49 865.79 704.03 868.98 691.58 872.92 679.12 877.33 666.67 881.92 654.22 886.38 641.76 890.42 629.31 893.75 616.85 896.15 604.4 897.47 591.95 897.61 579.49 896.56 567.04 894.4 554.58 891.27 542.13 887.39 529.68 883 517.22 878.41 504.77 873.93 492.31 869.86 479.86 866.47 467.41 863.98 454.95 862.58 442.5 862.35 430.04 863.31 417.59 865.39 405.14 868.45 392.68 872.29 380.23 876.65 367.77 881.23 355.32 885.73 342.87 889.85 330.41 893.3 317.96 895.85 305.51 897.34 293.05 897.66 280.6 896.79 268.14 894.79 255.69 891.8 243.24 888.01 230.78 883.68 218.33 879.1 205.87 874.58 193.42 870.43 180.97 866.92 168.51 864.29 156.06 862.72 143.6 862.31 131.15 863.09 118.7 865.01 106.24 867.94 93.79 871.68 81.33 875.97 68.88 880.54 56.43 885.08 43.97 889.27 31.52 892.83 19.06 895.54 0.91 892.4 -3.21 877.52 -1.34 867.43 0.57 857.34 2.27 847.25 3.53 837.17 4.39 822.04 5.09 817 16.98 810.09 28.67 802.05 40.24 793 51.75 783.14 63.28 772.74 74.87 762.08 86.59 751.48 98.46 741.24 110.52 731.64 122.77 722.92 135.2 715.23 147.8 708.67 160.53 703.26 173.36 698.93 186.24 695.54 199.13 692.88 211.98 690.69 224.76 688.69 237.45 686.58 250.02 684.06 262.48 680.89 274.84 676.84 287.1 671.77 299.32 665.6 311.51 658.34 323.72 650.07 335.99 640.92 348.37 631.12 360.87 620.91 373.54 610.58 386.37 600.42 399.36 590.69 412.5 581.63 425.75 573.45 439.07 566.26 452.42 560.13 465.72 555.04 478.92 550.91 491.95 547.57 504.77 544.81 517.33 542.4 529.6 540.05 541.56 537.49 553.23 534.47 564.64 530.76 575.82 526.19 586.85 520.64 597.79 514.08 608.75 506.54 619.8 498.11 631.06 488.95 642.59 479.28 654.49 469.33 666.81 459.37 679.58 449.65 692.81 440.43 706.49 431.9 720.58 424.21 735.01 417.47 749.67 411.7 764.47 406.86 779.28 402.83 793.96 399.47 808.39 396.56 818.57 398.06 828.74 399.59 838.9 401.03 849.05 402.25 859.19 403.17 869.31 403.68 879.42 403.71 889.5 403.2 899.57 402.14 909.61 400.5 919.64 398.31 929.63 395.61 939.61 392.46 949.55 388.94 959.47 385.15 969.36 381.2 979.21 377.2 989.04 373.27 998.83 369.53 1008.59 366.07 1018.31 363 1028 360.39 1037.65 358.3 1047.26 356.76 1056.84 355.78 1066.38 355.36 1075.87 355.45 1085.34 355.99 1094.76 356.92 1104.14 358.14 1113.49 359.53 1122.79 361 1132.06 362.42 1141.29 363.67 1150.48 364.66 1159.64 365.29 1168.76 365.48 1177.84 365.16 1186.89 364.3 1195.91 362.89 1204.9 360.93 1213.85 358.45 1222.78 355.51 1231.68 352.17 1240.55 348.53 1249.4 344.7 1258.22 340.77 1267.02 336.87 1275.81 333.11 1284.57 329.59 1293.32 326.41 1302.06 323.65 1310.79 321.38 1319.51 319.63 1336.93 318.05 1354.35 318 1363.07 318.74 1371.79 319.79 1380.52 321.07 1389.26 322.45 1398.01 323.83 1406.78 325.1"
        fill="url(#uuunion-grad3)"
        filter="url(#uuunion-blur2)"
      ></path>
    </svg>
  );
}