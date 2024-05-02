import { DegreeProgramEditorServerDataType } from '../defs';

declare global {
	interface Window {
		DegreeProgramEditorServerData: DegreeProgramEditorServerDataType;
	}
}

export default function serverData() {
	if ( window.DegreeProgramEditorServerData === undefined ) {
		throw new Error( 'Server data could not be loaded.' );
	}

	return window.DegreeProgramEditorServerData as DegreeProgramEditorServerDataType;
}
