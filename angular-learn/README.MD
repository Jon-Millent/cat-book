# angular 2采坑记

## ionic 相关

* 安装 `npm install -g ionic`
* 创建项目 报错的话 安装 `npm install -g ionic@3.9.2`
  * `ionic start myApp tabs`
  * `ionic start myApp blank`
  * `ionic start myApp sidemenu`
* 启动 `ionic serve` 启动报错的话安装 `npm install ws@3.3.2 --save-dev --save-exact` 仍然报错的话 `npm install @ionic/app-scripts@nightly --save-dev` 
* 安卓手机下运行测试 `ionic cordova run android --device`
* 打包 `ionic cordova build android --prod --release`
* note: 打包失败的话见下面解决
  * `ionic cordova build android --prod --release`
  * 在 `android studio` 打开项目的 `platforms/android`
  * 使用`android studio`自带的打包工具打包


## 语法迁移

### `ng-model` 绑定
```html
  <textarea [(ngModel)]="contentText"></textarea>
```

### `v-for` 
```html
  <div class="item" *ngFor="let target of uploadBox; let $index = index">
  </div>
```

### `$event`
```html
  <input type="file" (change)="fileChange($event)">
```

### unsafe:[blob|base64] 不安全的协议头解决方案

```typescript
  import { DomSanitizer } from '@angular/platform-browser'
  constructor(public sanitizer: DomSanitizer) {
  }
  export class Test {
    fileChange(event){
      let file = target.files[0]
      this.uploadBox.push({
        name: file.name,
        img: this.sanitizer.bypassSecurityTrustUrl(this.createObjectURL(file))
      })
    }
  }
```
