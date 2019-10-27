import {contactsServer} from "./contactsServer";

const {ccclass,property}=cc._decorator

@ccclass
export  class contacts extends cc.Component{

    @property(cc.Button)
    button:cc.Button=null;

    contactsServer=new contactsServer();


    onClickThis(){
        cc.director.loadScene("contacts",);
    }

}