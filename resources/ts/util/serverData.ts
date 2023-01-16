import { DegreeProgramEditorServerDataType } from '../defs';

if ((window as any).DegreeProgramEditorServerData === undefined) {
    throw new Error('Server data could not be loaded.');
}

export default (window as any).DegreeProgramEditorServerData as DegreeProgramEditorServerDataType;
