import React, { DetailedHTMLProps, FC, HTMLAttributes, useState, useEffect, useCallback } from 'react';
import { ApiClass } from '../api/api';
import { File, Folder } from '../components';
import { IFile } from '../types/file.interface';
import { IFolder } from '../types/folder.interface';
import s from './MyBrowser.module.css';

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   expandedFolders?: string[]
}

export const MyBrowser: FC<IProps> = ({ expandedFolders = [] }) => {
   const [data, setData] = useState<(IFolder | IFile)[]>([]);

   const getData = useCallback(() => {
      const res = new ApiClass().getData();

      setData(res);
   }, []);
   
   useEffect(() => {
      getData();
   }, [getData]);

   const transformPaths = (paths: string[]): string[] => {
      const newPaths = paths.map(item => item.split('/')).flatMap((item) => item);
      const set = new Set(newPaths);
      return Array.from(set);
   };


   const renderData = (dataToRender: (IFolder | IFile)[], paths: string[]) => {
      return dataToRender.map((item) => {

         const isOpen = paths.includes(item.name);

         if (item.type === 'FOLDER') {
            return (
               <Folder name={item.name} isOpen={isOpen} key={item.name}>
                  {item.children.length ? renderData(item.children, paths) : null}
               </Folder>
            );
         } else return <File name={item.name} key={item.name} highlight={isOpen}/>
      });
   };

   return (
      <div className={s.browser}>         
         <div className={s.browser__content}>
            {renderData(data, transformPaths(expandedFolders))}
         </div>
      </div>
   );
};