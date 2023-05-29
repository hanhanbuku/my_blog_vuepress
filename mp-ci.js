const mp = require('@wangyuhan329/mp-ci')
console.log(mp,13123)
const path = require('path')
run({
    config() {
        return {
            appid: "wxsomeappid",
            type: "miniProgram",
            projectPath: path.resolve(process.cwd(), "./dist/"),
            privateKeyPath: path.resolve(process.cwd(), "./dist/"),
            ignores: ["node_modules/**/*"],
        };
    },
    baseConfig(){
        return{
            version:'miniProgram_version',
            desc:'上传版本',
            robot:'30',
            setting:{
                es6: true,
                es7: true,
            }
        }
    }
})
