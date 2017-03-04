import React, {Component} from 'react';

import { Accordion, Panel  } from 'react-bootstrap';

import LikeButton from '../detail/Button';
import Input from '../detail/Input'


var Detail = (props) => {
  return (
    <Accordion>
        <Panel header="button" eventKey="1" >
             <LikeButton name="saeed"/>
        </Panel>
        <Panel header="input" eventKey="2">
            <Input/>
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
    </Accordion>
  )
};

module.exports = Detail;