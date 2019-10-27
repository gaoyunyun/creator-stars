import ListItem from "../../Utils/components/list/ListItem";
import List from "../../Utils/components/list/List";

const {ccclass,property}=cc._decorator

@ccclass
export  class contactsServer extends cc.Component{

     private data=[];

     onLoad(){

     }
    //初始化联系人
    getContacts(listContacts:List){
        this.data=[];
        for (let n: number = 0; n < 3; n++) {
            this.data.push(n);
        }
        listContacts.numItems = this.data.length;
    }

    //设置渲染器（ RenderEvent ），在View中写一个函数，将该函数指向RenderEvent，运行时，设置List数量，Item将会通过该函数进行回调，开发者在该函数中实现Item的刷新。
    onListRenderEvent(item:cc.Node,idx:number){
         item.getChildByName("name").getComponent(cc.Label).string = this.data[idx];
    }



}