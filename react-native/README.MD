# 安装 for windows

## 安装JDK
<a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">jdk下载</a>JDK 的版本必须是 1.8（不支持 1.9）。
然后设置环境变量
* `JAVA_HOME` 例如 `D:\Program Files\Java\jdk1.8.0_181`
* `path` 添加 jdk 和 jre bin目录， 例如 `D:\Program Files\Java\jdk1.8.0_181\bin` `D:\Program Files\Java\jre\bin`

测试是否安装成功 `java` `javac`
## 安装android sdk 需要翻墙
<a href="https://developer.android.com/studio/index.html">首先下载和安装 Android Studio</a>
然后进入SDKManager(可通过Android Studio菜单Tools-Android-SDK Manager)，确保以下项目已经安装并更新到最新：

* Tools/Android SDK Tools
* Tools/Android SDK Platform-tools
* Tools/Android SDK Build-tools (23.0.1)（这个必须版本严格匹配23.0.1）
* Android 6.0 (API 23)/SDK Platform (1)
* Extras/Android Support Library
* Extras/Android Support Repository


下载完安卓sdk后添加环境变量
* `ANDROID_HOME` 例如 `D:\Program Files\Android\sdk`
* 在 `path` 添加 `%ANDROID_HOME%\platform-tools`和 `%ANDROID_HOME%\tools`

测试是否安装成功 `android` `adb devices`

## 安装nodejs
https://nodejs.org/en/ 很简单，8.0以上就行
测试是否安装成功 `node -v`
## 安装python
必须下载2.x版本 https://www.python.org/download/releases/2.7.2/
添加环境变量
* 在 `path` 添加例如 `D:\Python27`
测试是否安装成功 `python`
## 安装 react-native
* 设置镜像 `npm config set registry https://registry.npm.taobao.org --global` `npm config set disturl https://npm.taobao.org/dist --global`
* 安装 `npm install -g react-native-cli`


## 启动模拟器

使用 android studio 的模拟器，或者插入手机开启usb调试，允许安装
## 创建项目
* `react-native init MyApp --version 0.55.4` 推荐使用0.55.4版本
* `react-native start`
* `react-native run-android` or `react-native run-ios`

摇晃设备或按Menu键（Bluestacks模拟器按键盘上的菜单键，通常在右Ctrl的左边 或者左Windows键旁边），可以打开调试菜单，点击Dev Settings，选Debug server host for device，输入你的正在运行packager的那台电脑的局域网IP加:8081（同时要保证手机和电脑在同一网段，且没有防火墙阻拦），再按back键返回，再按Menu键，在调试菜单中选择Reload JS，就应该可以看到运行的结果了。  

可以用浏览器访问http://localhost:8081/index.bundle?platform=android  
看看是否可以看到打包后的脚本（看到很长的js代码就对了）。第一次访问通常需要十几秒，并且在packager的命令行可以看到形如[====]的进度条。

注意老版本（低于0.49）的地址  为http://localhost:8081/index.android.bundle?platform=android

如果你遇到了ERROR Watcher took too long to load的报错，请尝试修改node_modules/react-native/packager/react-packager/src/FileWatcher/index.js，将其中的MAX_WAIT_TIME 从25000改为更大的值（单位是毫秒）  

安卓调试
打开Chrome，访问 http://localhost:8081/debugger-ui  
应当能看到一个页面。按F12打开开发者菜单。

在模拟器或真机菜单中选择Debug JS，即可开始调试。
