import React, { Component } from 'react';
import 'whatwg-fetch'

class App extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }

    handleUsernameChange(event){
        event.preventDefault();
        this.setState({
            username:event.target.value
        })
    }

    handlePasswordChange(event){
        event.preventDefault();
        this.setState({
            password:event.target.value
        })
    }

    /*handleLogin(){
        console.log("登录成功");
        alert("登录成功")
    }*/

    handleReg(){
        console.log("注册成功");
        alert("注册成功")
    }

/*
  login(e){
      e.preventDefault()
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
*/
    render(){
        return(
            <div className="wrapper">
            <div className="login-input">
                <div className="login-field">
                    <span className="login-username">用户名：</span>
                    <div className="login-username-input">
                        <input
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className="login-field">
                    <span className="login-username">密码：</span>
                    <div className="login-username-input">
                        <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange.bind(this)}/>
                    </div>
                </div>
                <div className="login-button">
                    <button
                        onClick={this.login.bind(this)}>登录</button>
                    <button onClick={this.handleReg.bind(this)}>注册</button>
                </div>
            </div>
            </div>
        )
    }
}

export default App