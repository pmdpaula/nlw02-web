import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import Input from '../../components/Input/Input';

import './TeacherList.css';
import Select from '../../components/Select/Select';

const TeacherList = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os Proffys disponíves.">
      <form id="search-teachers">
        <Select
          name="subject"
          label="Matéria"
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Educação Física', label: 'Artes' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Literatura', label: 'Literatura' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'Espanhol', label: 'Espanhol' },
            { value: 'Filosofia', label: 'Filosofia' },
            { value: 'Química', label: 'Química' },
          ]}
        />
        <Select
          name="week_day"
          label="Dia da semana"
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },
          ]}
        />
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
