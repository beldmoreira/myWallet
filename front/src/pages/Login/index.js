import React, { useState } from 'react';
import api from "../../services/api"
import {useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import {Container, Form, Input, Button, StyledLink} from "../../components/FormComponents"
import Logo from "../../components/Logo"



function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    const navigation = useNavigate();
    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value });
      }
      const { login } = useAuth();
      async function handleSubmit(e) {
        e.preventDefault();
    
        const user = { ...formData };
    
        try {
          const { data } = await api.login(user);
          login(data);
          navigation('/home');
        } catch (error) {
          console.log(error);
          alert("Erro, tente novamente");
        }
      }


    return (
        <Container>
            <Logo> My Wallet </Logo>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={formData.password}
                    required
                />
            <Button type="submit"> Entrar </Button>
            </Form>
            <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}

export default Login;