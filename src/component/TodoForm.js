import React, {Component} from "react";
class TodoForm extends Component{
    constructor(){
        super();
        this.state={
           title:'',
            responsible:'',
            description:'',
            priority:'low'
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value,name}=e.target;
       this.setState({
           [name]:value
       })

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('Sending.... Data');
    }

    render() {
        return(
            <div className="card">
                <form className="card-body"  onSubmit={this.handleSubmit}>
                    <div className="from-group">
                        <input
                         type="text"
                         name="title"
                         className="from-control"
                         placeholder="title"
                         onChange={this.handleInput}
                        />
                    </div>
                    <div className="from-group">
                        <input
                        type="text"
                        name="responsible"
                        className="from-control"
                        placeholder="responsible"
                        onChange={this.handleInput}
                        />
                    </div>
                    <div className="from-group">
                        <input
                            type="text"
                            name="description"
                            className="from-control"
                            placeholder="description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="from-group">
                        <select
                            type="text"
                            name="priority"
                            className="from-control"
                            placeholder="priority"
                            onChange={this.handleInput}
                        >
                            <option>low</option>
                            <option>Medium</option>
                            <option>Very High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>

                </form>

            </div>

        );
    }
}
export  default  TodoForm;