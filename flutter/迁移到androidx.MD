# 迁移到androidX
## 说明
迁移到androidX的完整步骤如下,完成后即使你引用的库没有完成androidX的迁移工作,gradle也会让你的项目可以运行
## 
```
android{
    compileSdkVersion 28
}
```
## 使用了gradle wrapper
如果andorid根目录下有这个文件夹/文件,则需要修改

<img src="https://caijinglong.gitbooks.io/migrate-flutter-to-androidx/content/assets/import.png">

根据官网说明,最好修改到4.10.1以上
gradle-wrapper.properties 文件
修改版本号位置,我使用的是当前的最新版

```
distributionUrl=https\://services.gradle.org/distributions/gradle-5.2.1-all.zip
```

如果没有用这个,那么你需要修改的环境变量中的gradle版本,这个请自行百度/Google

## 修改android目录下的build.gradle

根目录下的build.gradle ,这个是目前的最新版
这个不是gradle的版本,你可以理解为与插件匹配,一般等于你的android studio的版本

```
buildscript{
  dependencies{
    classpath 'com.android.tools.build:gradle:3.3.1'
  }
}
```

## 修改android目录下的gradle.properties
如果没有,就添加这两行

```
android.enableJetifier=true
android.useAndroidX=true
```
