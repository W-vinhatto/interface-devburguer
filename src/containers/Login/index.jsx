import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import bacground from "../../assets/lanche-bacground.svg"
import { Button } from "../../components/Button"

import {
    ContainerBg,
    Container,
    PDescrition,
    Form,
    InputContainer,
    LinkText,
    Link,
    ErrosForm
} from './style'





export function Login() {
    const navigate = useNavigate()

    const { putUserdata } = useUser()

    const schema = yup.object({
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('Digite um e-mail válido'),
        password: yup
            .string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter no min 6 caracteres')
    })
        .required();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/')
                        }, 2000)
                        return 'seja Bem-vindo(a)'
                    }
                },
                error: 'Email ou senha Incorretos'
            }
        )
        putUserdata(userData)
    }



    return (
        <ContainerBg>
            <img src={bacground} alt="image-lanche" />
            <h1> Ólympo's <spam>BURGUER</spam></h1>
            <Container>
                <PDescrition>Saboreie o Olimpo em cada mordida!<br />
                    onde os deuses e os
                    hambúrgueres se encontram.
                </PDescrition>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label> Email </label>
                        <input {...register('email')} />
                        <ErrosForm>{errors?.email?.message}</ErrosForm>
                    </InputContainer>

                    <InputContainer>
                        <label> Senha </label>
                        <input type='password' {...register('password')} />
                        <ErrosForm>{errors?.password?.message}</ErrosForm>
                    </InputContainer>

                    <LinkText>Esqueci minha senha.</LinkText>

                    <Button type='submit'>Entrar</Button>
                </Form>

                <LinkText>Não possui conta? <Link to='/cadastro' >Clique aqui.</Link></LinkText>
            </Container>
        </ContainerBg>
    )
}