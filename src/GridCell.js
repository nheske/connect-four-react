import React, { Component } from 'react'

class GridCell extends Component {

    render() {
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;
        let classes = 'cell';
        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        }
        console.log("classes =" + classes)
        return (
            <div className={classes} onClick={() => this.props.onClick(this.props.x)}>
                <p>{this.props.x}, {this.props.y} </p>
            </div>
        )
    }
}

export default GridCell;