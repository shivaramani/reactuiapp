import React, { Component } from "react";
import TypoGraphy from '@material-ui/core/Typography'
import { Grid, Paper, Typography, List, ListItem } from "@material-ui/core";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class Overview extends Component {

    constructor(props){
        super(props)
           
      } 

    openUrl(value){
        window.open(value, false);
      }
      
      
  render() {
    return (
        <div>
            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={40} justify="center">
                    <TypoGraphy variant="h4">
                        <center>Overview</center><br/>
                    </TypoGraphy>
                </Grid>  
                <div className="pad-left-page">
            <div class="row">
                <div class="col-sm-7 col-md-5">
                    <div class="">
                        
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Section 1
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            
                                <AccordionItemPanel>
                                - 1) line 1 <br/><br/>

                                - 2) line 2 <br/><br/>
                                    
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>    
                        <div className="pad-top-10"></div>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Section 2
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            
                                <AccordionItemPanel>
                                
                                - 1) line 1 <br/><br/>

                                - 2) line 2 <br/><br/>
                                <br/>

                                <br/>


                                     
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>    
                        
                    </div>              
                </div>
            
            </div>
        </div>
            </div>
        </div>
    );
  }
}
 
export default Overview;