A jQuery plugin to create beautiful one-field forms
===================================================

nanoform is a jQuery extension for creating beautiful one-field cross-browser forms. Perfect for landing pages email submit or features request submission.
The nanoform has 2 modes:
*Engage mode*   - Default mode, with the form overlay shown and calling to action. The form returns to this mode from the Input mode on `blur` if no input text was entered.
*Input mode*    - Interactive mode for entering text and submitting. Triggered by hovering or clicking on the form in the Engage mode.

Requirements
------------
`jQuery <http://jquery.com/>`_ (v1.10.2 is included with the example)


Usage
~~~~~
`$('element').nanoform({fn: youSubmitFunction});`

:``fn``: This is the only mandatory parameter. Indicates the function you want the form to execute upon clicking the submit button.

For more customization, the following optional parameters are available:
:``placeholder``: The string to be used as a placeholder while there's no input in the form.
:``submit_html``: HTML code you'd like to be appended to the submit button. By default the button will be blank with no indications, so it's advised to use this parameter to indicate a string or a image to be appended to the submit button.
:``overlay_html``: HTML code you'd like to be appended to the overlay element. As with `submit_html`, by default the overlay will be blank with no indications, so it's advised to use this parameter to indicate a string to be shown in Engage mode.
:``to_w``: The width to stretch to in Input mode (rem, em, px, pt). If not specified, the form remains the same width as in Engage mode.
:``to_l``: The amount of units to move left in Input mode (rem, em, px, pt). If not specified, the form remains the same position as in Engage mode.


Example
~~~~~~~
This example uses the `elShaker <https://github.com/leandigo/elShaker/>`_ extensions by Leandigo to visualize an erroneous form input.
::

    $('#contact').nanoform({
        fn:   submitEmailFunction,
        to_w: '7em',
        to_l: '3.5em',
        placeholder: 'Your email address',
        overlay_html: 'Notify me when ready!',
        submit_html: '<img style="margin-top: 80%;" src="img/submit.png">'
    });


`DEMO <http://leandigo.com/nanoform/>`_

License
-------
Copyright (c) 2013, Leandigo (|leandigo|_)
Released under the MIT License. See the LICENSE file for details.

.. |leandigo| replace:: www.leandigo.com
.. _leandigo: http://www.leandigo.com