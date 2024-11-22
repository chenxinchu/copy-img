# 图片粘贴到网页中

- 监听`paste`事件
- 获取`event.clipboardData.items`
- 判断`items`中是否有图片
- 获取图片`blob`数据
- 将`blob`数据转换为`base64`
- 将`base64`数据转换为`img`标签



