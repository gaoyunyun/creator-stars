const {ccclass,property}=cc._decorator 

@ccclass
export class UserModel extends cc.Component{
   
}

 // 玩家的背包
 export let PlayerItemPackage=[
     {
        id:1,//背包索引编号-唯一ID
        itemId:1, //对应的道具id
        type:0, //道具分类('0-道具','1-武器','2-服装','3-首饰')
        equip:0, //是否被装备（背包用）
        count:1, //道具的数量
        getTime:10  //获取的时间
     }
 ]