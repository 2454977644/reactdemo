import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './ui.css'

class Confirm extends Component {

    render() {
        const {click} = this.props

        return (
            <div className="dialog">
                    <div className="dialog__mask"></div>
                    <div className="dialog__content">
                       <div>{this.props.content}</div>
                       <div><button onClick={(e) => click(1)} >确定</button><button onClick={(e) => click(null)} >取消</button></div>
                    </div>
            </div>
        )
    }
}
let confirm_dialog_node = null
function confirm(info) {
    confirm_dialog_node = document.createElement('div')
    document.body.appendChild(confirm_dialog_node);
    return new Promise((resolve, reject) => {
        var cmd = function(v) {
            resolve(v);
            hide();
        }
        ReactDOM.render(<Confirm content={info} click={cmd} />, confirm_dialog_node)

    });
}

function hide() {
    if (confirm_dialog_node) {
        ReactDOM.unmountComponentAtNode(confirm_dialog_node)
        document.body.removeChild(confirm_dialog_node)
    }
}

export default confirm

// async componentDidMount(){
//     let res = await confirm("确定删除吗")
//     if(res) {
//         console.log("是")
//     } else {
//         console.log("否")
//     }
// }
