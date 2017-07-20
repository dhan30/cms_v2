import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import Search from '../Search/Search';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Selectable extends React.Component{
  render(){
    return (
      <div>
      <Search />
      <div {...this.props}>
        <BigCalendar
          selectable
          events={events}
          defaultView='month'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert("Name: " +event.title+'\n'+"Job time:  "+event.start+'\n'+"Description:  "+event.desc+'\n'+"Email:  "+event.email+'\n'+"Phone:  "+event.phone+'\n'+"Rate:  "+event.rate)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
      </div>
    )
  }
}

export default Selectable;
