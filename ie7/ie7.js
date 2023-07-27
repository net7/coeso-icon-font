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
		'icon-workflow-party': '&#xe951;',
		'icon-alert-solid': '&#xe933;',
		'icon-confirm-solid': '&#xe94f;',
		'icon-failure-solid': '&#xe950;',
		'icon-match': '&#xe931;',
		'icon-Data_access_open': '&#xe919;',
		'icon-Data_access_close': '&#xe91a;',
		'icon-open-in-new-tab': '&#xe918;',
		'icon-updated': '&#xe917;',
		'icon-community-member': '&#xe916;',
		'icon-image': '&#xe94e;',
		'icon-file': '&#xe94d;',
		'icon-find-funding': '&#xe939;',
		'icon-missing-info': '&#xe94a;',
		'icon-spoken-languages': '&#xe94b;',
		'icon-featured': '&#xe94c;',
		'icon-location': '&#xe948;',
		'icon-joined': '&#xe949;',
		'icon-link-variant': '&#xe947;',
		'icon-academic': '&#xe929;',
		'icon-account': '&#xe92a;',
		'icon-activist': '&#xe92b;',
		'icon-advanced': '&#xe92c;',
		'icon-amateur': '&#xe92d;',
		'icon-arrow-down': '&#xe92e;',
		'icon-basic-info': '&#xe92f;',
		'icon-collaboration': '&#xe930;',
		'icon-created-on': '&#xe932;',
		'icon-minus': '&#xe934;',
		'icon-deadline': '&#xe935;',
		'icon-domain-expert': '&#xe936;',
		'icon-export': '&#xe937;',
		'icon-filter': '&#xe938;',
		'icon-funded': '&#xe93a;',
		'icon-funding': '&#xe93b;',
		'icon-url': '&#xe93c;',
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
		'icon-info-solid': '&#xe902;',
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
		'icon-chevron-down': '&#xe920;',
		'icon-chevron-left': '&#xe921;',
		'icon-chevron-up': '&#xe922;',
		'icon-chevron-right': '&#xe923;',
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
