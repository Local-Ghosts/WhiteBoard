import React from 'react';
import Board from '../board/Board'
import SetLineWidth from './SetLineWidth'
import './style.css'
class Container extends React.Component
{
    constructor(props){
    super(props)
    }

    render(){
        return(
            <div className="container">
                <div className="adjustments">
                    <div className="color-picker-container">
                        <input type='color'/>
                    </div>
                    <SetLineWidth/>
                </div>
                    <div className="board-container">
                        <Board></Board>
                    </div>

            </div>
        )
    }
}

export default Container