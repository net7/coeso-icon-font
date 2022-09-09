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
		'icon-done': '&#xe914;',
		'icon-welcome': '&#xe915;',
		'icon-Sort_alfa': '&#xe916;',
		'icon-bold': '&#xe917;',
		'icon-image': '&#xe918;',
		'icon-link': '&#xe919;',
		'icon-underline': '&#xe91a;',
		'icon-collaborate': '&#xe91b;',
		'icon-more-options': '&#xe91c;',
		'icon-promote': '&#xe91d;',
		'icon-share': '&#xe91e;',
		'icon-Trash': '&#xe91f;',
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
