/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
(function(e){e.fn.fitText=function(t,n,r){n=typeof n!=="undefined"?n:false;var i;var s=t||1,o=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},r);return this.each(function(){var t=e(this);var r=function(){i=Math.max(Math.min(t.width()/(s*10),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize));if(!n)t.css("font-size",i)};r();e(window).on("resize.fittext orientationchange.fittext",r);if(n)return i})}})(jQuery)
