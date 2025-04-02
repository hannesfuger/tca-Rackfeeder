// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 18.03.2025 14:58:51
 * Copyright (C) 2025
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let FrameworkPrj2;
        (function (FrameworkPrj2) {
            class FrameworkPrj2Control extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set in the class definition, so they have the value 'undefined'.
                - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_FrameworkPrj2_FrameworkPrj2Control-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called. 
                 * This function is only to be used by the System. Other function calls are not intended.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * This function is only to be used by the System. Other function calls are not intended.
                 */
                __detach() {
                    super.__detach();

                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */
                }
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if the framework destroys the control instance!
                 */
                destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                     * Free resources like child controls etc.
                     */
                }
            }
            FrameworkPrj2.FrameworkPrj2Control = FrameworkPrj2Control;
        })(FrameworkPrj2 = Controls.FrameworkPrj2 || (Controls.FrameworkPrj2 = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));

/*
 * Register Control
 */
TcHmi.Controls.registerEx('FrameworkPrj2Control', 'TcHmi.Controls.FrameworkPrj2', TcHmi.Controls.FrameworkPrj2.FrameworkPrj2Control);