<?php

/*
=============================================================================
CUSTOM SETTINGS FOR THE THEME OPTIONS PANEL
=============================================================================

Add new settings to the theme options panel here.
Every array item is a new setting.

Available values for "type" setting: checkbox,select,text,textarea,color,image_upload
Available values for "label" setting: main,layout,menu,footer,lists,titles,customizations,social

$HC_CUSTOM_PANEL
name : Theme's name
version : Theme's version
colors : Theme's panel colors

Documentation: wordpress.framework-y.com/advanced-api-documentation/#custom-theme

 */

global $HC_CUSTOM_PANEL;

$HC_CUSTOM_PANEL = array(
	'name'    => 'Lightwire',
	'version' => '1.1',
    'colors'  => array("#404040","#272727"),
    'demos' => array(array('id' => 'lightwire','name' => 'Main')),
    'demos_url' => 'http://themes.framework-y.com/demo-import/'
);


$HC_CUSTOM_FONT = "Coda|Rajdhani:400,500,600,700|Rubik:400,500";
$HC_SITE_FONTS = 'body, .adv-img p, .caption-bottom p, .adv-circle .caption p, .advs-box p, .list-blog p, .progress-circle .inner-circle p {
    font-family: [FONT-1] !important;
}
h1, h2, h3, h4, h5, h6, .btn, .nav-tabs.nav, .progress-bar, .progress-label, .navbar-mini .nav span, .title-base p, .advs-box-multiple .btn-text, .block-infos p, .accordion-list .list-group-item > a,
.adv-img-classic-box p.sub-text, .progress-circle .inner-circle, .advs-box-top-icon .extra-content, .img-box .caption, .timeline > li > .timeline-label p, .pricing-table .pricing-price,
.pricing-table .list-group-item, .list-items .list-item span, .album-title, .countdown .countdown-values, .advs-box-multiple div.circle, .pagination > li > a, .porfolio-bar a, .niche-box-post .tag-row,
.list-group-item.active, .list-blog .list-group-item, [class*=col-md-] > .tag-row, .comment-list .name, .content > .tag-row, .counter-box-icon .counter, .social-feed-fb li .meta-header .author,
.panel-default > .panel-heading {
    font-family: [FONT-2] !important;
}';


$HC_SITE_COLORS = '.navbar .navbar-nav > li:hover > a, .navbar .navbar-nav > li > a:before, .dropdown-menu:hover, .btn:before, .advs-box.boxed-inverse:before, .title-base h2:after,
.header-base .title-base h1:after, .pagination > li.page.active a, .pagination > li.page:hover a, .subline-bar li:hover, .btn-text:before, .advs-box-multiple div.circle {
    background-color: [MAIN-COLOR];
}

.white .btn.btn-yellow:before, .btn-yellow > .btn:before, .btn:before, .flex-control-paging li a.flex-active, .img-box.i-center .im-record-music:after, .box-steps .step-item:hover:before,
.progress-bar, .menu-transparent.scroll-css .btn.btn-border, .accordion-list .list-group-item > a:after, .accordion-list .list-group-item:before, .adv-img-classic-box .sub-text:before,
.mega-tabs .tab-box .nav-tabs > li.active > a, .bg-color, .timeline > li > .timeline-badge, .timeline > li > .timeline-label:before, .list-items .list-item:before, .nav.inner.ms-minimal > li:before,
.section-bg-color, input.btn:not(.btn-border), #sb-main .sb-chat-btn, #sb-main .sb-chat-header, #sb-main .sb-card.sb-card-right .sb-files a, #sb-main .sb-header, #sb-main .sb-chat .sb-card.sb-card-right,
#sb-main .sb-card-contacts .sb-btn-email, .sb-chat .sb-card.sb-card-right.sb-card-no-msg .sb-files a, .sb-cnt-global:not(.sb-chat-cnt) .sb-btn, .sb-submit, .list-blog input[type="submit"],
body .woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #review_form #respond .form-submit input, .header-base .title-base h1:before,
.pulse-line i:before, .pulse-line, .ul-squares li:before, .ul-squares li:after, .adv-img-side-content .caption p.sub {
    background-color: [MAIN-COLOR] !important;
}

.btn:not(.btn-border):hover, .btn-border, .btn-border i, .footer-menu a:hover, header.bg-transparent .navbar-mini .navbar-form .btn:hover, header .navbar-mini i.fa:hover, header .btn-border,
.ul-dots li:before, .advs-box-side-icon .icon-box i, .niche-box-team .content-box h4, .advs-box .tag-row i, .btn:not(.btn-border):hover i, .box-steps .step-number,
.mega-menu .fa-ul .fa-li, .icon-box-cell i, .advs-box.advs-box-top-icon.boxed .icon, .breadcrumb > li + li:before, .list-items .list-item span, .porfolio-bar div i, [class*=col-md-] > .tag-row i,
.content > .tag-row i, .box-menu-inner .icon-box i, .text-color.countdown .countdown-values, body.woocommerce-account .addresses .title .edit, .info-box i, .niche-box-post .social-group i:hover,
.pagination.pagination-lg > li:not(.page) > a:hover, .advs-box-top-icon:hover .extra-content {
    color: [MAIN-COLOR]
}

    .navbar .navbar-nav.lan-menu li > a:hover, .navbar-main .btn-search:hover span, .navbar-main .btn-search:hover .fa-close:before, .btn-border.btn-yellow, .btn-yellow > .btn-border,
    .img-box.i-center .im-record-music, .text-color, .white .btn-text:hover, .adv-img-classic-box p.sub-text, .white form p, .box-steps .step-item:after, .breadcrumb > .active,
    .nav.inner.ms-minimal > li.active > a, .adv-img h2, .adv-circle h2, header .side-menu-fixed .btn:hover, .text-color > .btn-text, .text-color .btn, .white .breadcrumb > .active,
    .icon-color i.icon, .inner.ms-minimal > li:hover > a, .woocommerce-info::before,body .woocommerce a.remove:hover, .btn-text i, .projects-slider .caption-bottom p,
    .projects-slider .caption h3, .counter-twoblocks.icon-box-top-bottom .icon-box-cell p {
        color: [MAIN-COLOR] !important;
    }

     .white .btn.btn-yellow, .white .btn-yellow > .btn, .btn-border:hover, .btn, .btn-text.text-color, .form-control:focus, .white .icon-box:not(.icon-box-top-bottom) .icon-box-cell:first-child,
        div.white .countdown > div:after, .img-box.thumbnail span:after, .img-box.thumbnail span:before, .name-box i, .list-item-img .icon, .white .form-control, .mega-tabs .nav-tabs, .pricing-table,
        .advs-box-top-icon .extra-content, .advs-box-side-icon .extra-content, .mi-menu ul li:hover > a, .mi-menu ul li.active > a, .img-box .caption, .timeline > li > .timeline-panel,
        .advs-box-top-icon-img .extra-content, .album-box > .img-box, .porfolio-bar div i:before, .widget .list-group-item.active, .list-group-item:hover, .list-blog a.img-box, .comment-list img,
        .text-color > .btn-text, .white form .btn.btn-border:hover, .sb-cnt-global:not(.sb-chat-cnt) .sb-btn, .sb-submit, .woocommerce-MyAccount-navigation li.is-active, .home.blog .list-blog > ul > li:hover,
        .searchform input[type="text"]:focus, .navbar-middle .custom-area .custom-menu span {
        border-color: [MAIN-COLOR] !important;
    }';
?>
