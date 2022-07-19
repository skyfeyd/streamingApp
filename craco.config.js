const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
            '@primary-color': 'lightblue' ,
            '@link-color': '#1DA57A' ,

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};