# sequelize-learn
sequelize 学习踩坑代码记录

## 1、 mysql可视化工具 `heidiSQL`
`heidiSQL` 可以方便可视化建表，下载地址 https://www.heidisql.com/download.php
## 2、 自动化 `model` 生成工具 `sequelize-auto`
* 安装
  ```cmd
    npm install -g sequelize-auto
    
    // 如果使用MySQL/MariaDB，需要安装mysql：
    npm install -g mysql
    
    //如果使用Postgres，需要安装pg、pg-hstore两个模块：
    npm install -g pg pg-hstore
    
    //使用Sqlite3需要安装sqlite：
    npm install -g sqlite
    
    //使用MSSQL请安装tedious：
    npm install -g tedious
  ```
* 使用 

    默认参数
    ```cmd
    sequelize-auto -h  -d  -u  -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]
    
    例如
    
    sequelize-auto -h localhost -d xxxx -u root -x 123456
    
    -h, --host - 数据库的IP/主机名 [必选]
    -d, --database - 数据库名 [必选]
    -u, --user - 数据库的用户名。默认将根据数据库类型的默认用户生成数据库名
    -x, --pass - 数据库的密码。默认为空
    -p, --port - 数据库连接端口。默认为所使用数据库类型的默认端口号
    -c, --config - JSON文件，用于Sequelize构造函数的'options'选项对象。参见：http://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-init
    -o, --output - 模型输出目录。默认会在当前目录下生成'./models'目录
    -e, --dialect - 所使用的数据库类型(驱动类型)。默认为mysql
    -a, --additional - 一个包含模型定义参数的JSON文件。参见：http://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-instance-define
    -t, --tables - 指定所要导出的表，逗号分隔。默认为全部
    ```  
    
    快速使用 `sequelize-auto -h localhost -d [db名字] -u [用户名] -x [密码] `  
    
## 3、 Sequelize 和 MySQL 语法对照
* https://segmentfault.com/a/1190000003987871
* http://blog.csdn.net/flytam/article/details/78755367 (常用语法)

### Init
```
var Sequelize = require('sequelize');
var db = require('../db')


var wenScamera = db.define('wen', {
    name: {
        type: Sequelize.STRING(300)
    },
    content: {
        type: Sequelize.STRING(3000)
    },
    auther: {
        type: Sequelize.STRING(300)
    }
}, {
    timestamps: false
})
```
### 增
```javascript
wenScamera.create({
    name: query.name,
    content: query.content,
    auther: query.auther
});
```

### 删
```javascript
wenScamera.destroy({
    where: {
        id
    }
})
```


### 改
```javascript
wenScamera.update(
    {
        name: query.name,
        content: query.content,
        auther: query.auther
    },
    {
        where: {
            id: query.id//查询条件
        }
    }
);
```

### 查
```javascript
wenScamera.findOne({
    where: {
        id
    },
    attributes: ['id', 'name', 'content', 'auther']
});
```

### 查询一天内的数据
```javascript

  collection_vote.findAll({
      where: {
          $and: [
              {open_id: open_id}, // 条件
              DataTypes.where(
                  DataTypes.fn('DATE', DataTypes.col('create_time')), // 表对应的字段
                  DataTypes.literal('CURRENT_DATE')
              )
          ]
      }
  }

```

### 模糊查询 + 分页 + 自定义字段
```javascript
wenScamera.findAll({
    where : {
        name: {
            '$like': '%'+name+'%'
        }
    },
    attributes: ['id', 'name', 'content', 'auther'],
    'limit': pagen.pageSize,                      // 每页多少条
    'offset': pagen.pageSize * ( pagen.currentPage - 1 ),  // 跳过多少条
});
```
