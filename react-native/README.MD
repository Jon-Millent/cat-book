# 安装 for windows

## 安装JDK
<a href=""http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>jdk下载</a>JDK 的版本必须是 1.8（不支持 1.9）。
然后设置环境变量
* `JAVA_HOME` 例如 `D:\Program Files\Java\jdk1.8.0_181`
* `path` 添加 jdk 和 jre bin目录， 例如 `D:\Program Files\Java\jdk1.8.0_181\bin` `D:\Program Files\Java\jre\bin`

## 安装android sdk 需要翻墙
<a href="https://developer.android.com/studio/index.html">首先下载和安装 Android Studio</a>
然后进入SDKManager(可通过Android Studio菜单Tools-Android-SDK Manager)，确保以下项目已经安装并更新到最新：

* Tools/Android SDK Tools
* Tools/Android SDK Platform-tools
* Tools/Android SDK Build-tools (23.0.1)（这个必须版本严格匹配23.0.1）
* Android 6.0 (API 23)/SDK Platform (1)
* Extras/Android Support Library
* Extras/Android Support Repository

测试是否安装成功 `java` `javac`

下载完安卓sdk后添加环境变量
* `ANDROID_HOME` 例如 `D:\Program Files\Android\sdk`
* 在 `path` 添加 `%ANDROID_HOME%\platform-tools`和 `%ANDROID_HOME%\tools`

测试是否安装成功 `android` `adb`

## 安装nodejs
https://nodejs.org/en/ 很简单，8.0以上就行

## 安装python
必须下载2.x版本 https://www.python.org/download/releases/2.7.2/
添加环境变量
* 在 `path` 添加例如 `D:\Python27`

## 安装 react-native
* 设置镜像 `npm config set registry https://registry.npm.taobao.org --global` `npm config set disturl https://npm.taobao.org/dist --global`
* 安装 `npm install -g react-native-cli`

## 创建项目
* `react-native init MyProject`
* `react-native start`
* `react-native run-android` or `react-native run-ios`

