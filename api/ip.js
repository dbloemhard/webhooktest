// Returns the caller's IP address. Accepts any HTTP method (Marketo uses POST/GET).
module.exports = (req, res) => {
  const xff = req.headers['x-forwarded-for'];
  const ip =
    req.headers['x-real-ip'] ||
    (xff ? xff.split(',')[0].trim() : null) ||
    req.socket.remoteAddress;

  // Visible in Vercel runtime logs, so you can review past calls.
  console.log(JSON.stringify({ ts: new Date().toISOString(), method: req.method, ip, xff }));

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    ip,
    forwardedFor: xff || null,
    method: req.method,
    timestamp: new Date().toISOString(),
  });
};
