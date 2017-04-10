/**
 * Created by jamie.greenway
 *
 * Detect Plugin
 *
 * Call the following to get Browser version and device details
 * Browser        : BrowserDetect.browser
 * Browser Version: BrowserDetect.version
 * OS             : BrowserDetect.OS
 * OSVersion      : BrowserDetect.OSVersion
 */

var BrowserDetect = {
	init: function() {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		this.OSVersion = this.searchString(this.dataOSVersion) || "an unknown OS Version";
	},
	searchString: function(data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iPhone/iPod"
		},
		{
			string: navigator.userAgent,
			subString: "android",
			identity: "Android"
		},
		{
			string: navigator.userAgent,
			subString: "iPad",
			identity: "iPad"
		},
		{
			string: navigator.userAgent,
			subString: "Windows Phone",
			identity: "WindowsPhone"
		},
		{
			string: navigator.userAgent,
			subString: "BlackBerry",
			identity: "Blackberry"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	],
	dataOSVersion : [
		{
			string: navigator.oscpu,
			subString: "Windows NT 5.1 | Windows XP",
			identity: "XP"
		},
		{
			string: navigator.oscpu,
			subString: "Windows NT 5.2",
			identity: "Server 2003"
		},
		{
			string: navigator.oscpu,
			subString: "Windows NT 6.0",
			identity: "Vista"
		},
		{
			string: navigator.oscpu,
			subString: "Windows NT 6.1",
			identity: "7"
		},
		{
			string: navigator.oscpu,
			subString: "Windows NT 6.2; WOW64",
			identity: "8 64bit"
		},
		{
			string: navigator.oscpu,
			subString: "Windows NT 6.2; WOW32",
			identity: "8 32bit"
		}
	]
};
BrowserDetect.init();