import {contactsServer} from "./contactsServer";
import {homeMain} from "../home/homeMain";

const {ccclass,property}=cc._decorator

@ccclass
export  class contactsItem extends cc.Component{

    @property(cc.Button)
    button:cc.Button=null;

    homeMain: homeMain=null;

    init(homeMain:homeMain){
        this.homeMain=homeMain;
    }

    onClickThis(){
       this.button.node.on('click',this.load,this);
    }
    load(){
        this.homeMain.contactsReturnTochatList();
    }

}