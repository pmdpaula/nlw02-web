import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import Input from '../../components/Input/Input';

import './TeacherList.css';

const TeacherList = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os Proffys disponíves.">
      <form id="search-teachers">
        <Input name="subject" label="Matéria" />
        <Input name="week_day" label="Dia da semana" />
        <Input type="time" name="time" label="Hora" />
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      {/* <TeacherItem /> */}
    </main>
  </div>
);

export default TeacherList;
