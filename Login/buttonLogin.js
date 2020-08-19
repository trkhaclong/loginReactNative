import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Typography, Popover } from '@material-ui/core/';

export default class Login extends Component {
    constructor (props){
        super (props);

        this.state = {open: false, test: true, err: null, pop: null, login: 'login'}
    }
    toggle = () => {
        if(this.state.open === true)
            this.setState({open: false})
        else
            this.setState({open: true})
    }

    Test = () => {
        if(this.state.test === true){
            this.setState({open: false})
            this.setState({err: null})
            this.setState({login: 'Dang nhap thanh cong'})
        }else{
            this.setState({err: 'Khong chinh xasc'})
            this.setState({pop: event.currentTarget})
        }
    }

    handleClose = () => {
        this.setState({pop: null})
        this.setState({err: null})
    }

    dung = () => {
        if(this.state.login === 'Dang nhap thanh cong'){
            this.setState({login: 'login'})
        }
        this.setState({test: true})
    }
    sai = () => {
        if(this.state.login === 'Dang nhap thanh cong'){
            this.setState({login: 'login'})
        }
        this.setState({test: false})
    }
    
    render(){
        const popup = Boolean(this.state.pop);
        const id = popup ? 'z' : undefined
        return(
            <View style={styles.root}>
                <View style={styles.one}>
                    <button style={{fontFamily:'monospace' ,display: 'flex', width: '33%', height: '33%', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', position: 'absolute',bottom: '20%', left: '33%'}} onClick={this.toggle}>{this.state.login}</button>
                </View>
                <View style={{display: 'block', height: '50%'}}>
                    <View style={styles.test}>
                        <button style={{fontFamily:'monospace' ,display: 'flex', width: '50%', height: '25%', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', position: 'absolute',top: '20%', right: '33%'}} onClick={this.dung}>true</button>
                    </View>
                    <View style={styles.test}>
                        <button style={{fontFamily:'monospace' ,display: 'flex', width: '50%', height: '25%', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', position: 'absolute',top: '20%', left: '33%'}} onClick={this.sai}>false</button>
                    </View>
                </View>
                <Modal
                    
                    open={this.state.open} 
                    onClose={this.toggle}
                    style={{width: '100%'}}>
                        <View style={{textAlign: 'center', marginTop: '11%'}}>
                        
                            <h2 style={{fontSize: '3em', fontWeight: '300', color: '#170996',display: 'inline-block', paddingBottom: '5px', textShadow: '1px 1px 3px'}}>Login</h2>
                            <form>
                                <View style={{borderBottom: '1px solid transparent', borderTop: '1px solid transparent',position: 'relative', display: 'table',borderCollapse: 'separate', width: '100%'}}>
                                    <input style={{display: 'block', height: 'auto', border: 'none', outline: 'none', boxShadow: 'none', borderRadius: '0px', padding: '10px', fontSize: '1.6em', width: '100%', background: '#d589a9', color: '#c2b8b1', lineHeight: '1.33', position: 'relative', zIndex: '2', float: 'left', marginBottom: '0',marginLeft: '2px'}} type="text" placeholder="username" />
                                </View>
                                <View style={{borderBottom: '1px solid transparent', borderTop: '1px solid transparent',position: 'relative', display: 'table',borderCollapse: 'separate', width: '100%'}}>
                                    <input style={{display: 'block', height: 'auto', border: 'none', outline: 'none', boxShadow: 'none', borderRadius: '0px', padding: '10px', fontSize: '1.6em', width: '100%', background: '#d589a9', color: '#c2b8b1', lineHeight: '1.33', position: 'relative', zIndex: '2', float: 'left', marginBottom: '0',marginLeft: '2px'}} type="password" placeholder="password" />
                                </View>
                                <button style={{marginTop: '20px', background: '#27AE60', border: 'none', fontSize: '1.6em', fontWeight: '300', padding: '5px 0', width: '100%', borderRadius: '3px', color: '#b3eecc', borderBottom: '4px solid #1e8449', display: 'inline-block', transform: 'translateZ(0)', boxShadow: '0 0 1px transparent'}} type="submit" onClick={this.Test}>login</button>
                            </form>
                        </View>
                </Modal>
                <Popover
                    id = {id}
                    open = {popup}
                    onClose = {this.handleClose}
                    anchorEl= {this.state.pop}
                    anchorOrigin = {{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                >
                    <Typography style={{textAlign: 'center', justifyContent: 'center'}}>
                        {this.state.err}
                    </Typography>
                </Popover>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    root: {
        height: '100%',
        display: 'block',
        fontFamily: ''
    },
    block: {
        display: 'block',
        textAlign: 'center',
        margin: '0',
    },
    one: {
        height: '50%',
        display: 'block',
        

    },
    test: {
        position: 'relative',
        width: '50%',
        height: '100%',
        float: 'left',
    },
    true: {
        display: 'block'
    }
});
  