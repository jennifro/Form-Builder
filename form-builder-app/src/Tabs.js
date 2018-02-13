import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabTitles = ['Create', 'Preview', 'Export']

export default function FormTabs (props) {
    return (
      <Tabs id='form-tab-options' animation >
        <Tab title='Create' eventKey='Create'> 
          {props.create} 
        </Tab>
        <Tab title='Preview' eventKey='Preview'> 
          {props.preview}
        </Tab>
        <Tab title='Export' eventKey='Export'> 
          {props.jsonText}
        </Tab>        
      </Tabs>
    );
}