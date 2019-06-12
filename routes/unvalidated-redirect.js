/**
 * @vulnerability: unvalidated-redirect
 */
module.exports = ({ router }) => {
  router.get('/unvalidated-redirect', (ctx, next) => {
    return ctx.render('unvalidated-redirect');
  });

  // endpoint for vuln
  router.get('/unvalidated-redirect-test', (ctx, next) => {
    return ctx.redirect(ctx.query.user_path);
  });

  router.get('/unvalidated-redirect-test-safe', (ctx, next) => {
    return ctx.redirect(encodeURIComponent(ctx.query.user_path));
  });
};