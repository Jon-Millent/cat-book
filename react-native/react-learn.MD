# 学习react采坑记

## 语法问题
由于使用 `create-react-app` 创建打包，要使用es6语法，所以要从原来的react迁移到es6语法，具体差别见
* http://blog.csdn.net/haoshidai/article/details/52244620

## 路由问题
#### 路由语法问题
这里 `react-router` 要从以前用的版本迁移到 `4.x` 的用法，具体细节见
* https://www.cnblogs.com/sylarmeng/p/6920903.html
* http://reacttraining.cn/web/example/basic
#### 底部导航栏active状态跟着路由变化而变化
这个从网上搜了很多，没找到解决办法，最后使用 `window.location.hash` 解决
```jsx
  class App extends Component {

      complateRouterIsActive(routerLink){
          return window.location.hash.indexOf(routerLink) != -1 ? 'active' : ''
      }

      render() {
          return (
              <div className="App app-init-view">

                  <div className="app-view">
                      {this.props.children}
                  </div>

                  <ul className="app-footer">
                      <li className={ this.complateRouterIsActive('home') }><Link to="/home">主页</Link></li>
                      <li className={ this.complateRouterIsActive('about') }><Link to="/about">关于</Link></li>
                  </ul>

              </div>
          );
      }
  }
```
