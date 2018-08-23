# 关于一种时间戳实现的api加密
首先是客户端有自己的appkey & appid，如果api接口是 `/api/foo/bar` 请求的时候带上appkey & value & 当前时间戳，加密后发给服务端。服务端解析后比对appkey&value和时间戳  
如果时间戳距离现在时间大于 1分钟 则请求拒绝
