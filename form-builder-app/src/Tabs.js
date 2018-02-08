import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export const TabTitles = ['Create', 'Preview', 'Export']

export class FormTabs extends Component {
  render() {
    return (
      <Tabs>
        { this.props.tabTitles.map((pageTitle, key) => { 
          return ( 
            <Tab title={pageTitle} eventKey={key}> 
              {pageTitle}
            </Tab>
        )})}
      </Tabs>
    )
  }
}