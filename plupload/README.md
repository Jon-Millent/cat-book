
```html
  
  <div id="myForm">

      <input type="file" id="selectfiles">
      <button id="start_upload">start_upload</button>
      <div id="press"></div>
      
  </div>

```

```js
  
var uploader = new plupload.Uploader({
    runtimes : 'html5,flash,silverlight,html4', 
    browse_button : 'selectfiles',
    //multi_selection: false,
    container: 'myForm',
    flash_swf_url : './plupload-2.3.6/js/Moxie.swf',
    silverlight_xap_url : './plupload-2.3.6/js/Moxie.xap',
    url : './upload.php',

    init: {
        PostInit: function() {

            console.log('init')
        },

        FilesAdded: function(up, files) {
            console.log('FilesAdded')
        },

        BeforeUpload: function(up, file) {
            console.log('BeforeUpload')
        },

        UploadProgress: function(up, file) {
            console.log('UploadProgress')
            document.getElementById('press').innerHTML = file.percent
        },

        FileUploaded: function(up, file, info) {
            console.log('FileUploaded')
        },

        Error: function(up, err) {
            console.log('Error:')
        }
    }
});

uploader.init()

document.getElementById('start_upload').onclick = function(){
    uploader.setOption("multipart_params", { //附加参数
        "post_id"    : 1,
        "post_author" : 2
    })
    uploader.start(); //调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
}

```
