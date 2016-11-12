app.factory('Utils', ['$timeout', function ($timeout) {
    'use strict';

    var Constants = {
        PopupType: {
            SUCCESS: 1,
            ERROR: 2,
            WARNING: 3,
            INFORMATION: 4
        }
    };

    /**
     * Shows popup and hides after some time specified in function
     * @popupType Success | Error | Information | Warning
     * @message to be shown
     */
    function showPopup(popupType, message) {
        var showHideTimeTransition = 800; // Change both from here and css (same value)
        var hideAfterSeconds = 4000;
        var popupDiv = document.createElement("div");
        popupDiv.className = "popup alert alert-danger";
        if (popupType === Constants.PopupType.SUCCESS) {
            popupDiv.className += " success-popup";
        } else if (popupType === Constants.PopupType.ERROR) {
            popupDiv.className += " error-popup";
        }
        popupDiv.innerHTML = message;
        var removeIcon = document.createElement("span");
        removeIcon.className = "glyphicon glyphicon-remove popup-close-icon";
        removeIcon.onclick = function () {
            if (popupDiv) {
                document.body.removeChild(popupDiv);
                popupDiv = null;
            }
        };
        popupDiv.appendChild(removeIcon);
        document.body.appendChild(popupDiv);
        $timeout(function () {
            if (popupDiv) {
                popupDiv.style.opacity = "0";
            }
        }, hideAfterSeconds);

        $timeout(function () {
            if (popupDiv) {
                document.body.removeChild(popupDiv);
            }
        }, hideAfterSeconds + showHideTimeTransition);
    }

    /**
     * Get Element By Id
     * @param id
     * @returns {Element}
     */
    function byId(id) {
        return document.getElementById(id);
    }

    return {
        /**
         * Decode base64 string
         * @param str
         * @returns {string}
         */
        decodeBase64: function (str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        },

        /**
         * Build form data (key=value&key2=value2&)
         */
        buildFormData: function (data) {
            var str = "";
            var key;
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    if (data[key] !== null) {
                        str += key + "=" + data[key] + "&";
                    }
                }
            }
            return str.substr(0, str.length - 1);
        },

        /**
         * Show Loading Mask
         * @nodeTree Takes node where to be shown
         * Add image ../app/images/ball-triangle-loader.svg
         */
        showLoadingMask: function () {
            var html = document.documentElement;
            var isWebPage = (document.getElementById('webflag'));
            if (document.getElementById("loadingContainer") == null) {
                var loadingContainer = document.createElement("div");
                loadingContainer.id = "loadingContainer";
                html.appendChild(loadingContainer);
                var loadingDiv = document.createElement("div");
                loadingDiv.style.position = "fixed";
                loadingDiv.style.top = "0"; //Header height
                loadingDiv.style.bottom = "0";
                loadingDiv.style.right = "0";
                loadingDiv.style.left = "0";
                loadingDiv.style.width = "100%";
                loadingDiv.style.height = "100%";
                //loadingDiv.style.backgroundImage= isWebPage ? "url('app/assets/images/loading-material.svg')" : "url('../app/assets/images/loading-material.svg')";
                loadingDiv.style.backgroundRepeat = "no-repeat";
                loadingDiv.style.backgroundPosition = "center calc(50% - 65px)";
                loadingDiv.style.backgroundColor =  isWebPage ? "#518196" : "rgba(255, 255,255, 0.5)";
                loadingDiv.style.backgroundSize = "60px";
                loadingDiv.style.zIndex = "500000";
                loadingContainer.insertBefore(loadingDiv, loadingContainer.firstElementChild);
            }
        },

        /**
         * Hides loading mask from node after 0.3s (delay for good looking)
         * @callback do stuff after loading mask is removed, Used at Http Factory when multiple request are sent async
         * @timeout delay in ms(optional)
         */
        hideLoadingMask: function (callback, timeout) {
            if (timeout === null || timeout === undefined) {
                timeout = 0; //Default
            }
            $timeout(function () {
                var loadingContainer = document.getElementById("loadingContainer");
                if (loadingContainer != null && loadingContainer.firstElementChild) {
                    var html = document.documentElement;
                    html.removeChild(loadingContainer);
                }
                callback(); // @TODO - Inspect more, bad boy
            }, timeout);
        },
        showSuccessPopup: function (message) {
            showPopup(Constants.PopupType.SUCCESS, message);
        },
        showErrorPopup: function (message) {
            showPopup(Constants.PopupType.ERROR, message);
        },
        /**
         * Gets element By Id
         * @param id
         * @returns {*}
         */
        byId: function(id) {
            return byId(id);
        }
    };
}]);
