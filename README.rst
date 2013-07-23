NANOFOROM - jQuery plugin to create beautiful one-field forms
=============================================================

| **nanoform** is a jQuery plugin for creating beautiful one-field forms. Perfect for landing pages email submission. Looks and behaves exactly the same in all browsers (mobile and PC) including Internet Explorer 9, 8, 7 and even 6.
|
| *nanoform* has 2 modes:
|
|    *Engage mode*   - Default mode, with the form overlay shown and calling to action. The form returns to this mode from the Input mode on **blur** if no input text was entered.
|
|    *Input mode*    - Interactive mode for entering text and submitting. Triggered by hovering or clicking on the form in the Engage mode.

Requirements
------------
`jQuery <http://jquery.com/>`_ (v1.10.2 is included with the example)


Usage
-----

Once you've added ``jquery.nanoform.js`` and ``jquery.nanoform.css`` to the list of script and style files that are loaded in your html page,
simply call the *nanoform* method on an empty element on the page:

::

    $('#myform').nanoform(options);


Options
~~~~~~~

In order for the **nanoform** to work properly, the only mandatory parameter is ``fn`` which specifies the function you want the form to execute when clicking the submit button.

.. csv-table::
   :header: "Name", "Type", "Default", "Description"
   :widths: 20, 10, 10, 200

   "fn",           function,   none,     "Function to be execute when clicking submit"
   "placeholder",  string,     empty,    "Placeholder while there's no input in the form"
   "submit_html",  html,       empty,    "HTML code you'd like to be appended to the submit button"
   "overlay_html", html,       empty,    "HTML code you'd like to be appended to the overlay element"
   "overlay_html", html,       empty,    "HTML code you'd like to be appended to the overlay element"
   "to_w",         string,     none,     "The width to stretch to in Input mode (rem, em, px, pt). If not specified, the form remains the same width as in Engage mode."
   "to_l",         string,     none,     "The amount of units to move left in Input mode (rem, em, px, pt). If not specified, the form remains the same position as in Engage mode."


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