
function FindProxyForURL(url, host) {
  // Variables defined to proxy or send direct
  var proxy = 'PROXY relay.lsaccess.me:62312';
  var direct = 'DIRECT';
  // Internal IP Ranges
  if (
    isInNet(host, "127.0.0.0", "255.0.0.0") ||
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0") ||
    isInNet(host, "192.168.0.0", "255.255.0.0") ||
    isInNet(host, "169.254.0.0", "255.255.0.0")
  ) {
    return direct;
  }
  // Send Plain Hostnames DIRECT
  if (isPlainHostName(host))
    return "DIRECT";
  // Send FTP traffic DIRECT
  if (url.substring(0, 4) === 'ftp:') {
    return direct;
  }
  // Entries to cover subdomains
  var no_proxy_subs = Array(
	".standardisedassessment.gov.scot",
	".measaidheancoitcheann.gov.scot",
	".sophos.com",
	".nhsattend.direct",
	".attendanywhere.com",
	".edu.local",
	".googleapis.com",
	".googleusercontent.com",
	".website-editor.net",
	".azureedge.net",
	".msedge.net",
	".amazon.com",
	".portal.cne-siar.gov.uk",
	".slack-msgs.com:443",
	".microsoft.com",
	".msftconnecttest.com",
	".apple.com",
	".ably.io",
	".twilio.com",
	".icloud.com",
	".lsmdm.com",
	".turn.anyfirewall.com",
	".q73sd1i7s5.execute-api.us-west-2.amazonaws.com",
	".d5h6hjc5h3.execute-api.us-west-1.amazonaws.com",
	".p7nvu5it0k.execute-api.us-west-2.amazonaws.com",
	".lsrelay-extensions-production.s3.amazonaws.com",
	".oscp.apple.com",
	".mzstatic.com",
	".digicert.com",
	".lsmdm.com",
	".lsfilter.com",
	".relay.school",
	".lightspeedsystems.com"
  );
  // Entries to cover exact match domains
  var no_proxy_exact = Array(
	"standardisedassessment.gov.scot",
	"measaidheancoitcheann.gov.scot",
	"sophos.com",
	"nhsattend.direct",
	"attendanywhere.com",
	"edu.local",
	"googleapis.com",
	"googleusercontent.com",
	"website-editor.net",
	"azureedge.net",
	"msedge.net",
	"amazon.com",
	"portal.cne-siar.gov.uk",
	"slack-msgs.com:443",
	"microsoft.com",
	"msftconnecttest.com",
	"apple.com",
	"ably.io",
	"twilio.com",
	"icloud.com",
	"lsmdm.com",
	"turn.anyfirewall.com",
	"q73sd1i7s5.execute-api.us-west-2.amazonaws.com",
	"d5h6hjc5h3.execute-api.us-west-1.amazonaws.com",
	"p7nvu5it0k.execute-api.us-west-2.amazonaws.com",
	"lsrelay-extensions-production.s3.amazonaws.com",
	"oscp.apple.com",
	"mzstatic.com",
	"digicert.com",
	"lsmdm.com",
	"lsfilter.com",
	"relay.school",
	"lightspeedsystems.com"
  );
  // Match the above lists to send direct
  for (var iter = 0; iter < no_proxy_subs.length; ++iter) {
    if (dnsDomainIs(host, no_proxy_subs[iter])) {
      return direct;
    }
  }
  for (var iter = 0; iter < no_proxy_exact.length; ++iter) {
    if (localHostOrDomainIs(host, no_proxy_exact[iter])) {
      return direct;
    }
  }
  // DEFAULT RULE: All other traffic sent to proxy.
  return direct;
}
