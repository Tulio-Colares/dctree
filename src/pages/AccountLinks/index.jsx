import React from 'react'
import LinkItem from '@/components/LinkItem/index';
import LinkList from '@/components/LinkList/index'

const links = [
    {
      label: "Quero aprender a programar"
    },
    {
      label: "Quero aprender data analytics"
    },
    {
      label: "Quero aprender marketing digital"
    },
    {
      label: "Inscreva-se nos nossos cursos",
      title: "Curso intensivo",
      description: "Veja aqui quais os cursos intensivos estão com turmas abertas e garanta sua vaga."
    },
    {
      label: "Clique e se inscreva",
      title: "Digital Plus",
      description: "Evento exclusivo para alunos!"
    }
  ];
  
  function AccountLinks() {
    return (
      <LinkList>
        { links.map((item, index) => <LinkItem key={index} {...item} />) }
      </LinkList>
    );
  }

export default AccountLinks