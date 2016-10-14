[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/xujiaqi0830/jQuery-HoverTeeter/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/xujiaqi0830/jQuery-HoverTeeter.svg)](https://github.com/xujiaqi0830/jQuery-HoverTeeter/network)
[![GitHub stars](https://img.shields.io/github/stars/xujiaqi0830/jQuery-HoverTeeter.svg)](https://github.com/xujiaqi0830/jQuery-HoverTeeter/stargazers)

# 项目简述

### 名称

jQuery-HoverTeeter

### 简介

基于jQuery的扩展库。摒弃繁复设置，只使用JavaScript实现各种元素鼠标悬停效果。

由作者[个人站](https://github.com/xujiaqi0830/Cat-Hub)项目的一个小效果Teeterboard衍生。正在增加更多效果。

欢迎您的参与！

### 作者

> Jiaqi Xu
> ##### 个人博客: [http://xujiaqi0830.com/blog](http://xujiaqi0830.com/blog)
> ##### 邮箱: [xujiaqi0830@163.com](mailto:xujiaqi0830@163.com)

# 主要工具

 - jQuery

# 使用方法

## 通用

1. 页面内**按先后顺序**引用jquery库与该项目效果库(以teeterboard效果为例)：

```html
<script src="jquery.js" charset="utf-8"></script>
<script src="jquery.ht-teeterboard.min.js" charset="utf-8"></script>
```

2. 页面js文件内为想应用效果的jQuery对象调用对应方法(以teeterboard效果为例)：

```javascript
$(selector).addTeeterboard();
```

## 详细

### 1.Teeterboard - 跷跷板效果
- 文件名: jquery.ht-teeterboard.min.js


- 效果说明
 - 默认参数实现鼠标悬停下压效果，3D化界面元素
 - 根据距离中心点的距离变化下压角度

- 方法说明

```javascript
$(selector).addTeeterboard(deg, persp)
```

参数 | 可选 | 数据类型 | 说明 | 默认值
----|------|--------|------|-----
deg | 是   | Number  | 最大倾斜角度(deg) | 3
persp|是   | Number  | 景深(px) | 800

### 2.Magneto - 磁力吸附效果
- 文件名: jquery.ht-magneto.min.js

- 效果说明
 - 与teeterboard相反，默认参数实现鼠标吸附效果，3D化界面元素
 - 根据距离中心点的距离变化上扬角度

- 方法说明

```javascript
$(selector).addMagneto(deg, magforce, persp)
```

参数 | 可选 | 数据类型 | 说明 | 默认值
----|------|--------|------|-----
deg | 是   | Number  | 最大倾斜角度(deg) | 3
magforce | 是   | Number  | 吸附高度(px) | 25
persp|是   | Number  | 景深(px) | 800


# 更新日志

### v0.5.2 (Fri, 14 Oct 2016 03:36:34 GMT)
- 增加了磁力吸附ht-magneto效果及说明
- 优化了部分算法

### v0.5.1 (Thu, 13 Oct 2016 03:26:15 GMT)
- 定稿了项目名称与计划
- 完善了README.md
- 调整了项目文件结构

### v0.5.0 (Wed, 12 Oct 2016 10:51:23 GMT)
- 项目上线托管
- 增加了自定义倾斜角度、景深功能

# 项目结构

- 根目录 - 压缩代码
- source - 源代码

# 命名规范

为保持轻量化，每个效果请以两个单独文件的形式(压缩格式 + 源码)添加。

以名称为**effectname**的效果为例，敬请遵守如下格式：

位置 | 命名
---- | ----
效果名 | effectname
根目录压缩文件 |  jquery.ht-effectname.min.js
源代码文件 | jquery.ht-effectname.js
调用方法名 | addEffectname()

如您有任何问题或建议，请[邮件](mailto:xujiaqi0830@163.com)联系我，谢谢！

# 许可协议

MIT License

Copyright (c) 2016 Jiaqi Xu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
