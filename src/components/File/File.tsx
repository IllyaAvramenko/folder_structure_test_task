import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './File.module.css';
import { VscFile } from "react-icons/vsc";
import cn from 'classnames';


export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
   name: string
   highlight?: boolean
}

export class File extends React.Component<IProps> {
   render () {
      return (
         <div className={cn(s.file, {
            [s.file_light]: this.props.highlight
         })}>
            <div className={s.file__icon}>
               <VscFile />
            </div>
            <div className={s.file__name}>
               {this.props.name}
            </div>
         </div>
      );
   };
};