namespace TcHmi {
    export namespace Functions {
        export namespace TcHmiProject2 {
			export function TcaStoragePopup(popup: any, command: any) {

                const parent = popup.getParent()?.getParent();
                const parentId = parent?.getId();

                function svgClicked(event: any) {
                    const target = event.target as SVGElement;

                    // Die Gruppe (<g>) finden
                    let group: SVGGElement | null = null;
                    if (target.tagName.toLowerCase() === 'g') {
                        group = target as SVGGElement;
                    } else {
                        // Zum Eltern-Element <g> navigieren
                        group = target.closest('g');
                    }


                    if (group) {

                        const groupId = group?.id
               
                        TcHmi.Symbol.writeEx(`%pp%${parentId}::_workpiecePlaceId%/pp%`, group?.id, function (data: TcHmi.Symbol.IWriteResultObject) {
                            if (data.error === TcHmi.Errors.NONE) {
                                popup.open();
                                const userControlHost = popup.getChildren()?.[0]; 
                                const userControl = userControlHost.getChildren()?.[0]; 

                                TcHmi.Symbol.readEx2(`%pp%${parentId}::data::WorkpiecesData[${groupId}]%/pp%`, function (data) {
                                    if (data.error === TcHmi.Errors.NONE) {

                                        TcHmi.Symbol.writeEx(`%pp%${parentId}::_wpcdata%/pp%`, data.value, function (data: TcHmi.Symbol.IWriteResultObject) {

                                            if (data.error === TcHmi.Errors.NONE) {
                                                // Setup userControl
                                                console.log(popup)
                                                popup.setWidth(userControl?.getWidth() + 20);
                                                popup.setHeight(userControl?.getHeight() + 96);
                                                popup.setWidthUnit(userControl.getWidthUnit() ?? 'px');
                                                popup.setHeightUnit(userControl.getHeightUnit() ?? 'px');
                                            } 
                                        });
                                    } 
                                });
                            }
                        });
                    }
                }

                if (command == "open") {
                    svgClicked(event);
                }

                if (command == "write") {

                    const userControlHost = popup.getChildren()?.[0]; 
                    const userControl = userControlHost.getChildren()?.[0]; 

                    TcHmi.Symbol.readEx2(`%pp%${parentId}::_wpcdata%/pp%`, function (data) {
                        if (data.error === TcHmi.Errors.NONE) {

                            TcHmi.Symbol.readEx2<string>(`%pp%${parentId}::_workpiecePlaceId%/pp%`, function (dataId) {
                                if (dataId.error === TcHmi.Errors.NONE) {
                                                                        
                                    TcHmi.Symbol.writeEx(`%pp%${parentId}::data::WorkpiecesData[${dataId.value}]%/pp%`, data.value, function (dataWrite: TcHmi.Symbol.IWriteResultObject) {
                                    });
                                }
                            });
                        } 
                    });

                }


            }
		}
    }
}
TcHmi.Functions.registerFunctionEx(
    'TcaStoragePopup',
    'TcHmi.Functions.TcHmiProject2',
    TcHmi.Functions.TcHmiProject2.TcaStoragePopup
);