# angular 2采坑记

## ionic 相关

* 安装 `npm install -g cordova ionic`
* 创建项目 `ionic start myApp tabs`
* 启动 `ionic serve`
* 安卓手机下运行测试 `ionic cordova run android --device`
* 打包 `ionic cordova build android --prod --release`


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
