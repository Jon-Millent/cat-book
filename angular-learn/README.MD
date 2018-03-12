# angular 2采坑记

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

### unsafe:[bold|base64] 不安全的协议头解决方案

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
