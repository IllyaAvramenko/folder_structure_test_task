import { IFile } from '../types/file.interface';
import { IFolder } from '../types/folder.interface';
import data from './data.json';

export class ApiClass {
   getData(search: string = ''): IFolder[] {
      const res: IFolder[] = [];

      if (search) {
         const newData = data as IFolder[];

         newData.forEach((item) => {
            const folder = filterData(item, search); 

            if (folder) {
               res.push(folder);
            }
         });

         return res;
      } 
      
      return data as IFolder[];
   }
}

const filterData = (folder: IFolder, search: string): IFolder | null => {
   let item: IFolder | null = null;

   const req = (data: (IFolder | IFile)[]) => {
      for (let itm of data) {

         if (itm.type === 'FOLDER' && itm.children.length) {
            req(itm.children);
         } else {
            if (new RegExp(search).test(itm.name)) {
               item = folder;
            }
         }
      }
   };

   req(folder.children);

   return item;
};