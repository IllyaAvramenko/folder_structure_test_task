import { IFile } from './file.interface';

export interface IFolder {
   children: IFile[] | IFolder[],
   name: string,
   type: "FOLDER"
}
