var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cad2024 電腦輔助設計與實習 \n 課程教材: \n Intro_to_Mechatronics.pdf  ( Source ) \n Programming with Python for Engineers \n NX Tutorial \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼: 7pg9z7u \n 個人倉儲: https://github.com/mdecad2024/hw-41223219 \n 個人網站: https://mdecad2024.github.io/hw-41223219/ \n 其他資訊 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分.\xa0 \n /downloads/cd2023_pj3ag4_zmq_football_4.7.7z \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'W1-1', 'text': '前置作業 \n \n from cmsimde import flaskapp\nfrom gevent.pywsgi import WSGIServer\n\n#flaskapp.app.run(host="0.0.0.0", debug=True)\nhttp_server = WSGIServer((\'0.0.0.0\', 8080), flaskapp.app)\nhttp_server.serve_forever() \n', 'tags': '', 'url': 'W1-1.html'}, {'title': 'W1-2', 'text': '使用python語言配合cmd命令提示字元回推資訊回github \n 利用可攜程式環境維護作業網站的影片如下： \n \n', 'tags': '', 'url': 'W1-2.html'}, {'title': 'W2', 'text': '使用Codespace 與 localhost 改版的影片： \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'HW1', 'text': 'Homework 1 (10%): \n 利用 Solvespace 繪製列表中零件的操作過程與說明影片如下(W3): \n 影片:  https://youtu.be/7izhjzz26Ls \n 圖檔： \n /downloads/w3.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/w3.stl \n \n \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業一之二 \n 所完成的零件檔案下載 \n ...... \n 利用 NX2312 繪製列表中零件的操作過程與說明影片如下: \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業一之三 \n 所完成的零件檔案下載 \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業一之四 \n 所完成的零件檔案下載 \n ...... \n HW1 執行心得: \n 過程中試錯了很多次，但我又新認識了一款製圖軟體。 \n HW1 自評分數: \n 70分， 我正在熟悉這款軟體。 \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW1_Exam', 'text': '從 零件模擬練習 中選出零件, 隨堂進行考試. \n 零件考試題目以 Solvespace 繪圖操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的零件檔案下載 \n 零件考試題目以 NX2312 繪圖操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的零件檔案下載 \n', 'tags': '', 'url': 'HW1_Exam.html'}, {'title': 'w7', 'text': 'https://youtu.be/i54leonrpGA \n \n https://youtu.be/v9Ud9UX0y6U \n \n https://youtu.be/7izhjzz26Ls \n \n https://youtu.be/hlzl1c1Jss8 \n \n https://youtu.be/2V7PeUxQCBE \n \n https://youtu.be/eoCP1r87tt8 \n \n 心得: \n 與soildworks相比，這款製圖軟體對電腦的負擔較小，還算不錯，目前還在熟悉。 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 圖檔： /downloads/W10-1.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/W10-1.stl \n 影片： https://youtu.be/Yjf51vTZz8A \n \n 題目二 \n 圖檔： /downloads/W10-2.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/W10-2.stl \n 影片： https://youtu.be/sEmnk50j1gM \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_ch', 'text': '\n', 'tags': '', 'url': 'w11_ch.html'}, {'title': 'w11_hw', 'text': 'w11前置作業 \n (更新NX版本至NX2312) \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_ipv6\nset HomeDrive=%Disk%:\\home_ipv6\nset Home=%Disk%:\\home_ipv6\nset USERPROFILE=%Disk%:\\home_ipv6\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\Python310\\DLLs;%Disk%:\\Python310\\Lib;%Disk%:\\Python310\\Lib\\site-packages;%Disk%:\\NX\\NXBIN\\python;\nset PYTHONHOME=%Disk%:\\Python310\n\nREM for putty\nset GIT_SSH=%Disk%:\\PuTTY\\plink.exe\n\nREM for Java and Android SDK\nset java_home=%Disk%:\\java\\jdk8u222-b10\nset ANDROID_SDK_home=%Disk%:\\home_ipv6\nset GRADLE_USER_home=%Disk%:\\home_ipv6\nset ANDROID_SDK_ROOT=%Disk%:\\android\\sdk\nset ANDROID_Home=%Disk%:\\android\\sdk\nset REPO_OS_OVERRIDE=windows\n\nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Disk%:\\Python310;%Disk%:\\Python310\\Scripts;\nREM 設定跟Git 有關的命令搜尋路徑\nset path_git=%Disk%:\\portablegit\\bin;\nREM 設定 msys2 64 位元的執行路徑\nset path_msys2=%Disk%:\\msys64\\ucrt64\\bin;\nREM set for LaTeX\nset path_miketex=%Disk%:\\miktex-portable\\texmfs\\install\\miktex\\bin\\x64;\nREM Flutter path\nset path_flutter=%Disk%:\\flutter\\bin;%java_home%\\bin;%Disk%:\\Android\\sdk;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\tools\\bin;%Disk%:\\Android\\sdk\\emulator;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\flutter\\bin\\cache\\dart-sdk\\bin;%Disk%:\\vscode;\nset path_node=%Disk%:\\node-v14.15.4-win-x64;\n\nset path_postgresql=%Disk%:\\postgresql13\\bin;\nset path_range=%Disk%:\\Range3_official\\bin;\nrem set path_range=%Disk%:\\range-3.2.5_kmol\\bin;\nset path_lua=%Disk%:\\lua-5.3.5\\;\nset path_core=%Disk%:\\coreutils-5.3.0\\bin;\nREM for gogs\nset path_putty=%Disk%:\\PuTTY;\nset path_vscode=%Disk%:\\vscode;\n\nREM for Rust\nset MINGW_PATH=%path_msys2%;\nset GIT_PATH=%path_git%;\nset VSCODE_PATH=%path_vscode%\nset RUSTUP_HOME=%Disk%:\\Rust\\rust\nset CARGO_HOME=%Disk%:\\Rust\\cargo\nset RUST_PATH=%CARGO_HOME%\\bin\n\nREM for Erlang and Elixir\nset path_erlang=%Disk%:\\elixir\\erl10.7\\bin\\;%Disk%:\\elixir\\erl10.7\\erts-10.7\\bin;%Disk%:\\elixir\\elixir\\bin;\nset ERTSPATH=%Disk%:\\elixir\\erl10.7\\erts-10.7\\bin\nset ERLINI=%Disk%:\\elixir\\erl10.7\\erts-10.7\\bin\\erl.ini\n\nREM for Haskell\nset path_haskell=%Disk%:\\ghc-9.0.1-x86_64-unknown-mingw32\\bin;\nREM for node.js\nset path_nodejs=%Disk%:\\node-v14.17.2-x64\\nodejs;%Disk%:\\node-v14.17.2-x64\\nodejs\\node_modules\\npm;\n\nREM 加入 PostgreSQL 所需的環境變數設定\n\n@SET PGDATA=%Disk%:\\postgresql13\\data\n@SET PGDATABASE=postgres\n@SET PGUSER=postgres\n@SET PGPORT=5432\n@SET PGLOCALEDIR=%Disk%:\\postgresql13\\share\\locale\n\nREM for Range3\nREM REG IMPORT %Disk%:\\range3.reg\n\nREM proxy needed for heroku login\nREM proxy can not use with fossil scm\nREM proxy can not use with Rust installation\nREM needed for node.js\nREM set HTTP_PROXY=http://[2001:288:6004:xx::42]:3128\nREM set HTTPS_PROXY=http://[2001:288:6004:xx::42]:3128\n\nREM for PyRep\nset VREP_PATH=%Disk%:\\CoppeliaSim\n\nREM BOOST_ROOT for compiling coppeliasim but maybe not for linking\nREM set BOOST_ROOT=%Disk%:\\boost_1_76_0\\;\nset path_copsim=%Disk%:\\boost_1_76_0\\;%Disk%:\\Strawberry\\perl\\bin;%Disk%:\\cmake-3.21.0-windows-x86_64\\bin;%Disk%:\\diffutils-2.8.7-1\\bin;%Disk%:\\patch-2.5.9-7\\bin;%D%:\\jom_1_1_2;%Disk%:\\LLVM\\bin;%Disk%:\\QtCreator\\bin;%Disk%:\\CoppeliaSimEdu;%Disk%:\\Python310\\tcl\\tcl8.6;\n\nREM for CMake\nset CMAKE_C_COMPILER=%Disk%:\\msys64\\ucrt64\\bin\\gcc;\nset CMAKE_CXX_COMPILER=%Disk%:\\msys64\\ucrt64\\bin\\g++;\n\nREM set QT_QPA_PLATFORM_PLUGIN_PATH=Y:\\msys64_20240507\\mingw64\\share\\qt5\\plugins\\platforms\nREM set QT_PLUGIN_PATH=Y:\\msys64_20240507\\mingw64\\share\\qt5\\plugins\n\nREM for execute scite directly\nset path_scite=%Disk%:\\wscite\\;\n\nREM for simExtZMQ\nset path_xsltproc=%Disk%:\\xsltproc;\n\nREM for OpenSSL\nSet OPENSSL_CONF=%Disk%:\\OpenSSL-Win64\\SSL\\openssl.cnf\nset path_openssl=%Disk%:\\OpenSSL-Win64\\bin;\n\npath=%Disk%:;%path_python%;%path_git%;%path_copsim%;%path_msys2%;%path_miketex%;%path_flutter%;%path_node%;%path_tcc%;%path_postgresql%;%path_range%;%path_lua%;%path_core%;%path_putty%;%path_vscode%;%RUST_PATH%;%path_erlang%;%path_nodejs%;%path_haskell%;%path_scite%;%path_xsltproc%;%path_gnuplot%;%path_openssl%;%path%;\n\nREM for NX2312, must after path setup \nset SPLM_LICENSE_SERVER=29000@140.130.17.37;29000@[2001:288:6004:17::37]\nset UGII_LANG=english\nset UGS_LICENSE_BUNDLE=ACD11,ACD10\nset UGII_BASE_DIR=Y:\\NX2312_CAD\\NX2312_CAD\nset UGII_TMP_DIR=Y:\\NX2312_CAD\\NX2312_CAD\\temp\nset UGII_LIB_PATH=%UGII_BASE_DIR%\\NXBIN\\python\nset ugii=%UGII_BASE_DIR%\\ugii;%UGII_BASE_DIR%\\nxbin;\npath = %ugii%;%path%\nREM Xcopy %Disk%:\\home_ipv6\\AppData\\Local\\Siemens\\NX2312 C:\\users\\%USERNAME%\\AppData\\Local\\Siemens\\NX2312 /E /H /C /I /Y\n\nREM start ugraf -nx\n\npython %Disk%:\\tmp\\nx_ex\\new_part.py\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite\\SciTE.exe\n\n\nExit\n \n \n 完成畫面如下： \n \n \n \n 其他 零件模擬練習 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': '其他零件模擬練習', 'text': '利用 Solvespace 與 NX2312 建立  Parts  頁面中的零件 \n Gland blank練習(W4)： \n 影片： https://youtu.be/hlzl1c1Jss8 \n 圖檔： \n /downloads/Gland blank.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/%E9%9B%B6%E4%BB%B67.stl \n \n \n Base plate練習(W5)： \n 圖檔： \n /downloads/Base plate.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/Base%20plate.stl \n 影片： https://youtu.be/2V7PeUxQCBE \n \n \n Bearing block A練習(W6) \n 圖檔： \n /downloads/Bearing block A.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/Bearing%20block%20A.stl \n 影片： https://youtu.be/eoCP1r87tt8 \n \n \n Bearing block B練習(W7) \n 影片： https://youtu.be/7A35wBpvDzU \n 圖檔： \n /downloads/w7.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/w7.stl \n \n \n \n Column base練習(W8) \n 影片： https://youtu.be/gwc14sT9XR8 \n 圖檔： \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/W8.stl \n /downloads/W8.stl \n \n \n Dovetail bracket練習(W8) \n 圖檔： https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/Dovetail%20bracket.stl \n 影片： https://youtu.be/fht4u6ofkDs \n \n \n Gland練習(W9) \n 影片： https://youtu.be/wbeyNsWf-Cc \n 圖檔： /downloads/Gland.stl \n https://mdecad2024.github.io/hw-41223219/cmsimde/static/viewstl.html?src=https://s104.cycu.org/~41223219/Gland.stl \n \n \n \n \n \n', 'tags': '', 'url': '其他零件模擬練習.html'}, {'title': 'HW2', 'text': 'Homework 2 (10%): \n 利用 Solvespace 與 NX 建立  Balance on Wheels  組立件 \n \n 利用 Solvespace 繪製  Balance on Wheels  組立件的操作過程與說明影片如下: \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業二之一 \n 所完成的零組件檔案下載 \n 利用 NX2312 繪製  Balance on Wheels  組立件的操作過程與說明影片如下: \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業二之二 \n 所完成的零件檔案下載 \n HW2 執行心得: \n ...... \n HW2 自評分數: \n 完成上述流程後, 請將 HW2 自評分數輸入 cad2024 自評表單中. \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW2_Exam', 'text': '與 HW2 內容相近的組立件題目, 隨堂進行考試. \n 零件與組立件考試題目以 Solvespace 繪圖操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的零件與組立件檔案下載 \n 零件與組立件考試題目以 NX 繪圖操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的零件與組立件檔案下載 \n', 'tags': '', 'url': 'HW2_Exam.html'}, {'title': 'HW3', 'text': 'Homework 3 (20%): \n 建立  Balance on Wheels  控制系統設計模擬場景 \n https://github.com/mdecycu/Balance_On_Wheels \n \n \n Balance_on_wheels_nx2312.7z \n Balance_on_Wheel_scene.7z \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'HW3_Exam', 'text': '與 HW3 內容相近的模擬場景題目, 隨堂進行考試. \n 建立模擬場景操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的模擬場景與控制程式檔案下載 \n \n 利用 CoppeliaSim 建立  Balance on Wheels  控制系統設計模擬場景的操作過程與說明影片如下: \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業三 \n 請將操作影片嵌入 ...... \n 所完成的場景與控制程式檔案下載 \n HW3 執行心得: \n ...... \n HW3 自評分數: \n 完成上述流程後, 請將 HW3 自評分數輸入 cad2024 自評表單中. \n', 'tags': '', 'url': 'HW3_Exam.html'}, {'title': 'HW4', 'text': 'Homework 4 (20%): \n 建立  Dingo 機器狗 控制系統設計模擬場景 \n https://github.com/mdecycu/DingoQuadruped \n DINGO_QUADRUPED_CAD.7z \n \n \n 利用 CoppeliaSim 建立  Dingo 機器狗 控制系統設計模擬場景的操作過程與說明影片如下: \n 影片標題: 國立虎尾科技大學機械設計工程系電腦輔助設計與實習- 作業四 \n 所完成的場景與控制程式檔案下載 \n HW4 執行心得: \n .... \n HW4 自評分數: \n 完成上述流程後, 請將 HW4 自評分數輸入 cad2024 自評表單中. \n', 'tags': '', 'url': 'HW4.html'}, {'title': 'HW4_Exam', 'text': '與 HW4 內容相近的模擬場景題目, 隨堂進行考試. \n 建立模擬場景操作過程影片如下: \n 請將操作影片嵌入 ...... \n 所完成的模擬場景與控制程式檔案下載 \n', 'tags': '', 'url': 'HW4_Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (30%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cad2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}]};