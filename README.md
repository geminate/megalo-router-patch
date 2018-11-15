# megalo-router-patch
> 在 [megalo](https://github.com/kaola-fed/megalo) 中使用 vue-router 的路由写法, 可自动转换为对应小程序的路由写法。

## 安装
``` bash
npm i megalo-router-patch
```

## 使用
``` bash
// main.js
import Vue from 'vue'
import MegaloRouterPatch from 'megalo-router-patch'

Vue.use(MegaloRouterPatch)
```

## Api

### this.$router

#### 属性
- this.$router.app

当前页面实例

- this.$router.currentRoute

当前页面的路由信息对象，和 this.$route 相同

#### 方法
- this.$router.push(location, onComplete, onAbort, onSuccess)
```js
// 跳转至某页面(字符串形式)   --->   navigateTo()
this.$router.push('/pages/home/index')

// 跳转至某页面(对象形式)   --->   navigateTo()
this.$router.push({ path: '/pages/home/index' })

// 跳转至某页面(带参数)   --->   navigateTo()
this.$router.push({ path: '/pages/home/index', query: { id: 1 } })

// Tab 切换   --->   switchTab()
this.$router.push({ path: '/pages/home/index', isTab: true })

// 重启至某页面   --->   reLaunch()
this.$router.push({ path: '/pages/home/index', reLaunch: true })
```
- this.$router.replace(location, onComplete, onFail, onSuccess)
```
// 关闭当前页面，跳转至某页面   --->   redirectTo()
this.$router.replace('/pages/home/index')
```
- this.$router.go(delta)
```
// 返回多级页面   --->   navigateBack()
this.$router.go(4)
```
- this.$router.back()
```
// 返回上一页面   --->   navigateBack()
this.$router.back()
```

### this.$route

#### 属性
- this.$router.path

当前页面的路径字符串
```
"/pages/home/index"
```

- this.$router.query

当前页面的参数对象
```
{
    name: geminate,
    age: 23
}
```

- this.$router.fullPath
```
"/pages/home/index?name=geminate&age=23"
```

当前页面的完整路径，包含查询参数等

- this.$router.name

自动生成的页面名称
```
"pagesHomeIndex"
```

## TODO
- [ ] 导航守卫


***
> 参考自 [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch)