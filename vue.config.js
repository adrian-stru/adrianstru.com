module.exports = {
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg');
   
      svgRule.uses.clear();
   
      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(glsl|vs|fs)$/,
                    loader: 'ts-shader-loader'
                },
            ]
        }
    },
  };