import React, {Component} from 'react';


export class CalCalculator extends Component{

    constructor(props) {
        super(props);

        this.state = {

            age:'',
            height:'',
            weight:'',
            bmr:'',
            showRes:false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.calculateKcal();
    }

    calculateKcal(){
        let age = this.state.age;
        let weight = this.state.weight;
        let height = this.state.height;

        let BMR = (10*weight) + (6.25*height) - (5*age);
        this.setState({
            bmr: BMR,
            showRes: true
        })
        console.log(BMR);

    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <div className="container row">
                <div className="card col-6">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <h4 className="text-upper text-center">Калкулатор на дневни потребни калории за базален метаболизам</h4>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-3 text-left">Возраст</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="amount" className="col-sm-3 text-left">Тежина во kg</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name="weight" value={this.state.weight} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="amount" className="col-sm-3 text-left">Висина во cm</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name="height" value={this.state.height} onChange={this.onChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-3">
                                <button
                                    type="submit"
                                    className="btn btn-info">
                                    Пресметај
                                </button>
                            </div>
                        </div>
                        <div className="form-group-row" hidden={!this.state.showRes}>
                            <h5>Вашиот организам дневно троши <span className="font-italic">{this.state.bmr}</span>калории</h5>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }

}

export default CalCalculator;