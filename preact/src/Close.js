let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var closeClassName = 'close';

// Close component.
function Close (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.children !== 'undefined' && outProps.children.length != 0) throw "Error: A 'Close' component must not have any children.";
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'span';
	if (typeof outProps.className === 'undefined')
		outProps.className =  closeClassName;
	else
		outProps.className += ' ' + closeClassName;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return h(
		elementType, outProps, outProps.children
	);
}
