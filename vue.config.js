
module.exports = {
    // 基本路径
    publicPath:process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir:"dist",  //打包时生成的生产环境构建文件的目录
    /*devServer: {
        proxy: 'http://localhost:8080'
    }*/
}