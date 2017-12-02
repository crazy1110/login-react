/**
 * Created by 小埋 on 2017/12/2.
 */
export default function onClicklogin(e){
    e.preventDefault();
    const{username,password} = this.state;
    fetch('http://vote.helloyz.cn/user/login',{
        method:'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({
            identifier:username,
            password:password,
            client:'1'
        })
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log(json);
    })
}