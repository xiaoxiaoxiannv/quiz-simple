/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
    // 请实现……
    let fs = require("fs");
    let path = require("path");
    if (fs.existsSync(p)) {

        files = fs.readdirSync(p);

        files.forEach(function (file, index) {

            var curPath = path.join(p, file);

            if (fs.statSync(curPath).isDirectory()) {
                deleteMapFiles(curPath)
            } else {
                if (file.endsWith(".map")) {
                    fs.unlinkSync(curPath);
                    console.log("删除文件：" + curPath);
                }
            }
        });
    } else {
        console.log("给定的路径不存在！");
    }
};

// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
