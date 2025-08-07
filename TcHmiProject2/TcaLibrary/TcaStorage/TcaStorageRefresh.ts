namespace TcHmi {
	export namespace Functions {
		export namespace TcHmiProject2 {
			export function TcaStorageRefresh(container: any, statusColors: any) {


				const parent = container.getParent()?.getParent()			
                const parentId = parent?.getId()
				const content = container?.getElement()?.[0]?.querySelector('svg')

				TcHmi.Symbol.readEx2(`%pp%${parentId}::data::WorkpiecesData%/pp%`, function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
						for (let i = 0; i < 127; i++) {
							var circle =  content?.getElementById(`circle${i}`);

						    if (circle) {
						        var status = data.value[i]?.CurrentStatus ?? 0;
								circle.setAttribute('fill', statusColors[status].color);
						    }
						}
					}
				});

			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('TcaStorageRefresh', 'TcHmi.Functions.TcHmiProject2', TcHmi.Functions.TcHmiProject2.TcaStorageRefresh);
