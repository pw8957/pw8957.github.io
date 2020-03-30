import React from 'react';
import { Button } from 'react-bootstrap'

function Button({size,variant,children}) {
	return (
		<Button 
			variant={variant} 
			size={size}
		>{children}</Button>
	)
}

export default Button;