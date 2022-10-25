/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'coeso-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-academic': '&#xe929;',
		'icon-account': '&#xe92a;',
		'icon-activist': '&#xe92b;',
		'icon-advanced': '&#xe92c;',
		'icon-amateur': '&#xe92d;',
		'icon-arrow-down': '&#xe92e;',
		'icon-basic-info': '&#xe92f;',
		'icon-collaboration': '&#xe930;',
		'icon-community': '&#xe931;',
		'icon-created-on': '&#xe932;',
		'icon-created-on-variant': '&#xe933;',
		'icon-dash': '&#xe934;',
		'icon-deadline': '&#xe935;',
		'icon-domain-expert': '&#xe936;',
		'icon-export': '&#xe937;',
		'icon-filter': '&#xe938;',
		'icon-find-funding': '&#xe939;',
		'icon-funded': '&#xe93a;',
		'icon-funding': '&#xe93b;',
		'icon-link': '&#xe93c;',
		'icon-network': '&#xe93d;',
		'icon-plus': '&#xe93e;',
		'icon-policy-maker': '&#xe93f;',
		'icon-search': '&#xe940;',
		'icon-topics': '&#xe941;',
		'icon-view-profile': '&#xe942;',
		'icon-volunteer': '&#xe943;',
		'icon-twitter': '&#xe944;',
		'icon-facebook': '&#xe945;',
		'icon-linkedin': '&#xe946;',
		'icon-diary': '&#xe900;',
		'icon-home': '&#xe901;',
		'icon-info': '&#xe902;',
		'icon-setting': '&#xe903;',
		'icon-setup': '&#xe904;',
		'icon-team': '&#xe905;',
		'icon-tools': '&#xe906;',
		'icon-blog': '&#xe907;',
		'icon-calendar': '&#xe908;',
		'icon-email': '&#xe909;',
		'icon-file-storage': '&#xe90a;',
		'icon-instant-messaging': '&#xe90b;',
		'icon-meeting-scheduling': '&#xe90c;',
		'icon-personal-notes': '&#xe90d;',
		'icon-social-networks': '&#xe90e;',
		'icon-video-conference': '&#xe90f;',
		'icon-web-communication': '&#xe910;',
		'icon-word-processor': '&#xe911;',
		'icon-private': '&#xe912;',
		'icon-public': '&#xe913;',
		'icon-toast-attention': '&#xe927;',
		'icon-toast-info': '&#xe928;',
		'icon-done': '&#xe914;',
		'icon-welcome': '&#xe915;',
		'icon-sort-alfa': '&#xe916;',
		'icon-bold': '&#xe917;',
		'icon-image': '&#xe918;',
		'icon-link1': '&#xe919;',
		'icon-underline': '&#xe91a;',
		'icon-arrow-down1': '&#xe920;',
		'icon-arrow-left': '&#xe921;',
		'icon-arrow-up': '&#xe922;',
		'icon-arrow-right': '&#xe923;',
		'icon-logout': '&#xe924;',
		'icon-my-projects': '&#xe925;',
		'icon-spinner': '&#xe926;',
		'icon-collaborate': '&#xe91b;',
		'icon-more-options': '&#xe91c;',
		'icon-promote': '&#xe91d;',
		'icon-share': '&#xe91e;',
		'icon-trash': '&#xe91f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
