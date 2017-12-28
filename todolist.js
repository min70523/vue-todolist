new Vue({
    el:"#app",
    data:{
        all:[],
        con:'',
        Status:"all",
    },
    methods:{
        add(){
            if(!this.con){
                alert("请输入内容...")
                return;
            }
            var obj={};
            obj.title=this.con;
            obj.id=Math.random()+new Date().getTime();
            obj.state=0;
            obj.edit=true;
            this.all.push(obj);
            localStorage.todos=JSON.stringify(this.all);
            this.con='';
        },
        checkState(obj){
            if(obj.state==0){
                obj.state=1;
            }else{
                obj.state=0;
            }
        },
        checkStatus(val){
            this.Status=val;
        },
        del(id){
            this.all=this.all.filter((ele)=>{
                if(id!=ele.id){
                    return ele
                }
            })
        },
        edit(obj){
            obj.edit=false;
        },
        blur(obj){
            obj.edit=true;
        }
    },
    computed:{
        datas(){
            return this.all.filter((ele)=>{
                if(this.Status=='all'){
                    return ele;
                }else if(this.Status==ele.state){
                    return ele;
                }
            })
        }
    },
    mounted(){
        console.log(this.all)
           this.$refs["abc"].focus();
           this.all=JSON.parse(localStorage.todos)||[];
    },
    watch:{
        'all':{
            handler:function(){
                localStorage.todos=JSON.stringify(this.all);
            },deep:true
        }
    },
});