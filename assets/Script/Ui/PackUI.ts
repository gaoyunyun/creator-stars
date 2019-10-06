const {ccclass, property} = cc._decorator;

@ccclass
export default class PackUI extends cc.Component {

    @property(cc.Prefab)
    prefabItemCell:cc.Prefab=null;

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let i=0;
        while(i<210){
            this.scrollView.content.addChild(this.generateItem());
            i++;
        }
    }

    generateItem(){
        return cc.instantiate(this.prefabItemCell);
    }

    show(){
        this.node.active=true;
        this.node.position = cc.v2(0, 0)
    }

    hide(){
        this.node.active=false;
    }

    start () {

    }

    // update (dt) {}
}
