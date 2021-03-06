$(function () {
    $('.ajax-form').submit(function (e) {
        const $form = $(this);
        e.preventDefault();
        /* remove all alert */
        hideAlert($form);
        /* remove field error*/
        clearFieldError($form);

        /* TODO: loading state */

        /* collect input data then disable inputs */
        const postData = $form.serialize();
        disableInputs($form)

        /* ajax post process */
        $.ajax({
            url    : $form.attr('action'),
            type   : 'POST',
            data   : postData,
            success: function (data) {
                showSuccess($form);
                enableInputs($form);
                clearInputs($form);
                $('html, body').animate({
                    scrollTop: $form.offset().top - 150
                }, 500);
            },
            error  : function (data) {
                showError($form, data.responseJSON.error);
                enableInputs($form)
                $('html, body').animate({
                    scrollTop: $form.offset().top - 150
                }, 500);
            }
        });
        function clearInputs($form){
            $form.find('input, textarea').val('');
        }

        function disableInputs($form) {
            $form.find('input, textarea, select, button').attr('disabled', true);
        }

        function enableInputs($form) {
            $form.find('input, textarea, select, button').removeAttr('disabled');
        }

        function clearFieldError($form) {
            $form.find('input, textarea, select').removeClass('is-invalid');
        }

        function hideAlert($form) {
            $form.find('.alert').addClass('d-none');
        }

        function showSuccess($form, message = '') {
            $form.find('.alert.alert-success').removeClass('d-none');
        }

        function showError($form, errors) {
            $form.find('.alert.alert-danger').removeClass('d-none');
            $form.find('.alert-danger').text('');
            try {
                for (const [key, value] of Object.entries(errors)) {
                    $form.find('.alert-danger').append(`${value}<br/>`);
                    $form.find(`[name=${key}]`).addClass('is-invalid');
                    $form.find(`[name=${key}] + .invalid-feedback`).text(value);
                }
            } catch (e) {
                console.log(e);
                $form.find('.alert-danger').text('Oops, something went wrong');
            }
        }
    });

    function rescaleGoogleCaptcha(){
        $captcha =  $('.g-recaptcha iframe');
        var width = $captcha.parent().width();
        var scale;
        if (width < 302) {
            scale = width / 302;
        } else{
            scale = 1.0;
        }

        $captcha.css('transform', 'scale(' + scale + ')');
        $captcha.css('-webkit-transform', 'scale(' + scale + ')');
        $captcha.css('transform-origin', '0 0');
        $captcha.css('-webkit-transform-origin', '0 0');
    }
    function rescaleHCaptcha(){
        $captcha =  $('.h-captcha iframe');
        var width = $captcha.parent().width();
        var scale;
        if (width < 303) {
            scale = width / 302;
        } else{
            scale = 1.0;
        }

        $captcha.css('transform', 'scale(' + scale + ')');
        $captcha.css('-webkit-transform', 'scale(' + scale + ')');
        $captcha.css('transform-origin', '0 0');
        $captcha.css('-webkit-transform-origin', '0 0');
    }

    rescaleGoogleCaptcha();
    rescaleHCaptcha();

    $( window ).resize(function() {
        rescaleGoogleCaptcha();
        rescaleHCaptcha();
    });
})
