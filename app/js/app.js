"use strict";

var profileApp = angular.module('profileApp', []);

profileApp.controller('ProfileController', function ProfileController($rootScope, $scope, $http, $location, $anchorScroll) {

    init();

    $http.get('js/model.json')
        .then(function(res) {
            $scope.profile = res.data;
            $rootScope.title = $scope.profile.name;
            $scope.goToSection = function(section) {
                scrollToId(section.id);
            };

            document.getElementById("copy-input").value = $scope.profile.email;
        });

    //filter for open source language select
    $scope.openSourceFilter = function(data) {
        if (typeof $scope.selOpenSrcLang != "undefined" && $scope.selOpenSrcLang) {
            for (var i = 0; i < data.languages.length; i++) {
                if (data.languages[i] === $scope.selOpenSrcLang) {
                    return true;
                }
            }
        } else {
            return true;
        }
        return false;
    };

    //filter for sofware language select
    $scope.softwareFilter = function(data) {
        if (typeof $scope.selSoftwareLang != "undefined" && $scope.selSoftwareLang) {
            for (var i = 0; i < data.languages.length; i++) {
                if (data.languages[i] === $scope.selSoftwareLang) {
                    return true;
                }
            }
        } else {
            return true;
        }
        return false;
    };

    // unselect select when change values
    $('.select-outline').change(function() {
        $('.select-outline').blur();
    });

    $('.select-tech').change(function() {
        $('.select-tech').blur();
    });

});

//scroll to top directive
profileApp.directive('scrollToTop', function() {
    return {
        restrict: 'A',
        link: function(scope, $elm) {
            $elm.on('click', function() {
                scrollToId("page-top");
            });
        }
    }
});

profileApp.filter('newlines', function() {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
}).filter('noHTML', function() {
    return function(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;');
    }
});

/**
 * Scroll to id 
 * @param  {String} id The id of the element to scroll to
 */
function scrollToId(id) {
    var anchor = document.getElementById(id);
    // scroll to id
    $("body").animate({ scrollTop: $(anchor).offset().top - 50 }, "slow");
    // close menu on item click
    $('.navbar-toggle:visible').click();
}

function init() {

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize the tooltip.
    $('#copy-button').tooltip();

    // When the copy button is clicked, select the value of the text box, attempt
    // to execute the copy command, and trigger event to update tooltip message
    // to indicate whether the text was successfully copied.
    $('#copy-button').bind('click', function() {
        document.getElementById("copy-input").style.display = "block";
        var input = document.querySelector('#copy-input');
        input.setSelectionRange(0, input.value.length + 1);
        try {
            var success = document.execCommand('copy');
            if (success) {
                $('#copy-button').trigger('copied', ['Email Copied!']);
            } else {
                $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
            }
        } catch (err) {
            $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
        }
        document.getElementById("copy-input").style.display = "none";
    });

    // Handler for updating the tooltip message.
    $('#copy-button').bind('copied', function(event, message) {
        $(this).attr('title', message)
            .tooltip('fixTitle')
            .tooltip('show')
            .attr('title', "Copy to Clipboard")
            .tooltip('fixTitle');
    });
}
