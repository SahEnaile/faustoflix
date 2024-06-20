import React, { useState } from 'react';
import { FormularioButton, FormularioTextarea, FormularioInput, FormularioLabel, FormularioContainer } from "./style";

const FormularioComponent = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <FormularioContainer>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <FormularioLabel>
          Nome:
          <FormularioInput
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </FormularioLabel>
        <FormularioLabel>
          Email:
          <FormularioInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormularioLabel>
        <FormularioLabel>
          Mensagem:
          <FormularioTextarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={4}
            required
          />
        </FormularioLabel>
        <FormularioButton type="submit">Enviar</FormularioButton>
      </form>
    </FormularioContainer>
  );
};

export default FormularioComponent;
