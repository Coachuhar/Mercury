import React, { Component } from 'react';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,ButtonDropdown,
    InputGroup, InputGroupAddon, InputGroupText,
    Input, Button, ButtonGroup, ListGroup, ListGroupItem,
    Modal, ModalHeader, ModalBody, ModalFooter, Dropdown,
    Popover, PopoverHeader, PopoverBody,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, TabContent, TabPane} from 'reactstrap';
import Tab from "./tabs.js";






const svgs = require.context('./Images', true, /\.svg$/);
const keys = svgs.keys();

//const formulas_object = formulas;

//const lens_formula = require.context('formula.json');

const svgsArray = keys.map(key => svgs(key));

const svgsObjArray = svgs.keys().map(key => ({path: key, file: svgs(key)}));

const svgsObj = svgs.keys()
    .reduce((images, key) => {
      images[key] = svgs(key)
      return images
    }, {});

console.log(svgsObjArray.length)


for(let entry of svgsObjArray){
    console.log(entry);

}

let open_close = true;

console.log(svgsObj);

const componentClasses = ['col3'];
const componentClasses_space = ['integration_space'];
const componentClasses_integration = ['finish_square'];
const componentClasses_components = ['stack'];
const componentClasses_spacers = ["spacer_stack"];

const complete_style = {
    padding: "-10px",
    margin: "-10px -10px -10px",
}




//let text_view = document.getElementById("viewL");

const selection_dict = [{"format": " ", "lens_type": " ", "lens_no": "","back_adapter": "", "back": "", "back_type": "", "front_panel": "", "rs_value": 0}];
const svg_selection = [];
//const system_lens = [{""}];
function Square(props){


        return(
           // <button className="square" onClick={() => this.setState({value: <img src={require('./Images/MUP Integrated-Panel.svg')} className="footer-logo"/>})}>
             //   {this.state.value}
            //</button>

            <button id='square' className="square" onClick={props.onClick}>
                <img className="camera_comp" src={props.value} alt=""/>
                </button>
        );

}

function SpacerSquare(props){
    return(
        <button className="spacer_square" onClick={props.onClick}>
            <img className="camera_comp" src={props.value} alt=""/>
        </button>
    )
}

function LargeSquare(props) {
    return(
        <button className="large_square" onClick={props.onClick}>
            <img className="camera_comp" src={props.value} alt=""/>
        </button>
    )
}

function IntegrationSquare(props){
    return(
        <button className="spacer_integration" onClick={props.onClick}>
            <img className="camera_comp" src={props.value} alt=""/>
        </button>
    )
}

function FinishSquare(props){

   // let images = [];

    //for(let i = 0; i<10; i++){

      //  images.push(<img style={complete_style} className="camera_comp" src={props.value[i]} alt=""/>);
    //}
    return(<div className="finish_square" value={props.value} onClick={props.onClick}>

     </div>)
}


class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.handleFormula = this.handleFormula.bind(this);
        this.renderFinishSquare = this.renderFinishSquare.bind(this);



        this.state = {
            squares: Array(50).fill(null),
            names: Array(50).fill(null),
            inputValue: "",
            formula: {},
            dropDownOpen: false,
            dropDownOpen2: false,
            dropDownOpen3: false,
            dropDownOpen4: false,
            dropDownOpen5: false,
        };

    }




    handleClick(i) {


            const squares = this.state.squares.slice();
            squares[i] = svgsObjArray[i].file;
            //console.log('added');
            this.setState({squares: squares});


    }

    handleClick(){
        const squares = this.state.squares.slice();
        for(let i = 0; i<10; i++){
            squares[i] = svgsObjArray[i].file;

        }

        this.setState({squares: squares});
    }

    getSquare(number, objNum){
        const items = this.state.squares;
        items[number] = svgsObjArray[objNum].file;

        this.forceUpdate();


    }



  renderSquare(i){
      return( <Square
        value={this.state.squares[i]}
        onClick={() =>this.handleClick(i)}
      />
    );
  }

  renderSpacerSquare(i){
        return(<SpacerSquare value={this.state.squares[i]}
                      onClick={() =>this.handleClick(i)}
        />)
  }

  renderLargeSquare(i){
      return(<LargeSquare value={this.state.squares[i]}
                           onClick={() =>this.handleClick(i)}
      />);
  }

  renderIntegrationSquare(i){
        return(<IntegrationSquare value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}/>);
  }

  renderFinishSquare(){

      let images = [];

      for(let i = 0; i<10; i++){
          console.log(this.state.squares[i]);
          if(i === 1){
              images.push(this.state.squares[i]);
              images.push(this.state.squares[10]);
          } else if(i=== 2){
              images.push(this.state.squares[i]);
              images.push(this.state.squares[11]);
          }else {
              images.push(this.state.squares[i]);
          }
          console.log(images);

      }


     return(
         <div>
             {images.map((image, i) => {
                 return <img style={complete_style} className="camera_comp" key={i} src={image}/>
             })}
         </div>)

  }



  enterPress(e){
        if(e.key === 'Enter'){


            let search = "LensKitNo";
            let value_o = parseInt(document.getElementById("viewL").value); //Need to cast this to an integer

            selection_dict["lens_no"] = document.getElementById("viewL").value;

            console.log(Object.keys(formula_c.formulas).length);
            for(let i=0; i<Object.keys(formula_c.formulas).length; i++){

                if(formula_c.formulas[i][search] === value_o){
                    console.log(formula_c.formulas[i]);
                    let formula = formula_c.formulas[i];
                    this.setState({formula: formula});
                }
            }

            this.getSquare(1, 29);




            if(this.state.formula["Focus Unit"] === "Standard"){
                this.getSquare(2, 32);
                //xl 40, standard 33, xls 46, uwboard 36
            } else if (this.state.formula["Focus Unit"] === "UW Board"){
                this.getSquare(2, 35);
            } else if (this.state.formula["Focus Unit"] === "XLS"){
                this.getSquare(2, 45);
            } else if(this.state.formula["Focus Unit"] === "XL"){
                this.getSquare(2, 39);
            }

            //deal with front spacers

            if(selection_dict["back"] === "MUP"){
                this.getSquare(3, 22);

            } else if (selection_dict["format"] === "5x7" ||
            (selection_dict["lens_type"] === "RB67" && selection_dict["rs_value"] === "0") ||
                selection_dict["rs_value"] === "20" //maybe its 0 or 20???
            || this.state.formula["Focus Unit"] === "XL"
            || this.state.formula["Focus Unit"] === "XLS"){
                this.getSquare(3, 40)
                //front panel = 10
                //xl front panel = 41
                //MUP = 33
            } else if(selection_dict["lens_type"] === "RB67" && selection_dict["rs_value"] === "30" &&
            selection_dict["format"] === "Small/Medium "){
                //this.getSquare(3, )
                //XLS Integrated panel
            } else if(selection_dict["lens_type"] === "system" ){ //TODO implement system lens system

            } else{
                this.getSquare(3, 11);
            }

        }
  }

    toggle() {
        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }));
    }

    toggle2(){
        this.setState(prevState => ({
            dropDownOpen2: !prevState.dropDownOpen2
        }));
    }

    toggle3() {
        this.setState(prevState => ({
            dropDownOpen3: !prevState.dropDownOpen3
        }));
    }

    toggle4() {
        this.setState(prevState => ({
            dropDownOpen4: !prevState.dropDownOpen4
        }));
    }

    toggle5() {
        this.setState(prevState => ({
            dropDownOpen5: !prevState.dropDownOpen5
        }));
    }



    handleFormula(){

        this.getSquare(1, 29);

        if(this.state.formula["Focus Unit"] === "Standard"){
          this.getSquare(2, 33);
           //xl 40, standard 33, xls 46, uwboard 36
       } else if (this.state.formula["Focus Unit"] === "UW Board"){
            this.getSquare(2, 36);
        } else if (this.state.formula["Focus Unit"] === "XLS"){
            this.getSquare(2, 46);
        } else if(this.state.formula["Focus Unit"] === "XL"){
            this.getSquare(2, 40);
        }

    }

    handleMamiya(){
        this.renderLargeSquare(0);
        this.getSquare(0, 23);
        this.getSquare(1, 21);
        this.getSquare(2, 22);
    }

    handleBackAdapter(){

        console.log("Back adapter");
        console.log(selection_dict["back"]);
        if(selection_dict["back"] === "Graflox 23/RB67") {
            if (selection_dict["lens_type"] === "system" && selection_dict["format"] === "Small/Medium") {
                selection_dict["back_adapter"] = "135 Graflox";
                this.renderSquare(5, 0);
                selection_dict["rs_value"] = 0;
            } else {
                selection_dict["back_adapter"] = "Graflox 23";
                this.getSquare(4, 2);
                selection_dict['rs_value'] = 0;
            }

        }

        //get barrel length
        if(this.state.formula["Barrel Length"] != "none"){
            //gets default barrel length
            this.getSquare(10, 20);

        }

        //get front spacer value
        if(selection_dict["rs_value"] === '0'){
            this.getSquare(11, 46);
        }



        if(selection_dict["back"] = "HV") {
            if (selection_dict["lens_type"] === "system" && selection_dict["format"] === "135") {
                selection_dict["back_adapter"] = "135 Hasselblad V";
                this.renderSquare(5,0);
                selection_dict["rs_value"] = 0;
            } else{
                selection_dict["back_adapter"] = "Hasselblad V";
                this.renderSquare(5, 14);
                selection_dict['rs_value'] = 0;
            }
            //TODO if no back selected then select back
        }

        if(selection_dict["back"] === "Mamiya AFD") {
            if (selection_dict["lens_type"] === "system") {
                selection_dict["back_adapter"] = "135 Mamiya AFD Back Adapter";
                this.renderSquare(5, 0);
                selection_dict["rs_value"] = 0;
                //TODO change this to fit system lens system
            } else {
                selection_dict["back_adapter"] = "Mamiya AFD Back Adapter";
                this.renderSquare(5, 0);
                selection_dict["rs_value"] = 0;
                //TODO what is this back adapter in the thing
            }

        }

        if(selection_dict["back"] === "Hasselblad H back"){
            selection_dict["back_adapter"] === "Jieying Multi-Mount Digital Back Adapter";
            selection_dict["rs_value"] = 0;
            //TODO what to display for this one
        }

        if(selection_dict["back"] === "Contax 645 Digital Back"){
            selection_dict["back_adapter"] === "Contaz 645 Digital";
            selection_dict["rs_value"] = 0;
            //TODO which one to display for this
        }


    }

    handleDivs(){
        if(open_close === false){

            componentClasses_space.splice(-1, 1);
            componentClasses_integration.splice(-1, 1);
            componentClasses_components.splice(-1,1);

            document.getElementById('col3').style.height='0px';
            document.getElementById('col3').style.width = '0px';
            document.getElementById('col_mid').style.right = '12%';
            document.getElementById('col_mid').style.width='100%';

            document.getElementById('space_1').style.width="0px";
            document.getElementById('space_1').style.height="0px";

            document.getElementById('space_2').style.height="0px";
            document.getElementById('space_2').style.width="0px";


            document.getElementById('format').className = "stack";
            document.getElementById('finish').className= "finish_square";
            document.getElementById('finish').style.width= "0px";
            document.getElementById('finish').style.height="0px";







            open_close = true;
        } else if (open_close === true){
            document.getElementById('col3').style.height ='1000px';
            document.getElementById('col3').style.width = '21%';
            document.getElementById('col_mid').style.right = '25%';

            document.getElementById('space_1').style.height = '200px';
            document.getElementById('space_1').style.width = '400px';

            document.getElementById('space_2').style.width = '400px';
            document.getElementById('space_2').style.height = '200px';


            componentClasses.push('show');
            componentClasses_space.push('show');
            componentClasses_integration.push('show');

            document.getElementById('col3').className = componentClasses.join(' ');
            document.getElementById('space_1').className = componentClasses_space.join(' ');
            document.getElementById('space_2').className = componentClasses_space.join(' ');

            document.getElementById('finish').className = componentClasses_integration.join(' ');
            document.getElementById('finish').style.width = '400px';
            document.getElementById('finish').style.height = '600px';

            componentClasses_components.push("show");
            //document.getElementById('format').style.width = '0px';
            //document.getElementById('format').style.height = '0px';



            document.getElementById('format').className = componentClasses_components.join(' ');
           // componentClasses_components.splice(-1,1);









            //for(let i =0; i<10; i++){

            //}

            //let elements = document.getElementsByClassName('square');
            //let elements_spacer = document.getElementsByClassName('spacer_integration');
            //console.log(elements.length);

            //for(let i = 0; i<elements.length; i++){
              //  console.log(elements.item(i));
                //elements.item(i).style.height = "90px";
            //}

            //for(let i=0; i<elements_spacer.length; i++){
              //  elements_spacer.item(i).style.height = "130px";
            //}





            open_close = false;
        }
    }

    handleBack(){

    }

    generateSpacers(){

    }

    addToCart(){

    }

    completeOrder(){
        //this will obviosly need a go back button
        //need to create that thing that held the history of the state
    }

  render() {
    return (
     // var children = React.Children.map(this.props.children,
       //   function(child){
         //     return
          //})

      <div className="App">
          <div>
              <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">Mercury Configurator</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="http://mercurycamera.com/">Mercury Site</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="http://mercurycamera.com/downloads/instructions/">Mercury User Guide</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="https://www.facebook.com/groups/mercuryworks/">Facebook</NavLink>
                          </NavItem>
                          <NavItem>
                              <Button color="warning">Cart</Button>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>

          <div className="colmask threecol">
              <div id = "col_mid" className="colmid">



                  <div id="col_left" className="colleft">



                      <div id='col1' className="col1">





                          <div className="components">


                              <Button id="stack_button" color="info" size="lg" block disabled>Camera Stack</Button>


                              <div id = "finish" className="finish_square">
                                  {this.renderFinishSquare()}
                              </div>

                              <div id ="format" className="stack">
                              {this.renderSquare(0)}

                              <div id="space_1" className="integration_space">
                                  {this.renderIntegrationSquare(10)
                                       }

                              </div>

                              {this.renderSquare(1)}
                              {this.renderSquare(2)}
                              <div id="space_2" className="integration_space">
                                  {this.renderIntegrationSquare(11)
                                       }
                              </div>
                              {this.renderSquare(3)}
                              {this.renderSquare(4)}
                              {this.renderSquare(5)}
                              {//this.renderSquare(6)
                                   }
                              {//this.renderSquare(7)
                                   }
                              {//this.renderSquare(8)
                                   }
                              {//this.renderSquare(9)
                                   }
                              </div>
                          </div>

                          <div className="content_group">
                              <ListGroup>
                                  <ListGroupItem>Format: {selection_dict["format"]}</ListGroupItem>
                                  <ListGroupItem>Lens Type: {selection_dict["lens_type"]}</ListGroupItem>
                                  <ListGroupItem>Lens Number: {selection_dict["lens_no"]}</ListGroupItem>
                                  <ListGroupItem>RS-value: {selection_dict["rs_value"]}</ListGroupItem>
                                  <ListGroupItem>Front Panel: {selection_dict["front_panel"]}</ListGroupItem>
                                  <ListGroupItem>Back Type: {selection_dict["back_type"]}</ListGroupItem>
                                  <ListGroupItem>Back Adapter: {selection_dict["back_adapter"]}</ListGroupItem>
                                  <ListGroupItem>Back: {selection_dict["back"]}</ListGroupItem>




                              </ListGroup>

                          <br />

                              <Button color="warning" onClick={() => {this.completeOrder(); this.handleDivs()}}>Integrate Camera</Button>
                              <Button color="danger" onClick={() => this.setState({squares: Array(50).fill(null)})} >Clear
                          </Button>

                          <br />
                          <br />

                              <div id="spacers" className="spacer_stack">
                              <Button id="spacer_button" color="info" size="lg" block disabled>Lens Barrel</Button>


                              {this.renderSpacerSquare(10)}

                              <Button id="spacer_button" color="info" size="lg" block disabled>Spacers</Button>

                              {this.renderSpacerSquare(11)}
                              {this.renderSpacerSquare(12)}
                              {this.renderSpacerSquare(13)}
                              </div>
                          </div>




                      </div>

                      <div id="col2" className="col2">





                          <div id = "left_content">

                              <Button color="info" size="lg" block disabled>Step 1: Select Format</Button>
                              <br />
                              <InputGroup>

                                  <ButtonGroup size="md">

                                      <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                                          <DropdownToggle caret>
                                              Small/Medium
                                          </DropdownToggle>
                                          <DropdownMenu>
                                              <DropdownItem header>Formats</DropdownItem>
                                              <DropdownItem onClick={() => {selection_dict["back_type"] = "Graflox 23/RB67"; selection_dict["format"]="Small/Medium"}}> Graflox 23/RB67 back</DropdownItem>
                                              <DropdownItem onClick={() => {selection_dict["back_type"] = "MUP"; selection_dict["format"]="Small/Medium"}}>Mamiya Universal Press back</DropdownItem>
                                              <DropdownItem onClick={() => {selection_dict["back_type"] = "HV"; selection_dict["format"]="Small/Medium"}}>Hasselblad V backs</DropdownItem>
                                              <DropdownItem onClick={() => {selection_dict["back_type"] = "other"; selection_dict["format"]="Small/Medium"}}>Other</DropdownItem>
                                          </DropdownMenu>
                                      </Dropdown>


                                      <Button  onClick={() => selection_dict["back"] = "large4x5"}>Large 4x5</Button>
                                      <Button  onClick={() => selection_dict["back"] = "large4x7"}>Large 4x7</Button>

                                  </ButtonGroup>



                                  <div>
                                     <PopOver></PopOver>
                                  </div>



                              </InputGroup>


                              <br />

                              <Button color="info" size="lg" block disabled>Step 2: Lens Selection</Button>
                              <br />

                              <InputGroup>



                                  <ButtonGroup size="md">
                                      <Button id="view_button" onClick={() => {selection_dict["lens_type"] = "view"; this.getSquare(0, 37)}}>View</Button>
                                      <Button onClick={() => {selection_dict["lens_type"] = "system"; this.getSquare(0, 34); this.getSquare(1, 33)}}>System</Button>
                                      <Dropdown isOpen={this.state.dropDownOpen2} toggle={this.toggle2}>
                                          <DropdownToggle caret>
                                              Other
                                          </DropdownToggle>
                                      <DropdownMenu>
                                          <DropdownItem header>Other Lenses</DropdownItem>
                                          <DropdownItem onClick={() => {selection_dict["lens_type"] = "Mamiya Universal Press Mount"; this.handleMamiya()}}> Mamiya Universal Press Mount</DropdownItem>
                                          <DropdownItem onClick={() => selection_dict["lens_type"] = "RB67 Lens Mount"}>RB67 Lens Mount</DropdownItem>
                                          <DropdownItem onClick={() => selection_dict["lens_type"] = "weird lens"}>Weird Lens</DropdownItem>
                                          <DropdownItem onClick={() => selection_dict["lens_type"] = "pinhole"}>Pinhole</DropdownItem>
                                          <DropdownItem onClick={() => {selection_dict["lens_type"] = "other"}}>Other</DropdownItem>
                                      </DropdownMenu>
                                      </Dropdown>
                                  </ButtonGroup>

                              </InputGroup>
                              <br />
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">

                                      <InputGroupAddon addonType="prepend">Lens Kit</InputGroupAddon>
                                      <Input id="viewL" value = {this.state.inputValue} placeholder="ex: 32"
                                             onChange={(evt) => {this.setState({inputValue: evt.target.value}) }}
                                             onKeyPress={this.enterPress.bind(this)} />
                                      <InputGroupAddon addonType="append"> <LensTable></LensTable></InputGroupAddon>
                                  </InputGroupAddon>


                              </InputGroup>
                              <br />

                              <InputGroup id="system_lens">
                                  <ListGroupItem>System name:</ListGroupItem>
                                  <ListGroupItem>System Type:</ListGroupItem>
                                  <ListGroupItem>Ilex 4 Shutter: </ListGroupItem>
                                  <ListGroupItem>Copal 3 shutter</ListGroupItem>
                                  <ListGroupItem>Copal 3S shutter</ListGroupItem>
                                  <ListGroupItem>System Type:</ListGroupItem>
                                  <ListGroupItem>RS-0 Spacing: </ListGroupItem>
                                  <ListGroupItem>Notes: </ListGroupItem>




                              </InputGroup>

                              <br />
                              <InputGroup>
                                  <InputGroupText>Current Lens Stack</InputGroupText>
                                  <ListGroup id="stack">
                                      {
                                          Object.keys(this.state.formula).map((item, i) => (
                                              <ListGroupItem key={i}> {item}: {this.state.formula[item]}</ListGroupItem>
                                          ))

                                      }

                                  </ListGroup>
                              </InputGroup>
                              <br />
                              <InputGroup>
                                  <InputGroupText>System Lens Selection</InputGroupText>



                              </InputGroup>
                              <br />


                              <Button color="info" size="lg" block disabled>Step 3: Back Selection</Button>

                              <br />

                              <InputGroup>

                                  <h5>Small and Medium Format</h5>
                                  <Dropdown isOpen={this.state.dropDownOpen3} toggle={this.toggle3}>
                                      <DropdownToggle caret outline>
                                          Graflox/Rb67 Backs (most common)
                                      </DropdownToggle>
                                      <DropdownMenu>
                                          <DropdownItem header>Graflox/RB67</DropdownItem>
                                          <DropdownItem onClick={()=> {{this.getSquare(4, 12);
                                          this.handleBackAdapter();
                                          this.handleBack();
                                          this.getSquare(11, 46);
                                          selection_dict["back"] = "Graflox23"}}}> Graflox 23 compatible roll film back</DropdownItem>
                                          <DropdownItem onClick={() => {{this.getSquare(4, 17);
                                          this.handleBackAdapter();
                                          this.handleBack();
                                          selection_dict["back"] = "Mercury Instax Mini, no DS"}}} > Mercury Instax Mini Back, no Darkslide system</DropdownItem>
                                          <DropdownItem onClick={() => {{this.getSquare(5, 17);
                                              this.handleBackAdapter();
                                              this.handleBack();
                                              selection_dict["back"] = "Mercury Instax Mini, Deluxe DS"}}}>Mercury Instax Mini Back, Deluxe Darkslide </DropdownItem>
                                          <DropdownItem >135 Panoramic Back modification of RB67 Pro Back </DropdownItem>
                                          <DropdownItem >135 Panoramic Back modification of RB67 Pro-S Back  </DropdownItem>
                                          <DropdownItem>135 Panoramic Back modification of RB67 Pro-S 220</DropdownItem>
                                          <DropdownItem>Mercury 6x9 Rollback</DropdownItem>
                                          <DropdownItem>Mercury 6x6 Rollback</DropdownItem>
                                          <DropdownItem>Other Graflok 23 compatible back</DropdownItem>

                                          {/*TODO generate spacer values after all of these things are picked*/}


                                      </DropdownMenu>

                                  </Dropdown>
                                  <Button outline>Mamiya Universal Press Backs</Button>
                                  <Button outline>Hasselblad V Backs</Button>
                                  <h5>Other medium Format Digital Backs</h5>
                                  <Button outline>Mamiya 645 AFD Digital Back</Button>
                                  <Button outline>Constax 645 Digital Back</Button>
                                  <Button outline>Hasselblad H Digital Back</Button>

                                  <Dropdown isOpen={this.state.dropDownOpen4} toggle={this.toggle4}>
                                      <DropdownToggle caret outline>
                                          Large Format 4x5
                                      </DropdownToggle>
                                      <DropdownMenu>
                                          <DropdownItem header>Large Format 4x5</DropdownItem>
                                          <DropdownItem > Sheet Film Holder</DropdownItem>
                                          <DropdownItem > 6x7 of 6x9 Roll Film Back for Graflok 45</DropdownItem>
                                          <DropdownItem >6x12 Roll Film Back </DropdownItem>
                                          <DropdownItem >Grafmatic 45 </DropdownItem>
                                          <DropdownItem >Other Graflok 45 Compatible back  </DropdownItem>
                                      </DropdownMenu>
                                  </Dropdown>

                                  <Dropdown isOpen={this.state.dropDownOpen5} toggle={this.toggle5}>
                                      <DropdownToggle caret outline>
                                          Large Format 5x7
                                      </DropdownToggle>
                                      <DropdownMenu>
                                          <DropdownItem header>Large Format 4x7</DropdownItem>
                                          <DropdownItem > Wooden 5x7 Sheet Film Holder</DropdownItem>
                                          <DropdownItem > Fidelity Deluxe of other Plastic 5x7 Sheet Film Holder</DropdownItem>
                                          <DropdownItem >Canham 6x17 Roll Film Back </DropdownItem>
                                          <DropdownItem >Dayi 6x17 ROll FIlm Back for 5x7 </DropdownItem>

                                      </DropdownMenu>
                                  </Dropdown>




                              </InputGroup>
                              <br />
                              <InputGroup>
                                  <InputGroupText>Special Cameras:</InputGroupText>
                              </InputGroup>
                              <br />
                              <InputGroup>
                                  <InputGroupText>Accessories:</InputGroupText>
                              </InputGroup>

                              <InputGroup>
                                  <InputGroupText>Comment Box TODO</InputGroupText>
                              </InputGroup>

                          </div>



                      </div>



                      <div id="col3" className="col3">

                          <ButtonGroup>
                              <Button color="success" onClick={() => this.addToCart()}>Add all to Cart</Button>

                          </ButtonGroup>

                          <Cards></Cards>
                          <Cards></Cards>
                      </div>
                  </div>
              </div>
              <div id="footer">
                  <p>A site by LJB</p>
              </div>
          </div>

      </div>
    );
  }
}

function Cards(props){

    return(

        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Component</CardTitle>
                    <CardSubtitle>{props.formula}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    {//TODO figure out add to cart function for this
                    }
                    <Button>Add to Cart</Button> <Button>Cancel Component</Button>
                </CardBody>
            </Card>
        </div>

    );

}

class LensTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            lens: "",
            buttonLabel: 'Lens Table',
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    render() {
        return (
            <div>
                <Button color="warning" onClick={this.toggle}>Lenses</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Lens Table</ModalHeader>
                    <ModalBody>
                        {
                            Object.keys(formula_c.formulas).map((item, i) => (
                                <ListGroupItem key={i}><Button onClick={() => this.setState({lens: formula_c.formulas[i]["LensKitNo"]})}>
                                    Lens Kit Number: {formula_c.formulas[i]["LensKitNo"]}</Button>
                                    Name: {formula_c.formulas[i]["Lens"]}
                                    </ListGroupItem>))
                                //this.setState({formula_up: formula_c.formulas[i]})

                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={ () => {this.toggle; selection_dict["lens_no"] = this.state.lens;}}  >Select Lens</Button>{' '} {//needs to render the list group here and close
                    }
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {console.log(selection_dict["lens_no"])}
            </div>
        );
    }
}



class PopOver extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <Button id="Popover1" color="warning" onClick={this.toggle}>
                    Format Help
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>For other formats:</PopoverHeader>
                    <PopoverBody><p>For Polaroid 600, select "Other"</p>
                    <p>70mm, select either “Large Format 4x5” or “Small and Medium: Graflok 23 / RB67 Backs” </p>
                    <p>For Instax Wide select either “Large Format 4x5” or “Small and Medium: Graflok 23 / RB67 Backs”</p>
                    <p>For Instax Square select either “Large Format 4x5” or “Small and Medium: Graflok 23 / RB67 Backs”</p>
                    <p>For Instax Mini, select “Small and Medium: Graflok 23 / RB67 Backs”</p></PopoverBody>
                </Popover>
            </div>
        );
    }
}

export {App};
