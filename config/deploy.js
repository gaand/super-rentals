module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'gaand-super-rentals',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
