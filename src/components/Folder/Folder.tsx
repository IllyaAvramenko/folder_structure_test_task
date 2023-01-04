import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './Folder.module.css';
import { VscFolder, VscFolderOpened } from "react-icons/vsc";


export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   name: string
   isOpen: boolean
}

export interface IState {
   isOpenFolder: boolean
}

export class Folder extends React.Component<IProps, IState> {
   state = {
      isOpenFolder: this.props.isOpen
   }
   
   
   render () {
      return (
         <div className={s.folder}>
            <div className={s.folder__header} onClick={() => this.setState(state => ({ ...state, isOpenFolder: !state.isOpenFolder }))}>
               <div className={s.folder__icon}>
                  {this.state.isOpenFolder ? <VscFolderOpened/> : <VscFolder/>}
               </div>
               <div className={s.folder__name}>
                  {this.props.name}
               </div>
            </div>
            <div className={s.folder__content}>
               {this.state.isOpenFolder && this.props.children}
            </div>
         </div>
      );
   }
};