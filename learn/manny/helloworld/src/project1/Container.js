import React, {Component} from 'react';

class Container extends Component {
	render() {
		return (	
                    <div className="container">
                            <div className="row">
                                    <div className="col-md-3"><h3>Col 1</h3></div>
                                    <div className="col-md-6"><h3>Col 2</h3></div>
                                    <div className="col-md-3"><h3>Col 3</h3></div>
                            </div>
                    </div>
		);	
	}
}

export default Container