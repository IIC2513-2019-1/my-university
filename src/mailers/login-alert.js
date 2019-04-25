module.exports = function sendLoginAlertEmail(ctx, { user }) {
  return ctx.sendMail('login-alert', { to: 'user@example.org', subject: 'Alert!' }, { user });
};
