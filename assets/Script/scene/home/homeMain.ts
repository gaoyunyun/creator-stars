import {contactsServer} from "../contacts/contactsServer";
import List from "../../Utils/components/list/List";
import ListItem from "../../Utils/components/list/ListItem";
import {contactsItem} from "../contacts/contactsItem";


const {ccclass,property}=cc._decorator

@ccclass
export class homeMain extends cc.Component {

    @property(cc.Node)
    pack: cc.Node = null;

    @property(cc.Node)
    discover: cc.Node = null;
    //聊天内容
    @property(cc.Node)
    chatList: cc.Node = null;
    //聊天列表
    @property(cc.Node)
    contacts:cc.Node=null;

    @property(cc.Button)
    homeBtn: cc.Button = null;

    //联系人列表
    @property(List)
    listContacts:List=null;

    contactsServer = new contactsServer();
    private contactsItem =new contactsItem();

    private data=[];

    onClickHomePack() {

    }

    onLoad(){
        //初始化联系人
        this.data=[];
        for (let n: number = 0; n < 3; n++) {
            this.data.push(n);
        }
        this.listContacts.numItems = this.data.length;
    }
    onClickHomeContacts() {

    }
    //设置渲染器（ RenderEvent ），在View中写一个函数，将该函数指向RenderEvent，运行时，设置List数量，Item将会通过该函数进行回调，开发者在该函数中实现Item的刷新。
    onListRenderEvent(item:cc.Node,idx:number){
    item.getChildByName("name").getComponent(cc.Label).string = this.data[idx];
    //动态数据 绑定到组件
    item.getComponent("contactsItem").init(this);
    }
    onClickHomeDiscvoer() {

    }

    onClickHomeMeInfo() {

    }

    chatListReturnToContacts(){
        this.chatList.active=false;
        this.contacts.active=true;
    }
    contactsReturnTochatList(){
        this.contacts.active=false;
        this.chatList.active=true;
    }


}

