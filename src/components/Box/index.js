import React, { useState } from 'react'

function Box(props) {
	
	const [text, setText] = useState('');
	
	function toggleText(){
		if(text === ''){
			setText(props.currentState);
			handleToggle();
			props.changeTurn(props.row, props.col);
		}
		
	}
	
	const [isActive, setActive] = useState(false);
	
	const handleToggle = () => {
		isActive ? setActive(false) : setActive(true);
	};
	
	return <button onClick={toggleText} className={isActive ? "box active" : "box"} id={text} ></button>;
}

export default Box;