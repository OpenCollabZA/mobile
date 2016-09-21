/*!
Copyright (c) 2013 Brad Vernon <bradbury.vernon@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


angular.module('ng-iscroll', []).directive('ngIscroll', function (){
	return {
		replace : false,
		restrict : 'A',
		link : function (scope, element, attr){

			// The scrolling wrapper
			var scrollWrapper = $(element)[0];

			// The content container that will be scrolled
			var scroller = $(element).children('.scroller')[0];


			// default timeout
			var ngiScrollTimeout = 5;
			var refreshDelay = 0;
			var lastHeight = 0;


			// default options
			var ngiScrollOpts = {
				mouseWheel : true,
				preventDefault : false
			};

			// scroll key /id
			var scrollKey = attr.ngIscroll;

			if (scrollKey === '') {
				scrollKey = attr.id;
			}

			// if ng-iscroll-form='true' then the additional settings will be supported
			if (attr.ngIscrollForm !== undefined && attr.ngIscrollForm == 'true') {
				ngiScrollOpts.useTransform = false;
				ngiScrollOpts.onBeforeScrollStart = function (e){
					var target = e.target;
					while (target.nodeType != 1){
						target = target.parentNode;
					}
					if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA'){
						e.preventDefault();
					}
				};
			}

			if (attr.ngIscrollRefresh !== undefined && attr.ngIscrollRefresh > 0) {
				refreshDelay = attr.ngIscrollRefresh;
				setInterval(function(){
					if(scope.$parent.myScroll[scrollKey]){
						if (scroller.height() !== lastHeight){
							lastHeight = scroller.height();
							scope.$parent.myScroll[scrollKey].refresh();
						}
					}

				}, refreshDelay);
			}

			if (scope.myScrollOptions) {
				for (var i in scope.myScrollOptions) {
					if (i === scrollKey) {
						for (var k in scope.myScrollOptions[i]) {
							ngiScrollOpts[k] = scope.myScrollOptions[i][k];
						}
					}
					else if(scope.$root.myScrollOptions){
						ngiScrollOpts[i] = scope.$root.myScrollOptions[i];
					}
				}
			}

			// iScroll initialize function
			function setScroll(){
				if (scope.$parent.myScroll === undefined) {
					scope.$parent.myScroll = [];
				}

				scope.$parent.myScroll[scrollKey] = new IScroll(scrollWrapper, ngiScrollOpts);
			}

			// new specific setting for setting timeout using: ng-iscroll-timeout='{val}'
			if (attr.ngIscrollDelay !== undefined) {
				ngiScrollTimeout = attr.ngIscrollDelay;
			}

			// watch for 'ng-iscroll' directive in html code
			scope.$watch(attr.ngIscroll, function (){
				setTimeout(setScroll, ngiScrollTimeout);
			});


			// Prevent default touch event on the element
			scrollWrapper.addEventListener('touchmove', function (e) {
				e.preventDefault();
			}, false);

			// Listen for scroller refresh events
			scope.$on('iScrollRefresh', function(event, data){
				scope.$parent.myScroll[data.scollerId].refresh();
			});

			// Watch the height of the element
			scope.$watch(
					// This is the listener function
					function() {
						return $(scroller).height();
					},
					// This is the change handler
					function(newValue, oldValue) {
						if ( newValue !== oldValue ) {
							setTimeout(function () {
								scope.$parent.myScroll[scrollKey].refresh();
							}, 100);

						}
					}
				);

		}
	};
});
