/*
    NANOFORM - A jQuery plugin to create beautiful one-field forms
    --------------------------------------------------------------
    
    Copyright (C) 2013, Leandigo (www.leandigo.com)
    
    This code is released under the MIT License:

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
*/

(function($) {
    $.fn.nanoform = function(options) {
        // Detect if the browser support a placeholder for an input field
        var hasPlaceholder = 'placeholder' in document.createElement('input');
        
        if (hasPlaceholder) {
            var $input   = $(document.createElement('input')).addClass('nanoform-input').addClass('nanoform-anim').attr('placeholder', options.placeholder)
            ,   $submit  = $(document.createElement('div')).addClass('nanoform-submit').html(options.submit_html)
            ,   $overlay = $(document.createElement('div')).addClass('nanoform-overlay').addClass('nanoform-anim').html(options.overlay_html)
            ,   $form    = this.append([$input, $submit, $overlay]).addClass('nanoform')
            ,   ovl_w    = $overlay.width()
            ,   input_w  = $input.width()
            ,   submit_l = $submit.css('left')
            ,   to_w     = options.to_w
            ,   to_l     = options.to_l
            ;   
        } else {
            var $input   = $(document.createElement('input')).attr('id', 'nanoform-input').addClass('nanoform-input').addClass('nanoform-anim')
            ,   $label   = $(document.createElement('label')).attr('for', 'nanoform-input').addClass('nanoform-placeholder').html(options.placeholder)
            ,   $submit  = $(document.createElement('div')).addClass('nanoform-submit').html(options.submit_html)
            ,   $overlay = $(document.createElement('div')).addClass('nanoform-overlay').addClass('nanoform-anim').html(options.overlay_html)
            ,   $form    = this.append([$input, $label, $submit, $overlay]).addClass('nanoform')
            ,   ovl_w    = $overlay.width()
            ,   input_w  = $input.width()
            ,   submit_l = $submit.css('left')
            ,   to_w     = options.to_w
            ,   to_l     = options.to_l
            ;
        }
        
        $submit.click(function() { options.fn($input.val()); } );
        $form.mouseenter(expandfield).mouseleave(collapsefield);
        $input.focusout(collapsefield);
        $input.keypress(function(event) {
            $input.val().length > 0 ? $label.hide() : $label.fadeIn();
            if (event.which == 13) {
                options.fn($input.val());
            }
        });
        bindtouch();
        
        function bindtouch() {
            $form.bind('touchstart', function() { $form.unbind('mouseenter'); expandfield(); });
        }
        
        function expandfield() {
            if ($input.val() === '') {
                $form.unbind('touchstart');
                $input.animate({width: '+=' + to_w, left: "+=-" + to_l}, "fast");
                $submit.animate({left: '+=' + to_l}, "fast");
                $overlay.fadeOut({queue: false}, "fast").animate({width: '+=' + to_w, left: "+=-" + to_l}, "fast");
            }
            if (!hasPlaceholder && !($input.val().length > 0)) {
                $label.fadeIn();
            }
        }
        
        function collapsefield() {
            if ($input.val() === '') {
                $overlay.stop(true, true).fadeIn({queue: false}, "fast").animate({width: ovl_w, left: ""}, "fast");
                $submit.stop(true, true).animate({left: submit_l}, "fast");
                $input.stop(true, true).animate({width: input_w, left: ""}, "fast", function() {
                    document.activeElement == $input[0] && $input.blur();
                    bindtouch();
                });
            }
            if (!hasPlaceholder) {
                $label.hide();
            }
        }
    };
})(jQuery);