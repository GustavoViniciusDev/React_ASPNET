import React, { Component } from 'react';

export class LoginPage extends Component {
  static displayName = LoginPage.name;

  constructor(props){
    super(props)
    this.state =
    {
      nickName :"",
      password : ""
    }
  }

  render () {
    return (
      <div className="container d-flex justify-content-center">
      <div className="card mt-5 w-50">
          <div className="card-body">
              <form>
                  <div className="form-group">
                      <label htmlFor="nickName">Usuário</label>
                      <input 
                          type="text" 
                          className="form-control"
                          values={this.state.nickName}
                          id="nickName" 
                          placeholder="Usuário" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Senha</label>
                      <input 
                          type="password" 
                          className="form-control" 
                          values={this.state.password}
                          id="password" 
                          placeholder="Senha"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Entrar</button>
              </form>
          </div>
      </div>
  </div>
    );
  }
}
