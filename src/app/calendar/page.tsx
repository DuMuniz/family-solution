'use client'
import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarButton } from '@/components';
import { BsArrowLeft, BsArrowRight, BsCalendar3, BsCalendarDay, BsCalendarWeek } from 'react-icons/bs';


export default function Calendar() {
  const calendarRef = useRef<FullCalendar>(null);

  const nextHandle = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
    }
  };

  const prevHandle = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
    }
  };

  const todayHandle = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.today();
    }
  }

  const dayHandle = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridDay");
    }
  }

  const weekHandle = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridWeek")
    }
  }

  const monthHandle = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridMonth")
    }
  }

  return (
    <div className='flex flex-col ml-6 w-full h-full'>
      <div className='flex gap-5 mt-2'>
        <CalendarButton onClick={() => prevHandle()}><BsArrowLeft/></CalendarButton>
        <CalendarButton onClick={() => todayHandle()}>Hoje</CalendarButton>
        <CalendarButton onClick={() => nextHandle()}><BsArrowRight/></CalendarButton>
        <CalendarButton onClick={() => dayHandle()}><BsCalendarDay/>Dia</CalendarButton>
        <CalendarButton onClick={() => weekHandle()}><BsCalendarWeek/>Semana</CalendarButton>
        <CalendarButton onClick={() => monthHandle()}><BsCalendar3/>Mês</CalendarButton>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, listPlugin]}
        locale='pt-br'
        headerToolbar={{
          start: '',
          center: 'title',
          end: ''
        }}
      />
    </div>
  )
}