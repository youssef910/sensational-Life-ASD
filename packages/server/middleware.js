import helmet from 'helmet';
import path from 'path';

export const configuredHelmet = () =>
  // more here: https://helmetjs.github.io/ and here: https://csplite.com/csp222/
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'", 'unpkg.com', 'polyfill.io', '*.youtube.com'],
        styleSrc: ["'self'", "https: 'unsafe-inline'"],
        fontSrc: ["'self'", 'https://*'],
        frameSrc: ["'self'", '*.youtube.com', '*.youtu.be'],
        upgradeInsecureRequests: [],
      },
    },
  });

export const httpsOnly = () => (req, res, next) => {
  if (!req.secure) {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
  }
  next();
};

export const permissionsPolicy = () => (req, res, next) => {
  res.setHeader('Permissions-Policy', 'interest-cohort=()');
  next();
};

export const logErrors = () => (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.sendStatus(500);
};

export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
  if (req.method === 'GET' && !req.url.startsWith(apiRoot)) {
    return res.sendFile(path.join(staticDir, 'index.html'));
  }
  next();
};
