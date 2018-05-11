
const tab = {
    namespaced: true,
    state: {
        openTabList:[{
            name:'home',
            title:'首页'
        }],
        currentTab:{
            name:'home',
            title:'首页'
        }
    },
    mutations: {
        ['addTabList'](state,{name,title}){
            if(state.openTabList.filter((item)=> {return item.name===name;}).length==0){
                state.openTabList.push({
                    name:name,
                    title:title
                })
                localStorage.setItem('openTabList',JSON.stringify(state.openTabList));
            }
        },
        ['removeOneTab'](state,{index}){
            let obj = state.openTabList.splice(index,1)[0];
            if(obj.name===state.currentTab.name){
                state.currentTab={
                    name:'home',
                    title:'首页'
                }
            }
            localStorage.setItem('openTabList',JSON.stringify(state.openTabList));
        },
        ['removeAllTab'](state){
            state.openTabList.splice(1);
            state.currentTab={
                name:'home',
                title:'首页'
            }
            localStorage.setItem('openTabList',JSON.stringify(state.openTabList));
        },
        ['removeOtherTab'](state){
            state.openTabList.splice(1)
            if(state.currentTab.name!=='home'){
                state.openTabList.push(state.currentTab);
            }
            localStorage.setItem('openTabList',JSON.stringify(state.openTabList));
        },
        ['moveToTab'](state,{name}){
            let index=null;
            for (let i=0;i<state.openTabList.length;i++){
                if (state.openTabList[i].name===name){
                    index=i;
                    break;
                }
            }
            if (index!=null){
                let oTag = document.getElementById('tag'),
                    tagList= oTag.querySelectorAll('.taglist .el-tag'),
                    showLength =oTag.querySelector(".tag-show").offsetWidth;
                let indexLeft =tagList[index].offsetLeft;
                let indexLength=tagList[index].scrollWidth;
                if(indexLeft+indexLength<showLength-10){
                    oTag.querySelector(".taglist").style.left=0+'px';
                }else{
                    oTag.querySelector(".taglist").style.left=showLength-16-(indexLeft+indexLength)+'px';
                }
            }
        },
        ['setCurrentTab'](state,{name,title}){
            state.currentTab={
                name:name,
                title:title
            }
        },
        ['setOpenTabList'](state){
            if(localStorage['openTabList']){
                state.openTabList=JSON.parse(localStorage['openTabList']);
            }
        }
    },
    actions: {
        ['handleMenuEvent'] (context,{name,title}) {
            context.commit('addTabList',{name:name,title:title});
            setTimeout(() => {
                context.commit('moveToTab',{name:name});
                context.commit('setCurrentTab',{name:name,title:title});
            }, 0)
        }

    }
};
export default tab;
