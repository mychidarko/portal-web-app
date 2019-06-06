import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

import "./styles/layout.css";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';

import Index from './screens/Index';
import Home from './screens/Home';
import Start from './screens/Start';
// import Profile from './screens/Profile';
import Deposit from './screens/Deposit/Deposit';
import Interwallet from './screens/InterWallet';
import Send from './screens/Send';
import LinkMobile from './screens/LinkMobile';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            hasAuth: false,
            email: "",
            password: "",
            username: "",
            password2: "",
            amount: "",
            error: "",
            emailError: "",
            passwordError: "",
            usernameError: "",
            success: "",
            mobile: "",
            loading: false,
            transferFrom: "",
            transferTo: "",
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.onchangeText = this.onchangeText.bind(this);
        this.register = this.register.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.integrateMobile = this.integrateMobile.bind(this);
        this.interWallet = this.interWallet.bind(this);
        this.sendCash = this.sendCash.bind(this);
    }

    componentDidMount() {
        let token = localStorage.getItem('portal-app-token');

        return token && token.length > 30 ? this.setState({ hasAuth: true }) : '';
    }

    login(e) {
        e.preventDefault();
        this.setState({ loading: true });
        let data = JSON.stringify({ name: "login", param: { email: this.state.email, pass: this.state.password } });

        if (this.state.email === "" && this.state.password === "") {
            this.setState({ error: "All fields are required" });
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ error: "" })
            }, 3000);

        } else if (this.state.email === "") {
            this.setState({ emailError: "Email is required" });
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ emailError: "" })
            }, 3000);

        } else if (this.state.password === "") {
            this.setState({ passwordError: "Password is required" });
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ passwordError: "" })
            }, 3000);

        } else {
            axios({
                method: 'post',
                // url: "http://localhost/portalonlineapi/api/v1/index.php",
                url: "https://portalonlineapi.000webhostapp.com/api/v1/",
                config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
                data
            })
                .then((response) => {

                    if (response.data.status === 108) {
                        this.setState({ passwordError: "Your password is incorrect" });
                        this.setState({ loading: false });

                        setTimeout(() => {
                            this.setState({ passwordError: "" })
                        }, 3000);
                    }else if (response.data.status === 404) {
                        this.setState({ error: "This user doesn't exist" });
                        this.setState({ loading: false });

                        setTimeout(() => {
                            this.setState({ error: "" })
                        }, 3000);
                    }else if (response.data.status === 200) {
                        let token = response.data.result.token;

                        const id = response.data.result.user.id;
                        const username = response.data.result.user.username;
                        const email = response.data.result.user.email;
                        const mobile_number = response.data.result.user.mobile_number;
                        const balance = response.data.result.user.balance;
                        const mobile_balance = response.data.result.user.mobile_balance;
                        const crypto_balance = response.data.result.user.crypto_balance;

                        localStorage.setItem('portal-app-token', token);

                        localStorage.setItem('portal-app-userId', id);
                        localStorage.setItem('portal-app-userName', username);
                        localStorage.setItem('portal-app-userEmail', email);
                        localStorage.setItem('portal-app-userMobileNumber', mobile_number);
                        localStorage.setItem('portal-app-userBalance', balance);
                        localStorage.setItem('portal-app-userMobileBalance', mobile_balance);
                        localStorage.setItem('portal-app-userCryptoBalance', crypto_balance);

                        this.setState({ hasAuth: true });
                        this.setState({ loading: false });
                    }
                })
                .catch((err) => {
                    this.setState({ error:  err });
                    setTimeout(() => {
                        this.setState({ error: "" })
                    }, 3000);
                });
        }
    }

    register(e) {
        e.preventDefault();
        let data = JSON.stringify({ name: "register", param: { name: this.state.username, email: this.state.email, pass: this.state.password } });
        this.setState({ loading: true });

        if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
            this.setState({ error: "All fields are required" });
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ error: "" })
            }, 3000);
        } else if (this.state.password !== this.state.password2) {
            this.setState({ passwordError: "the passwords don't match !!" });
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ passwordError: "" })
            }, 3000);
        } else {
            axios({
                method: 'post',
                // url: "http://localhost/portalonlineapi/api/v1/",
                url: "https://portalonlineapi.000webhostapp.com/api/v1/",
                config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
                data
            })
                .then((response) => {
                    if (response.data.status === 200) {
                        let token = response.data.result.token;

                        const id = response.data.result.user.id;
                        const username = response.data.result.user.username;
                        const email = response.data.result.user.email;
                        const mobile_number = response.data.result.user.mobile_number;
                        const balance = response.data.result.user.balance;
                        const mobile_balance = response.data.result.user.mobile_balance;
                        const crypto_balance = response.data.result.user.crypto_balance;

                        localStorage.setItem('portal-app-token', token);

                        localStorage.setItem('portal-app-userId', id);
                        localStorage.setItem('portal-app-userName', username);
                        localStorage.setItem('portal-app-userEmail', email);
                        localStorage.setItem('portal-app-userMobileNumber', mobile_number);
                        localStorage.setItem('portal-app-userBalance', balance);
                        localStorage.setItem('portal-app-userMobileBalance', mobile_balance);
                        localStorage.setItem('portal-app-userCryptoBalance', crypto_balance);

                        this.setState({ loading: false });
                        this.setState({ hasAuth: true });
                    } else {
                        this.setState({ error: "An error occured" });
                    }
                })
                .catch((error) => {
                    this.setState({ error })
                });
        }
    }

    getUserInfo(e) {
        e.preventDefault();
        let data = JSON.stringify({ "name": "getuserinfo", "param": { "email": this.state.email, "wallet_to": "crypto", "to_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9", "wallet_from": "mobile_money", "from_id": "0560265879", "amount": this.state.amount } });

        axios({
            method: 'post',
            // url: "http://localhost/portalonlineapi/api/v1/",
            url: "https://portalonlineapi.000webhostapp.com/api/v1/",
            config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
            data
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                this.setState({ error: "Invalid credentials" });
            });
    }

    integrateMobile(e) {
        e.preventDefault();
        console.log(localStorage.getItem("portal-app-token"))
        let data = JSON.stringify({ "name": "integratemobile", "param": { "email": localStorage.getItem("portal-app-userEmail"), "mobile_number": this.state.mobile } });

        axios({
            method: 'post',
            // url: "http://localhost/portalonlineapi/api/v1/",
            url: "https://portalonlineapi.000webhostapp.com/api/v1/",
            config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
            data
        })
            .then((response) => {
                console.log(response.data.result);
                const mobile_number = response.data.result.mobile_number;
                const mobile_balance = response.data.result.mobile_balance;

                localStorage.setItem("portal-app-userMobileNumber", mobile_number);
                localStorage.setItem("portal-app-userMobileBalance", mobile_balance);

                this.setState({
                    success: response.data.result.message
                });

                return <Redirect to="/home" />;
            })
            .catch((error) => {
                this.setState({ error });
                console.log(error);
            });
    }

    sendCash(e) {
        e.preventDefault();
        let data = JSON.stringify({ "name": "send", "param": { "email_from": this.state.email, "wallet_to": "crypto", "email_to": "seth@gmail.com", "wallet_from": "mobile_money", "amount": this.state.amount } });

        axios({
            method: 'post',
            // url: "http://localhost/portalonlineapi/api/v1/",
            url: "https://portalonlineapi.000webhostapp.com/api/v1/",
            config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
            data
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch(() => {
                this.setState({ error: "Invalid credentials" });
            });
    }

    interWallet(e) {
        e.preventDefault();
        let data = JSON.stringify({ "name": "interwallet", "param": { "email": localStorage.getItem("portal-app-userEmail"), "wallet_to": this.state.transferTo, "to_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9", "wallet_from": this.state.transferFrom, "from_id": localStorage.getItem("portal-app-userMobileNumber"), "amount": this.state.amount } });

        if(this.state.amount === "") {
            this.setState({ error: "Please enter amount" });
            setTimeout(() => {
                this.setState({ error: "" });
            }, 3000);
        } else if(this.state.transferFrom === "transfer_from" || this.state.transferFrom === "") {
            this.setState({ error: "Select a wallet to transfer funds from" });
            setTimeout(() => {
                this.setState({ error: "" });
            }, 3000);
        } else if (this.state.transferTo === "transfer_to" || this.state.transferTo === "") {
            this.setState({ error: "Select a wallet to transfer funds to" });
            setTimeout(() => {
                this.setState({ error: "" });
            }, 3000);
        } else if (this.state.password === "") {
            this.setState({ error: "Please enter your password" });
            setTimeout(() => {
                this.setState({ error: "" });
            }, 3000);
        } else {
            this.setState({ loading: true });

            axios({
                method: 'post',
                // url: "http://localhost/portalonlineapi/api/v1/",
                url: "https://portalonlineapi.000webhostapp.com/api/v1/",
                config: { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } },
                data
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 103) {
                    this.setState({ error: response.data.message });
                    setTimeout(() => {
                        this.setState({ error: "" });
                    }, 3000);
                    this.setState({ loading: false });
                } else if(response.data.status === 200) {
                    this.setState({ 
                        success: response.data.result.message,
                        loading: false
                    });
                }
            })
            .catch(() => {
                this.setState({ error: "Invalid credentials" });
            });
        }
    }

    logout() {
        localStorage.removeItem('portal-app-token');

        localStorage.removeItem('portal-app-userId');
        localStorage.removeItem('portal-app-userName');
        localStorage.removeItem('portal-app-userEmail');
        localStorage.removeItem('portal-app-userMobileNumber');
        localStorage.removeItem('portal-app-userBalance');
        localStorage.removeItem('portal-app-userMobileBalance');
        localStorage.removeItem('portal-app-userCryptoBalance');

        this.setState({
            hasAuth: false,
            email: "",
            password: "",
            username: "",
            password2: "",
            error: "",
            mobile: "",
            loading: false,
            success: ""
        });
    }

    onchangeText(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { hasAuth, username, email, password, error, password2, loading, emailError, passwordError, usernameError, success, mobile, amount, transferFrom, transferTo} = this.state;
        

        return (
            <React.Fragment>
                {hasAuth ? <div className="hidden-md"><Header brandText="Portal" hasAuth={hasAuth} logout={this.logout} /></div> : null}
                {hasAuth ? <Sidebar hasAuth={hasAuth} /> : null}
                <RightSideBar />
                {hasAuth ? (
                    <div className="main-panel">
                        <RouterView
                            hasAuth={hasAuth}
                            linkMobile={this.integrateMobile}
                            success={success}
                            onchangeText={this.onchangeText}
                            mobile={mobile}
                            interwallet={this.interWallet} 
                            amount={amount} 
                            transferFrom={transferFrom} 
                            transferTo={transferTo} 
                            password={password} 
                            loading={loading} 
                            error={error} />
                    </div>

                ) : (

                        <RouterView
                            login={this.login}
                            register={this.register}
                            username={username}
                            email={email}
                            password={password}
                            error={error}
                            password2={password2}
                            onchangeText={this.onchangeText}
                            loading={loading}
                            hasAuth={hasAuth}
                            emailError={emailError}
                            passwordError={passwordError}
                            usernameError={usernameError}
                             />
                    )
                }
            </React.Fragment>
        );
    }
}


function RouterView(props) {
    const { hasAuth, username, email, password, password2, error, login, register, onchangeText, loading, linkMobile, emailError, passwordError, usernameError, mobile, success, amount, transferFrom, transferTo, interwallet } = props;

    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/start" render={() => {
                return <Start hasAuth={hasAuth} />
            }} />
            <Route path="/home" render={() => {
                return <Home hasAuth={hasAuth} />
            }} />
            <Route path="/settings/link-mobile" render={() => {
                return <LinkMobile mobile={mobile} onchangeText={onchangeText} success={success} linkMobile={linkMobile}  />
            }} />
            <Route path="/deposit" render={() => {
                return <Deposit hasAuth={hasAuth} />
            }} />
            <Route path="/interwallet" render={() => {
                return <Interwallet interwallet={interwallet} amount={amount} onchangeText={onchangeText} transferFrom={transferFrom} transferTo={transferTo} password={password} loading={loading} success={success} error={error} />
            }} />
            <Route path="/send" render={() => {
                return <Send hasAuth={hasAuth} />
            }} />
            <Route path="/auth/login" render={() => {
                return <Login hasAuth={hasAuth} login={login} error={error} onchangeText={onchangeText} email={email} password={password} loading={loading} emailError={emailError} passwordError={passwordError} />
            }} />
            <Route path="/auth/register" render={() => {
                return <Register hasAuth={hasAuth} register={register} error={error} onchangeText={onchangeText} username={username} email={email} password={password} password2={password2} loading={loading} emailError={emailError} passwordError={passwordError} usernameError={usernameError} />
            }} />
        </Switch>
    );
}

