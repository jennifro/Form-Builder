import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabTitles = ['Create', 'Preview', 'Export']

export default function FormTabs (
  create,
  preview,
  jsonText
) {

    return (
      <Tabs id='form-tab-options' animation >
        <Tab title='Create' eventKey='Create'> 
          {create}
        </Tab>
        <Tab title='Preview' eventKey='Preview'> 
          {preview}
        </Tab>
        <Tab title='Export' eventKey='Export'> 
          {jsonText}
        </Tab>        
      </Tabs>
    );
}