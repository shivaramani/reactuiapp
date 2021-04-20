import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class Template extends Component {

    openUrl(value){
        window.open(value, false);
      }
      
      
  render() {
    return (
      <div className="pad-top-30 pad-left-page">
          <div class="row">
            <div class="col-sm-7 col-md-5">
                  <div class="">
                    <h2>Open source</h2>                    
                    <p>Follow me at <button  className="linkbutton" onClick={() => this.openUrl('url')}>link name</button>
                    </p>

                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    header
                                </AccordionItemButton>
                            </AccordionItemHeading>
                           
                            <AccordionItemPanel>
                                html content<br/>
                                <button  className="linkbutton" onClick={() => this.openUrl('url')}>link name</button>
                                
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>    
                    <div className="pad-top-10"></div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    header
                                </AccordionItemButton>
                            </AccordionItemHeading>
                           
                            <AccordionItemPanel>
                                html content<br/>
                                <button  className="linkbutton" onClick={() => this.openUrl('url')}>link name</button>
                                
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>  
                      
                </div>              
            </div>
           
          </div>
      </div>
    );
  }
}
 
export default Template;