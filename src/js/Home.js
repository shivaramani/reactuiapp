import React, { Component } from "react";
import "../js/appConstants.js";
import TypoGraphy from '@material-ui/core/Typography'
import { Grid, Paper, Typography, List, ListItem } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    } from 'react-accessible-accordion';
    
    // Demo styles, see 'Styles' section below for some notes on use.
    import 'react-accessible-accordion/dist/fancy-example.css';
    

class Home extends Component {

constructor(props){
    super(props)
    this.state = {
        appConstants: window.appConstants
    }
    }  
    NavUrl(value){
        window.location.href = window.location.href + value;
    }
    
  render() {
    var appConstants = this.state.appConstants;


        return (
            <div>
                <div style={{ marginTop: 20, padding: 30 }}>
                    <Grid container spacing={40} justify="center">
                        <TypoGraphy variant="h4">
                            <center>Sample ReactApp</center><br/>
                        </TypoGraphy>
                    </Grid>
                    <div className="pad-left-page">
                    <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Sample React UI App
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Welcome to my react app

                                <br/>

                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                </div>
                </div>
            </div>
        )
    
  }
}
 
export default Home;