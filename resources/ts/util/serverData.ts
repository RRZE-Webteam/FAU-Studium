import { DegreeProgramEditorServerDataType } from '../defs';

export default function serverData() {
    if ((window as any).DegreeProgramEditorServerData === undefined) {
        throw new Error('Server data could not be loaded.');
    }

    return (window as any).DegreeProgramEditorServerData as DegreeProgramEditorServerDataType;
}
