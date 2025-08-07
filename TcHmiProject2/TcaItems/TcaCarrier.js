// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject2;
        (function (TcHmiProject2) {
            function TcaCarrier(ctx, svg) {

            // read value from symbol
            var value1, value2;
            TcHmi.Symbol.readEx2('%pp%WorkpieceStatusCount_1%/pp%', function (data) { value1 = data.value; });
            TcHmi.Symbol.readEx2('%pp%WorkpieceStatusCount_2%/pp%', function (data) { value2 = data.value; });

            //console.log(value1);
            //console.log(value2);
            
            // get svg Document
            var mySVG = TcHmi.Controls.get(svg).__element[0].firstChild.firstElementChild;
            mySVG.addEventListener('load', function () {
	        var svgDoc = mySVG.getSVGDocument();	

	        // change svg Document
	        svgDoc.getElementsByClassName('cls-3')[0].textContent = value1; 
	        svgDoc.getElementsByClassName('cls-3')[1].textContent = value2;
	
});



            }
            TcHmiProject2.TcaCarrier = TcaCarrier;
        })(TcHmiProject2 = Functions.TcHmiProject2 || (Functions.TcHmiProject2 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('TcaCarrier', 'TcHmi.Functions.TcHmiProject2', TcHmi.Functions.TcHmiProject2.TcaCarrier);
