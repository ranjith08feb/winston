/**
 * Description: 
 *
 * This file contains the supoorting methods for installation page.
 * 
 */

'use strict'
$(document).ready(function () {
    app.initialized()
        .then(function (_client) {
            window.client = _client;
        }).catch(function () {
            handleError('Error occured while loading app. Please try again!');
        });
    $("span[id='$error_div']").hide();
})

/**
 * Function used to validate the installation form.
 **/
function validate() {
    let isValid = true;
    var input = "";
    input = $("input[name=fs_subdomain]").val();
    if (!input) {
        $("#fs_subdomain_error_div").show();
        isValid = false;
    } else {
        $("#fs_subdomain_error_div").hide();
    }
    input = $("input[name=fs_api_key]").val();
    if (!input) {
        $("#fs_api_key_error_div").show();
        isValid = false;
    } else {
        $("#fs_api_key_error_div").hide();
    }
    return isValid;
}