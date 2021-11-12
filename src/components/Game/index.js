import React, { useState } from 'react'
import Box from '../Box'
import './style.css'

const WIN_LIMIT = 4;
const fmap = new Array(6).fill('').map(() => new Array(7).fill(''));

function Game() {

	const [turn, setTurn] = useState('redPlayer');
	
	function changeTurn(row, col){
				
		fmap[row][col] = turn;
		
		setTurn(turn => turn === 'redPlayer' ? 'yellowPlayer' : 'redPlayer');
		
		const winner = checkWinner();		
		if(winner === "redPlayer") alert("Red Won!");
		if(winner === "yellowPlayer") alert("Yellow Won!");
	}
	
	function checkWinner(){
		//check row
		for(let i = 0; i < fmap.length+1; i++){
			const r = fmap[i];
			//console.log(r);
			for(let x=0; x < WIN_LIMIT; x++){
				if(i<fmap.length){
					if(r[x] !== "" && r[x] === r[x+1] && r[x] === r[x+2] && r[x] === r[x+3])
					{
						return r[x];
					}
				}
			}
			
			//check col		
			for(let y=0; y < 7-WIN_LIMIT; y++){
				if(fmap[y][i] !== "" && fmap[y][i] === fmap[y+1][i] && fmap[y][i] === fmap[y+2][i] && fmap[y][i] === fmap[y+3][i]){
					return fmap[y][i];
				}
			}
			
			//check slanting (right to left)
			
			if(i>=0 && i <= 2)
			{
				for(let y=i; (y+3)<=6; y++){
					for(let x=0;(x+3)<=6;x++){
						if(fmap[y][x] !== "" && fmap[y][x] === fmap[y+1][x+1] && fmap[y+1][x+1] === fmap[y+2][x+2] && fmap[y+2][x+2] === fmap[y+3][x+3]){
							return fmap[y][x];
						}
					}
				}
			}
			
			//check slanting (left to right)			
			if(i>2 && i<6)
			{
				for(let y=i; (y-3)>=0; y--){
					for(let x=0;(x+3)<=6;x++){
						if(fmap[y][x] !== "" && fmap[y][x] === fmap[y-1][x+1] && fmap[y-1][x+1] === fmap[y-2][x+2] && fmap[y-2][x+2] === fmap[y-3][x+3]){
							return fmap[y][x];
						}
					}
				}
			}
			
		}		
		
		return null;
	}
	
return <div id="game">
		<div className="row">			
			<Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={0} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
		<div className="row">
			<Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={1} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
		<div className="row">
			<Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={2} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
		<div className="row">
			<Box row={3} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={3} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
		<div className="row">
			<Box row={4} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={4} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
		<div className="row">
			<Box row={5} col={0} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={1} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={2} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={3} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={4} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={5} currentState={turn} changeTurn={changeTurn} />
			<Box row={5} col={6} currentState={turn} changeTurn={changeTurn} />
		</div>
	</div>;
}

export default Game;