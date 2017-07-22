import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import Search from '../Search/Search';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Dnd extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      events: events
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = {...event, start, end };

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }

  render(){
    return (
      <DragAndDropCalendar
        selectable
        events={this.state.events}
        onEventDrop={this.moveEvent}
        defaultView='month'
        defaultDate={new Date(2017, 6, 12)}
        onSelectEvent={event => alert("Name: " + event.title+'\n' + "Job time:  "+event.start+'\n'+"Description:  "           +event.desc+'\n' + "Email:  " + event.email + '\n'+"Phone:  " + event.phone+'\n' + "Rate:  " + event.rate)}
        onSelectSlot={(slotInfo) => alert("No Clients for This Day")}
      />
    );
  }
}

export default DragDropContext(HTML5Backend)(Dnd);
