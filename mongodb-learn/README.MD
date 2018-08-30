# mongodb-learn
mongodb学习笔记
## 基本操作
#### `show dbs` 显示所有的数据库 
#### `use [database]` 选择数据库(不存在直接创建)
#### `db.dropDatabase()` 删除当前选中数据库
## 增
#### `db.[集合名].insert([json])` 对某个集合插入(不存在直接创建)
## 查
#### `db.[集合名].find([json])` 穿空查全部，json为查询条件
#### `db.[集合名].find([json]).count()` 对查询的结果计数
#### `db.[集合名].find([json]).skip([number])` 跳过多少条
#### `db.[集合名].find([json]).limit([number])` 显示多少条
#### `db.[集合名].find([json]).sort([json])` 根据某个字段排序
#### `db.[集合名].find({ $text: { $search: "" } })` 查询全文索引
## 改
#### `db.[集合名].update([查询条件], [更新内容])` 默认只会修改查到的第一条数据
#### `db.[集合名].update([查询条件],  {$set: {x: 10}})`  `$set` 更新部分字段
#### `db.[集合名].update([查询条件],  {$set: {x: 10}}, true)` 更新不存在即创建
#### `db.[集合名].update([查询条件],  {$set: {x: 10}}, false, true)`  更新所有查到的字段
## 删
#### `db.[集合名].remove([查询条件])` 默认删除所有查到的数据
#### `db.[集合名].drop()` 删除整张表
## 索引
#### `db.[集合名].getIndexes()` 获取当前索引
#### `db.[集合名].ensureIndex({ [字段]:[值] })` 创建索引 [字段为要加索引的字段] [值为1正向索引][值为"text"为全文索引]
#### `db.[集合名].ensureIndex({ time: new Date() }, { expireAfterSeconds: 30 })` 创建过期索引，时间为秒，到期自动删除，删除时间不精确

